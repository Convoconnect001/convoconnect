export default function About() {
  return (
    <section id="about" className="site-about">
      <div className="about-inner">

        {/* LEFT CONTENT */}
        <div>
          <p id="about" className="about-kicker">About</p>

          <h2 className="about-h2">
            Built on one belief: most organisational challenges are rooted in <em>conversation problems.</em>
            </h2>

          <p className="about-p">
            ConvoConnect was founded on the insight that disengagement, weak leadership, and stagnant cultures are often symptoms of ineffective or absent dialogue.
          </p>

          <p className="about-p">
            Our work focuses on restoring these critical conversations.
          </p>

          <p className="about-p">
            Through structured facilitation and experiential interventions, we enable organisations to build environments where communication is intentional, feedback is constructive, and growth is continuous.
          </p>

          {/* PULL QUOTE */}
          <div className="about-pull">
            <p>
              "Trust is built in conversations, not org charts."
            </p>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="about-img">
          <img src="/about.jpeg" alt="About" />
        </div>

      </div>
    </section>
  );
}