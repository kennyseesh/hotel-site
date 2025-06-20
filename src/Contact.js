import React, { useState } from "react";
import "./Contact.css";
import contactImage from "./assets/contact.jpg";
import devtaBg from "./assets/Devtaimg.jpg"; // 🆕 Import the background image
import { FaWhatsapp, FaInstagram, FaFacebook, FaMoon, FaSun } from "react-icons/fa";

const Contact = () => {
  const phone = "+917906200717";
  const whatsappLink = `https://wa.me/${phone.replace("+", "")}`;
  const email = "sumitchauhan9303@gmail.com";

  const [darkMode, setDarkMode] = useState(false);

  return (
    <div
      className={`minimal-contact-container ${darkMode ? "dark" : ""}`}
      style={{
        backgroundImage: `url(${devtaBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* 🌙 Dark Mode Toggle */}
      <div className="dark-toggle" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? <FaSun /> : <FaMoon />}
      </div>

      {/* Background overlay for readability */}
      <div className="contact-overlay">
        {/* Image Section */}
        <div className="contact-image-section">
          <img src={contactImage} alt="Contact Us" />
        </div>

        {/* Info Section */}
        <div className="contact-info-section">
          <h1>Contact Us</h1>
          <p>We’re happy to assist you anytime.</p>

          <div className="contact-detail">
            <h3>📞 Phone:</h3>
            <a href={`tel:${phone}`}>{phone}</a>
          </div>

          <div className="contact-detail">
            <h3>💬 WhatsApp:</h3>
            <a href={whatsappLink} target="_blank" rel="noreferrer">
              Message us on WhatsApp
            </a>
          </div>

          <div className="contact-detail">
            <h3>📧 Email:</h3>
            <a href={`mailto:${email}`}>{email}</a>
          </div>

          {/* 🌐 Social Icons */}
          <div className="social-icons">
            <a
              href="https://www.instagram.com/hotel_vikram_palce_?utm_source=qr&igsh=ejF2bHh3aXA1N2I0"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <FaFacebook />
            </a>
          </div>
        </div>
      </div>

      {/* 🟢 Floating WhatsApp Button */}
      <a
        href={whatsappLink}
        className="floating-whatsapp"
        target="_blank"
        rel="noreferrer"
        title="Chat on WhatsApp"
      >
        <FaWhatsapp />
      </a>
    </div>
  );
};

export default Contact;
