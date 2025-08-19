'use client';

import { useEffect, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import Script from 'next/script';

const CALENDLY_EVENT_URL = 'https://calendly.com/tmcelrath26/30min';

// (Optional) Basic allowlist guard for redirect targets.
function isAllowedPayUrl(url: string) {
  try {
    const u = new URL(url);
    return (
      u.hostname === 'www.paypal.com' ||
      u.hostname === 'paypal.com' ||
      u.hostname.endsWith('.paypal.com')
    );
  } catch {
    return false;
  }
}

export default function SchedulePage() {
  const params = useSearchParams();
  const payUrlRaw = useMemo(() => params.get('pay') || '', [params]);
  const payUrl = useMemo(
    () => (isAllowedPayUrl(payUrlRaw) ? payUrlRaw : ''),
    [payUrlRaw]
  );

  useEffect(() => {
    function onMsg(e: MessageEvent) {
      if (!String(e.origin).includes('calendly.com')) return;
      if (e.data?.event === 'calendly.event_scheduled') {
        if (payUrl) window.location.href = payUrl;
      }
    }
    window.addEventListener('message', onMsg);
    return () => window.removeEventListener('message', onMsg);
  }, [payUrl]);

  return (
    <main
      style={{
        minHeight: '100vh',
        display: 'grid',
        placeItems: 'center',
        padding: '2rem',
        background: 'linear-gradient(to bottom, #f3ecdc, #ffffff)',
        fontFamily: 'var(--font-geist-sans)',
      }}
    >
      {/* Calendly embed script */}
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="afterInteractive"
      />
      {/* Calendly inline widget */}
      <link
        href="https://assets.calendly.com/assets/external/widget.css"
        rel="stylesheet"
      />
      <div
        className="calendly-inline-widget"
        data-url={`${CALENDLY_EVENT_URL}?hide_event_type_details=1&hide_landing_page_details=1`}
        style={{ minWidth: '320px', height: '820px', width: '100%', maxWidth: 980 }}
      />
      {payUrl && (
        <p style={{ marginTop: '1rem', fontSize: '0.9rem', opacity: 0.7 }}>
          If the redirect doesn’t trigger after booking, proceed to{' '}
          <a href={payUrl}>payment</a>.
        </p>
      )}
      {!payUrl && payUrlRaw && (
        <p style={{ marginTop: '1rem', color: '#a00', fontSize: '0.9rem' }}>
          The provided payment URL isn’t allowed. Ensure it starts with https://www.paypal.com
        </p>
      )}
      <noscript>
        JavaScript is required to book. You can schedule directly at{' '}
        <a href={CALENDLY_EVENT_URL} target="_blank" rel="noopener noreferrer">
          Calendly
        </a>
        . After booking, return to continue payment.
      </noscript>
    </main>
  );
}
