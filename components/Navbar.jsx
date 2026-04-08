import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="site-nav">

      <div className="site-nav-logo">
        <img src="/logo.png" alt="ConvoConnect Logo" srcset="" />
      </div>

      {/* DESKTOP LINKS */}
      <div className={`site-nav-links ${open ? "active" : ""}`}>
        <a href="#services" onClick={() => setOpen(false)}>What We Offer</a>
        <a href="#method" onClick={() => setOpen(false)}>How We Work</a>
        <a href="#about" onClick={() => setOpen(false)}>About</a>
        <a href="#testimonials" onClick={() => setOpen(false)}>Client Stories</a>
      </div>

      {/* CTA */}
      <a href="mailto:hubert@convoconnect.in" className="site-nav-cta">Let's Connect →</a>

      {/* HAMBURGER */}
      <div
        className={`hamburger ${open ? "open" : ""}`}
        onClick={() => setOpen(!open)}
        >
        <span />
        <span />
        <span />
        </div>

    </div>
  );
}