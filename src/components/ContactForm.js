import React, { useState } from "react";

function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
    // Optional: reset form
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="container my-5">
      <div className="text-center mb-4">
        <h2>Contact Us</h2>
        <p className="text-muted">We'd love to hear from you!</p>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <form
            onSubmit={handleSubmit}
            className="p-4 shadow rounded bg-white"
          >
            <input
              className="form-control mb-3"
              name="name"
              value={formData.name}
              placeholder="Your Name"
              onChange={handleChange}
              required
            />
            <input
              className="form-control mb-3"
              type="email"
              name="email"
              value={formData.email}
              placeholder="Your Email"
              onChange={handleChange}
              required
            />
            <textarea
              className="form-control mb-3"
              name="message"
              value={formData.message}
              placeholder="Your Message"
              rows="4"
              onChange={handleChange}
              required
            />
            <button
              className="btn btn-primary w-100"
              type="submit"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
