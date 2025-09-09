import React, { useState } from "react";

function RegistrationForm() {
  const [formData, setFormData] = useState({ name: "", email: "", role: "Volunteer" });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for registering as ${formData.role}!`);
  };

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Register</h2>
      <form className="col-md-6 mx-auto" onSubmit={handleSubmit}>
        <input
          className="form-control mb-3 shadow-sm rounded-input"
          name="name"
          placeholder="Full Name"
          onChange={handleChange}
          required
        />
        <input
          className="form-control mb-3 shadow-sm rounded-input"
          type="email"
          name="email"
          placeholder="Email Address"
          onChange={handleChange}
          required
        />
        <select
          className="form-control mb-3 shadow-sm rounded-input"
          name="role"
          onChange={handleChange}
          value={formData.role}
        >
          <option>Volunteer</option>
          <option>Mentor</option>
          <option>Mentee</option>
        </select>
        <button className="btn btn-success w-100 btn-hover-shadow" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}

export default RegistrationForm;
