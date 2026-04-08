export default function Programmes() {
  const programmes = [
    {
      title: "Trust & Communication",
      desc: "Structured experiences that uncover hidden dynamics, reduce communication barriers, and enable authentic dialogue across teams.",
      tag: "Indoor · Any Size",
      img: "/prog1.jpeg",
    },
    {
      title: "Strategy & Problem Solving",
      desc: "Put teams into real challenges and you see what actually happens—who steps up, who holds back, and where things break down.",
      tag: "Indoor & Outdoor",
      img: "/prog2.jpeg",
    },
    {
      title: "Collaboration at Scale",
      desc: "Designed for large cohorts, these experiences replicate organisational complexity—enabling alignment, collaboration, and coordinated execution at scale.",
      tag: "Outdoor · Large Groups",
      img: "/prog3.jpeg",
    },
    {
      title: "Reflection & Purpose",
      desc: "Thoughtfully designed experiences that create space for reforganisationalng individuals to connect their personal journey with the broader team narrative.",
      tag: "Indoor · Small Groups",
      img: "/prog4.jpeg",
    },
  ];

  return (
    <section className="site-programmes">

    <div className="prog-intro">

    <p className="section-kicker">
        Programmes & Experiences
    </p>

    <h2 className="section-h2">
         Experiences that engage every sense—and drive real, lasting change.
    </h2>

    <p className="prog-body">
        Our interventions are designed as multi-sensory experiences that challenge existing perspectives and enable meaningful breakthroughs beyond traditional training approaches.
    </p>

    </div>

      <div className="prog-grid">
        {programmes.map((item, i) => (
          <div className="prog-card" key={i}>

            {/* IMAGE */}
            <div className="prog-card-img">
              <img src={item.img} alt="" />
            </div>

            {/* CONTENT */}
            <div className="prog-card-body">
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
              <div className="prog-tag">{item.tag}</div>
            </div>

          </div>
        ))}
      </div>

      <p className="prog-footnote">
        Every experience is custom-scoped to your team's size, culture, and goals. No two programmes are ever identical.
      </p>

    </section>
  );
}