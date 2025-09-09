import React from "react";

function Initiatives() {
  const programs = [
    {
      title: "Mentorship Program",
      desc: "Guidance from industry experts to help individuals grow and succeed.",
      icon: "🎓",
    },
    {
      title: "Career Workshops",
      desc: "Skill development, resume building, and career readiness training.",
      icon: "🛠️",
    },
    {
      title: "Community Outreach",
      desc: "Providing essential resources to underprivileged communities.",
      icon: "🤝",
    },
  ];

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Our Initiatives</h2>
      <div className="row">
        {programs.map((p, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card h-100 shadow-sm initiative-card transition">
              <div className="card-body text-center">
                <div style={{ fontSize: "2rem" }}>{p.icon}</div>
                <h5 className="card-title mt-3">{p.title}</h5>
                <p className="card-text">{p.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Initiatives;
