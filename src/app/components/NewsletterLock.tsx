"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import styles from "./NewsletterLock.module.css";

type NewsletterItem = {
  id: string;
  title: string;
  dateISO: string; // e.g. "2025-07-01"
  summary: string;
  href: string; // detail/issue link
};

type Props = {
  items: NewsletterItem[];
  sectionTitle?: string;
  lockScroll?: boolean; // default true
};

/**
 * Locked vertical scroll newsletter rail:
 * - Occupies 100vh at the bottom of the page.
 * - When this section enters the viewport, body scroll is disabled and
 *   vertical scroll is constrained inside the section.
 * - Exits cleanly when the user scrolls past the last card to the bottom.
 */
export default function NewsletterLock({
  items,
  sectionTitle = "Newsletter",
  lockScroll = true,
}: Props) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [activeLock, setActiveLock] = useState(false);

  // For a stable “bottom exit” unlock: detect when scrolled to final snap pane bottom.
  const isAtBottom = () => {
    const el = containerRef.current;
    if (!el) return false;
    return el.scrollTop + el.clientHeight >= el.scrollHeight - 2; // small epsilon
  };

  const isAtTop = () => {
    const el = containerRef.current;
    if (!el) return true;
    return el.scrollTop <= 1;
  };

  // Body scroll control
  useEffect(() => {
    if (!lockScroll) return;
    const el = containerRef.current;
    if (!el) return;

    const root = document.documentElement;
    const body = document.body;

    let io: IntersectionObserver | null = null;

    const enableBodyScroll = () => {
      body.style.overflow = "";
      root.style.overscrollBehavior = "";
    };

    const disableBodyScroll = () => {
      body.style.overflow = "hidden";
      root.style.overscrollBehavior = "contain";
    };

    // Observe when the section is dominant in view to toggle lock
    io = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        // Activate lock when at least 60% visible
        const shouldLock = entry.isIntersecting && entry.intersectionRatio >= 0.6;
        setActiveLock(shouldLock);
      },
      { threshold: [0.0, 0.6, 1.0] }
    );

    io.observe(el);

    return () => {
      io?.disconnect();
      enableBodyScroll();
    };
  }, [lockScroll]);

  // Apply/remove body lock when active
  useEffect(() => {
    if (!lockScroll) return;
    const body = document.body;
    const root = document.documentElement;

    const enableBodyScroll = () => {
      body.style.overflow = "";
      root.style.overscrollBehavior = "";
    };

    const disableBodyScroll = () => {
      body.style.overflow = "hidden";
      root.style.overscrollBehavior = "contain";
    };

    if (activeLock) {
      disableBodyScroll();
    } else {
      enableBodyScroll();
    }

    return () => {
      enableBodyScroll();
    };
  }, [activeLock, lockScroll]);

  // Allow “escape” gesture: if user reaches top and scrolls up, or reaches bottom and scrolls down, release lock
  useEffect(() => {
    if (!lockScroll) return;

    const onWheel = (e: WheelEvent) => {
      const el = containerRef.current;
      if (!el) return;

      if (activeLock) {
        const delta = e.deltaY;
        const atTop = isAtTop();
        const atBottom = isAtBottom();

        // If the user tries to scroll past boundaries, unlock so page scroll can continue
        if ((atTop && delta < 0) || (atBottom && delta > 0)) {
          setActiveLock(false);
        }
      }
    };

    window.addEventListener("wheel", onWheel, { passive: true });
    return () => window.removeEventListener("wheel", onWheel);
  }, [activeLock, lockScroll]);

  // Keyboard accessibility for snapping and unlock
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      const el = containerRef.current;
      if (!el) return;
      if (!activeLock) return;

      const PAGE = el.clientHeight;

      if (e.key === "PageDown" || e.key === " ") {
        e.preventDefault();
        el.scrollBy({ top: PAGE, behavior: "smooth" });
        if (isAtBottom()) setActiveLock(false);
      } else if (e.key === "PageUp") {
        e.preventDefault();
        el.scrollBy({ top: -PAGE, behavior: "smooth" });
        if (isAtTop()) setActiveLock(false);
      } else if (e.key === "Escape") {
        setActiveLock(false);
      } else if (e.key === "ArrowDown") {
        el.scrollBy({ top: Math.round(PAGE * 0.9), behavior: "smooth" });
      } else if (e.key === "ArrowUp") {
        el.scrollBy({ top: Math.round(-PAGE * 0.9), behavior: "smooth" });
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeLock]);

  // Chronological order (newest first), then format the date label
  const sorted = useMemo(
    () =>
      [...items].sort(
        (a, b) => new Date(b.dateISO).getTime() - new Date(a.dateISO).getTime()
      ),
    [items]
  );

  const formatted = useMemo(
    () =>
      sorted.map((n) => ({
        ...n,
        dateLabel: new Date(n.dateISO).toLocaleDateString(undefined, {
          year: "numeric",
          month: "short",
          day: "numeric",
        }),
      })),
    [sorted]
  );

  return (
    <section
      className={styles.wrapper}
      aria-label={sectionTitle}
      id="newsletter-lock"
    >
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <h2 className={styles.title}>{sectionTitle}</h2>
          <p className={styles.kicker}>Recent issues</p>
        </div>
      </header>

      <div
        ref={containerRef}
        className={styles.scroller}
        role="region"
        aria-roledescription="Locked vertical scroll list"
        aria-label="Newsletter issues"
        tabIndex={0}
      >
        {formatted.map((n, i) => (
          <article
            key={n.id}
            className={styles.card}
            aria-labelledby={`nl-${n.id}-title`}
          >
            <div className={styles.cardInner}>
              <div className={styles.meta}>
                <span className={styles.index}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <time className={styles.date} dateTime={n.dateISO}>
                  {n.dateLabel}
                </time>
              </div>

              <h3 id={`nl-${n.id}-title`} className={styles.cardTitle}>
                {n.title}
              </h3>

              <p className={styles.summary}>{n.summary}</p>

              <div className={styles.actions}>
                <a
                  className={styles.link}
                  href={n.href}
                  aria-label={`Open newsletter issue: ${n.title}`}
                >
                  Read issue
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>

      <footer className={styles.footer}>
        <button
          className={styles.unlock}
          type="button"
          onClick={() => setActiveLock(false)}
          aria-label="Exit locked scroll"
        ></button>
      </footer>
    </section>
  );
}
