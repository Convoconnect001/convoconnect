export default function WhyUs() {
  return (
    <section className="site-why">

      <p className="section-kicker">The HR Reality</p>

      <h2 className="section-h2">
        ConvoConnect bridges the gap.
      </h2>

      <div className="why-grid">

        {/* CARD 1 (LIGHT + IMAGE) */}
        <div className="why-card card-light">
          <div className="why-card-img">
            <img src="/why1.jpeg" alt="" />
          </div>
          <div className="why-card-body">
            <p className="why-card-tag">The Gap</p>
            <h3 className="why-card-h3">What we see</h3>
            <p className="why-card-p">
              When teams disengage and managers aren’t set up to lead effectively, culture stays on paper instead of showing up in daily interactions.
              The result is predictable: lower retention and plateauing performance.
            </p>
          </div>
        </div>

        {/* CARD 2 (DARK — NO IMAGE) */}
        <div className="why-card card-dark">
            <div className="why-card-img">
            <img src="/why2.jpeg" alt="" />
          </div>
          <div className="why-card-body">
            <p className="why-card-tag">Our Answer</p>
            <h3 className="why-card-h3">What we do</h3>
            <p className="why-card-p">
              We enable organisations through structured conversations and experiential interventions that uncover real dynamics, strengthen trust, and drive alignment—tailored to your people and context.
            </p>
          </div>
        </div>

        {/* CARD 3 (TEAL — NO IMAGE) */}
        <div className="why-card card-teal">
            <div className="why-card-img">
            <img src="/why3.jpeg" alt="" />
          </div>
          <div className="why-card-body">
            <p className="why-card-tag">Your Outcome</p>
            <h3 className="why-card-h3">What changes</h3>
            <p className="why-card-p">
              Teams start communicating with clarity. Managers step up with confidence. And culture shifts—from something defined on paper to something people genuinely want to be part of.
            </p>
          </div>
        </div>

      </div>

    </section>
  );
}