import React from "react";
import Hero from "../components/Hero";
import Mission from "../components/Mission";
import Initiatives from "../components/Initiatives";
import ContactForm from "../components/ContactForm";

function Home() {
  return (
    <>
      <section className="mb-5">
        <Hero />
      </section>

      <section className="mb-5">
        <Mission />
      </section>

      <section className="mb-5">
        <Initiatives />
      </section>

      <section className="mb-5">
        <ContactForm />
      </section>
    </>
  );
}

export default Home;
