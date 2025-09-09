import React from "react";
import RegistrationForm from "../components/RegistrationForm";

function GetInvolved() {
  return (
    <>
      <div className="container my-5 p-4 about-section rounded shadow-sm">
        <h2 className="text-center mb-3">Get Involved</h2>
        <hr className="mx-auto my-3" style={{ width: "60px", borderTop: "3px solid #0d6efd" }} />
        <p className="fs-5 text-center mb-4">
          Be part of our mission! Join us as a mentor, mentee, or volunteer and
          make a difference in someone's life.
        </p>
      </div>
      <RegistrationForm />
    </>
  );
}

export default GetInvolved;
