import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-section">
      <div className="about-content">
        <h2>About Our Hotel</h2>
        <p>
          Nestled in the heart of the city, <strong>Hotel Vikram and Khushi Palace</strong> offers a blend of traditional hospitality and modern luxury. Whether you’re a traveler or a tourist, we ensure a peaceful and comfortable stay with warm ambiance, attentive service, and memorable experiences.
        </p>

        <p>
          यमुनोत्री धाम उत्तराखंड के चार धामों में से एक अत्यंत पवित्र तीर्थस्थल है, जहाँ माँ यमुना का उद्गम स्थल स्थित है। ऊँचे पर्वतों, कलकल बहती पवित्र यमुना नदी और प्राकृतिक सौंदर्य से घिरा यह स्थान आस्था और शांति का अद्वितीय संगम प्रदान करता है। हमारे होटल <strong>Vikram and Khushi Palace</strong> की विशेषता यह है कि यह यमुनोत्री धाम के बहुत ही निकट स्थित है, जिससे श्रद्धालुओं और पर्यटकों को यहाँ ठहरने में न केवल सुविधा मिलती है, बल्कि उन्हें पर्वतीय शुद्ध हवा और आध्यात्मिक ऊर्जा का अनुभव भी होता है।
        </p>

        <div className="map-container">
          <iframe
            title="Hotel Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56362.024617347506!2d77.2427034!3d28.5921404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce36eecaed039%3A0x49388f88dd726be9!2sVikram%20%26%20Khushi%20Palace!5e0!3m2!1sen!2sin!4v1718888888888!5m2!1sen!2sin"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>

          <a
            href="https://maps.app.goo.gl/jLHRxqm6PX9AqGDb8"
            target="_blank"
            rel="noopener noreferrer"
            className="map-button"
          >
            View on Google Maps
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
