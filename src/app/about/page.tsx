// app/about/page.tsx
import React from "react";
import styles from "./About.module.css";

export default function AboutPage() {
  return (
    <main className={styles.page}>
      {/* HERO */}
      <section className={styles.hero} aria-labelledby="about-hero-title">
        <div className={styles.heroGrid}>
          {/* LEFT: Name + Credentials */}
          <div className={styles.heroText}>
            <h1
              id="about-hero-title"
              className={styles.heroTitle}
              aria-label="ABOUT ANTHONI LM"
            >
              <span className={styles.heroName}>Anthoni McElrath</span>
              <span className={styles.heroCredentials}>
                M.S., Ph.D. · Licensed Integrative Mental Health Coach
              </span>
            </h1>
          </div>

          {/* RIGHT: Headshot placeholder */}
          <div className={styles.heroHeadshot}>
            {/* Replace with your image later */}
            <div className={styles.headshotPlaceholder}></div>
          </div>
        </div>
      </section>

      {/* SECTIONS */}
      <Section title="Why I Built This Practice">
        <p>
          There was a point in my life where I had read and studied everything I
          could find—philosophy, psychology, religion, history, and countless
          approaches to self-care and growth. I consumed knowledge obsessively,
          believing it would give me the path to a better life. But despite all
          that study, I couldn’t act. I carried the weight of depression,
          anxiety, and years of instability. Awareness alone was not enough to
          move me out of stagnation and into forward movement and growth.
        </p>
        <p>
          Through that period, I came to see what the stories of history’s
          enlightened leaders were really teaching. Their wisdom was not only in
          what they knew, but in what they did. The path was carried through
          behavior—how they moved through space, how they acted under strain,
          and how they created conditions for their best capacities to emerge.
          We admire them not just for their ideas, but for who they were able to
          be in practice.
        </p>
        <p>
          That realization shifted everything for me. I understood that a
          quality life is built through the alignment of emotional intelligence
          with engineered behaviors—actions that sustain long-term growth,
          protect against what undermines us, and reinforce the conditions for
          our best function. Mental health is part of it, but it is not just
          about mindset. It is also about the structures and actions that keep
          the mind clear, the emotions balanced, and the body capable of
          carrying us through time with purpose.
        </p>
        <p>
          This practice is the translation of that understanding. It takes the
          enduring steps of past leaders and reframes them for today’s social,
          political, and environmental context. My work is helping people
          identify the conditions under which they function at their best—and
          then building the structures and behaviors that allow them to sustain
          it.
        </p>
        <p>
          The mission is simple: to provide the knowledge, tools, and behaviors
          that enable people to achieve and sustain their optimum performance.
          This is performance care in service of life quality. And it is also
          prosocial. When individuals function at their best, they contribute to
          healthier families, stronger organizations, and more resilient
          communities. Improving life for one strengthens life for all.
        </p>
      </Section>

      {/* NEW: Credibility / background section (Option 3) */}

      <Section title="What I Do">
        <p>
          My work is to deliver integrative, psychology-informed mental
          performance care, rooted in sympathetic nervous system regulation,
          COM-B modeling, behavior-identifying assessments, identity structure
          tools, and applied habit engineering.
        </p>
        <p>
          Every client I work with builds a custom Individual Engagement Plan
          (IEP) designed for everyday use. These plans strengthen three domains
          that shape how people function across contexts:
        </p>
        <ol>
          <li>
            <strong>Organizational skills</strong> – creating order, planning
            effectively, and following through.
          </li>
          <li>
            <strong>Emotional regulation</strong> – maintaining composure and
            balance under pressure.
          </li>
          <li>
            <strong>Cognitive load management</strong> – sustaining focus and
            clarity in environments of high demand.
          </li>
        </ol>
        <p>
          The goal is to make action systematic. Clients leave with practices
          and structures they can operate daily—practical, repeatable, and
          durable.
        </p>
      </Section>

      <Section title="Anchors of the Work">
        <p>This practice is anchored in two principles: clarity and momentum.</p>
        <p>
          <strong>Clarity</strong> is the ability to see and organize behavior
          with precision—understanding what drives action, what creates
          friction, and what conditions support your best function.{" "}
          <strong>Momentum</strong> is the capacity to sustain forward movement
          through systematic behaviors and habits—carrying clarity into repeated
          action over time.
        </p>
        <p>
          Together, clarity and momentum form an integrative framework. Clarity
          sharpens awareness; momentum ensures execution. When aligned, they
          create stability in daily life and sustained progress over time.
        </p>
      </Section>

      <Section title="My Commitment">
        <p>
          This practice is built on a conviction: in a world defined by
          information overload, fractured attention, and constant pressure,
          reflection is insufficient. Performance requires structure.
        </p>
        <p>
          My commitment is to provide that structure. I deliver the knowledge,
          tools, and behavioral systems that make clarity and momentum
          sustainable. The aim is both individual improvement and prosocial
          impact—when people function at their best, they strengthen the
          families, organizations, and communities they are part of.
        </p>
        <p>
          The outcome of this work is consistent: to help people perform better,
          recover faster, and live smoother.
        </p>
      </Section>

      {/* Use the light variant where the background is lightest for contrast */}
      <Section title="Outcomes" light>
        <p>
          Clients who work with me gain sharper organization, steadier
          regulation, stronger follow-through, and a clearer sense of direction.
          The systems we build have everyday utility—making it easier to manage
          tasks, regulate stress, and stay consistent—and they also scale to
          high-responsibility roles, where clear structure increases efficiency
          across teams and improves decision-making under pressure. Whether
          applied to daily routines or to leadership environments, the result is
          the same: greater function, resilience, and quality of life, sustained
          by tools that continue to work over time.
        </p>
      </Section>
    </main>
  );
}

/* ---------- Section component ---------- */
function Section({
  title,
  children,
  light = false,
}: {
  title: string;
  children: React.ReactNode;
  light?: boolean;
}) {
  const id = slugify(title);
  return (
    <section
      className={`${styles.section} ${light ? styles.light : ""}`}
      aria-labelledby={id}
    >
      <div className={styles.sectionGrid}>
        {/* LEFT: Big vertical title block */}
        <h2 id={id} className={styles.sectionTitle}>
          {title}
        </h2>

        {/* RIGHT: Body copy */}
        <div className={styles.sectionBody}>{children}</div>
      </div>
    </section>
  );
}

/* ---------- Helpers ---------- */
function slugify(str: string) {
  return str.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "");
}
