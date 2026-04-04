export default function Services() {
  const services = [
    {
      title: "Workforce Development",
      desc: "All levels · Indoor & Outdoor",
      hoverDesc: "Strengthen capability and ownership at every level through structured, experiential learning.",
      hoverTitle: "All levels · Indoor & Outdoor",
      img: "/svc1.jpeg",
    },
    {
      title: "Leadership Development",
      desc: "Senior & Emerging Leaders",
      hoverTitle: "Senior & Emerging Leaders",
      hoverDesc: "Build leaders with the language, presence, and frameworks to inspire accountability.",
      img: "/svc2.jpeg",
    },
    {
      title: "Mid-Manager Growth",
      desc: "Middle Management · Cohort",
      hoverTitle: "Middle Management · Cohort",
      hoverDesc: "We equip mid-managers to navigate upward, lead downward, and deliver across.",
      img: "/svc3.jpeg",
    },
    {
      title: "Campus-to-Corporate",
      desc: "New Joiners · Batch Format",
      hoverTitle: "New Joiners · Batch Format",
      hoverDesc: "This programme builds self-ownership and workplace readiness from day one.",
      img: "/svc4.jpeg",
    },
    {
      title: "Team Building",
      desc: "All Team Sizes · Facilitated",
      hoverTitle: "All Team Sizes · Facilitated",
      hoverDesc: "Structured experiences that rebuild trust and re-establish shared goals.",
      img: "/svc5.jpeg",
    },
  ];

  return (
    <section id="services" className="site-services">

      <div className="services-intro">
        <p className="section-kicker">What We Offer</p>
        <h2 className="section-h2">
          We offer you growth through:
        </h2>
        <p className="services-body">
          Each programme is designed for your organisation and your people.
        </p>
      </div>

      <div className="services-grid">
        {services.map((item, i) => (
          <div className="svc-card" key={i}>

            {/* IMAGE */}
            <div className="svc-card-img">
              <img src={item.img} alt="" />
            </div>

            {/* DEFAULT CONTENT */}
            <div className="svc-card-foot">
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>

            {/* HOVER CONTENT */}
            <div className="svc-card-overlay">
              <p className="ov-tag">{item.hoverTitle}</p>
              <p className="ov-text">{item.hoverDesc}</p>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
}