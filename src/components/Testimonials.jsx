import { useState } from "react";

export default function Testimonials() {
  const [active, setActive] = useState(null);

  const testimonials = [
    {
      text: `Pulling a leadership team out for a strategic offsite represents a meaningful investment — in time, budget, and organizational focus. The bar for tangible impact is high...`,
      full: `Pulling a leadership team out for a strategic offsite represents a meaningful investment — in time, budget, and organizational focus. The bar for tangible impact is high, and this engagement cleared it decisively.

The facilitator came prepared with a thorough understanding of our brief, designed activities that surfaced genuine team dynamics rather than relying on formulaic exercises, and commanded the room with a presence that earned the respect of even our most skeptical leaders.

The outcomes spoke for themselves: a shared language, sharper accountability, and — perhaps most importantly — a leadership team that left genuinely motivated to work together. That last result is far more difficult to engineer than it appears.

I would engage them again without hesitation and recommend them without reservation.

The facilitator came prepared with a thorough understanding...

I would engage them again without hesitation.`,
      author: "Office Manager · Coats",
      name: "Shalini Raju",
      image: "/testimonial1.jpeg",
    },
    {
      text: `The ‘Essence of Excellence’ session by ConvoConnect brought a fresh and experiential perspective...`,
      full: `The ‘Essence of Excellence’ session by ConvoConnect brought a fresh and experiential perspective to understanding key competencies. The hands-on activity of creating personalized blends effectively translated abstract concepts into meaningful takeaways. The session was engaging, well-structured, and added significant value to our HR teams across divisions.`,
      author: "Chief Manager (HR) · HAL",
      name: "Swapna Uthappa",
      image: "/testimonial2.jpeg",
    },
  ];

  return (
 <section id="testimonials" className="testimonial-marquee">
      <div className="t-container">
        <p className="t-kicker">Client Stories</p>
        <h2 className="t-title">
          Real words. <br/>
          Real programmes. <br/>
          Real change.
        </h2>
        <div className="t-marquee">
          <div className="t-track">
            {[...testimonials, ...testimonials, ...testimonials].map((t, i) => (
              <div
                className="t-card"
                key={i}
                onClick={() => setActive(t)}  /* ✅ CLICK */
              >
                <div className="t-top">
                  <img src={t.image} alt="" />
                  <div className="t-author-col">
                  <span>{t.name}</span>
                  <span>{t.author}</span>
                  </div>
                </div>

                <p className="t-text">{t.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ✅ MODAL */}
        {active && (
          <div className="t-modal" onClick={() => setActive(null)}>
            <div
              className="t-modal-content"
              onClick={(e) => e.stopPropagation()} /* prevent close */
            >
              <p className="t-full">{active.full}</p>
              <p className="t-author">{active.author}</p>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}