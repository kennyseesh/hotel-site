import React, { useRef, useState } from "react";
import "./Gallery.css";

import hotel1 from "./assets/Gallery/Hotel1.jpg";
import hotel2 from "./assets/Gallery/Hotel2.jpg";
import hotel3 from "./assets/Gallery/Hotel3.jpg";
import hotel4 from "./assets/Gallery/Hotel4.jpg";

import doubleroom1 from "./assets/Gallery/doubleroom.jpg";
import doubleroom2 from "./assets/Gallery/doubleroom2.jpg";
import tripleroom1 from "./assets/Gallery/tripleroom.jpg";
import tripleroom2 from "./assets/Gallery/tripleroom2.jpg";
import quadroom1 from "./assets/Gallery/quadroom.jpg";
import quadroom2 from "./assets/Gallery/quadroom2.jpg";
import fiveroom1 from "./assets/Gallery/fiveroom.jpg";
import fiveroom2 from "./assets/Gallery/fiveroom2.jpg";

const Gallery = () => {
  const hotelRef = useRef(null);
  const doubleRef = useRef(null);
  const tripleRef = useRef(null);
  const quadRef = useRef(null);
  const fiveRef = useRef(null);

  const [popupImage, setPopupImage] = useState(null);

  const scrollTo = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  const openPopup = (imgUrl) => {
    setPopupImage(imgUrl);
  };

  const closePopup = () => {
    setPopupImage(null);
  };

  const Image = ({ src, alt }) => (
    <img src={src} alt={alt} onClick={() => openPopup(src)} />
  );

  const contactNote = (
    <p className="room-contact-note">
      For additional details such as bathroom images or other queries, please{" "}
      <a href="/contact">contact us</a>.
    </p>
  );

  return (
    <div className="gallery-container gallery-bg">
      <h1 className="gallery-title">Gallery</h1>

      <div className="gallery-tabs">
        <button onClick={() => scrollTo(hotelRef)}>Hotel View</button>
        <button onClick={() => scrollTo(doubleRef)}>Double Room Set</button>
        <button onClick={() => scrollTo(tripleRef)}>Triple Room Set</button>
        <button onClick={() => scrollTo(quadRef)}>Quad Room Set</button>
        <button onClick={() => scrollTo(fiveRef)}>5+ Room Set</button>
      </div>

      <section ref={hotelRef} className="gallery-section">
        <h2>Hotel View</h2>
        <div className="gallery-images">
          <Image src={hotel1} alt="Hotel View 1" />
          <Image src={hotel2} alt="Hotel View 2" />
          <Image src={hotel3} alt="Hotel View 3" />
          <Image src={hotel4} alt="Hotel View 4" />
        </div>
        {contactNote}
      </section>

      <section ref={doubleRef} className="gallery-section">
        <h2>Double Room Set</h2>
        <div className="gallery-images">
          <Image src={doubleroom1} alt="Double Room 1" />
          <Image src={doubleroom2} alt="Double Room 2" />
        </div>
        {contactNote}
      </section>

      <section ref={tripleRef} className="gallery-section">
        <h2>Triple Room Set</h2>
        <div className="gallery-images">
          <Image src={tripleroom1} alt="Triple Room 1" />
          <Image src={tripleroom2} alt="Triple Room 2" />
        </div>
        {contactNote}
      </section>

      <section ref={quadRef} className="gallery-section">
        <h2>Quad Room Set</h2>
        <div className="gallery-images">
          <Image src={quadroom1} alt="Quad Room 1" />
          <Image src={quadroom2} alt="Quad Room 2" />
        </div>
        {contactNote}
      </section>

      <section ref={fiveRef} className="gallery-section">
        <h2>5+ Room Set</h2>
        <div className="gallery-images">
          <Image src={fiveroom1} alt="5+ Room 1" />
          <Image src={fiveroom2} alt="5+ Room 2" />
        </div>
        {contactNote}
      </section>

      {popupImage && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-btn" onClick={closePopup}>×</span>
            <img src={popupImage} alt="Popup View" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
