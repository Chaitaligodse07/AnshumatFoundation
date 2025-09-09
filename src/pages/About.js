import React from "react";

function About() {
  return (
    <div className="container my-5 p-4 about-section rounded shadow-sm">
      <h2 className="text-center mb-3">About Us</h2>
      <hr className="mx-auto my-3" style={{ width: "60px", borderTop: "3px solid #0d6efd" }} />
      <p className="fs-5 text-center">
        Anshumat Foundation is a Section 8 non-profit organization dedicated to
        empowering individuals through mentorship, education, and career development.
        We believe in creating lasting social impact by bridging the gap between
        knowledge and opportunity.
      </p>
    </div>
  );
}

export default About;
