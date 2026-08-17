export default function Home() {
  return (
    <main>
      <header className="nav shell">
        <a className="brand" href="#" aria-label="FlameClick home">
          <span className="mark">F</span>
          <span>FlameClick</span>
        </a>
        <nav>
          <a href="#how">How it works</a>
          <a href="#blueprint">Blueprint</a>
          <button className="button secondary">Sign in</button>
        </nav>
      </header>

      <section className="hero shell">
        <div className="eyebrow">CAMPAIGN INTELLIGENCE / V1</div>
        <h1>Turn the campaign in your head into a strategy you can actually use.</h1>
        <p className="lede">
          FlameClick listens to the situation, finds the strategic pattern underneath it,
          asks what still matters, and assembles a practical campaign blueprint.
        </p>
        <div className="actions">
          <button className="button primary">Analyze a campaign →</button>
          <a href="#how">See how it works</a>
        </div>
        <p className="signal">
          FlameClick evaluates the campaign situation against twenty canonical strategic
          patterns—without showing meaningless scores or rankings.
        </p>
      </section>

      <section className="artifact shell" id="blueprint">
        <div className="artifactTop">
          <span>LIVE OUTPUT / CAMPAIGN BLUEPRINT</span>
          <span>STRATEGY, NOT A SCORE</span>
        </div>
        <div className="artifactGrid">
          <div className="artifactLead">
            <span className="number">01</span>
            <h2>Recommended foundation</h2>
            <h3>The Timely Spark</h3>
            <p>
              A campaign structure built around a moment that already matters to the audience,
              giving the message a natural reason to be noticed now.
            </p>
          </div>
          <div className="artifactNotes">
            <div><span>FlameClick heard</span><strong>There is a real reason to act now.</strong></div>
            <div><span>Strategic implication</span><strong>Lead with relevance before persuasion.</strong></div>
            <div><span>Next intelligence</span><strong>Clarify proof, audience tension, and desired action.</strong></div>
          </div>
        </div>
      </section>

      <section className="how shell" id="how">
        <div className="sectionLabel">THE EXPERIENCE</div>
        <div className="steps">
          {[
            ["01", "Tell FlameClick what is happening", "Start in plain language. No strategy vocabulary required."],
            ["02", "See what it discovered", "Correct the interpretation before anything becomes authoritative."],
            ["03", "Answer only what is still missing", "The smart questioner adapts instead of forcing a fixed questionnaire."],
            ["04", "Receive the blueprint", "The final output turns confirmed campaign intelligence into a usable strategic document."],
          ].map(([n, title, copy]) => (
            <article key={n}>
              <span>{n}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
