import React from "react";

function Footer() {
  return (
    <footer className="bg-dark text-light text-center p-3 mt-5">
      <p className="mb-0">© {new Date().getFullYear()} Anshumat Foundation | All Rights Reserved</p>
      <div>
        <a
          href="https://www.facebook.com/ansumanfoundation/"
          className="text-light mx-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          Facebook
        </a>
        <a
          href="https://www.linkedin.com/in/YourProfile"
          className="text-light mx-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a
          href="https://twitter.com/YourProfile"
          className="text-light mx-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter
        </a>
      </div>
    </footer>
  );
}

export default Footer;
