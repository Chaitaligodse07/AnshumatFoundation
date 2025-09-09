import React from "react";

function Hero() {
  return (
    <div className="hero-section bg-light text-center py-5 px-3">
      <div className="container">
        <h1 className="fw-bold display-5 animate-fade-in">
          Empowering Individuals Through Knowledge
        </h1>
        <p className="lead mt-3 animate-fade-in delay-1">
          Join us in building a better future with mentorship, learning, and opportunities.
        </p>
        <a href="/get-involved" className="btn btn-primary btn-lg mt-4 animate-fade-in delay-2">
          Get Involved
        </a>
      </div>
    </div>
  );
}

export default Hero;
