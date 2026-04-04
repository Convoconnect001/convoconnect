export default function Hero() {
  return (
    <section className="site-hero">

      <div className="site-hero-inner">

        {/* LEFT CONTENT */}
        <div className="hero-copy">
          <p className="hero-kicker">
            HR Training & Development
          </p>

          <h1 className="hero-h1">
            Connecting through <em>conversations.</em>
          </h1>

          <p className="hero-body">
            ConvoConnect partners with HR leaders to build stronger workplaces —
            through structured conversations and immersive experiential programmes.
          </p>

          <div className="hero-btns">
            <div className="btn-primary">Let's Connect →</div>
            <a className="btn-ghost" href="#services">
              Explore What We Offer →
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="hero-img-wrap">
          <img src="/hero.jpeg" alt="Hero" />
        </div>

      </div>

    </section>
  );
}