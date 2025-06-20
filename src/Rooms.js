// src/Rooms.js
import React from 'react';
import './Room.css';

const places = [
  {
    title: "Kempty Falls",
    image: require('./assets/kemptyfalls.jpg'),
    mapLink: "https://goo.gl/maps/f6F9QBRqz9mPti9j9",
    description: "A popular and scenic waterfall near Mussoorie, perfect for a refreshing stop en route."
  },
  {
    title: "Barkot Valley",
    image: require('./assets/barkotvalley.jpg'),
    mapLink: "https://goo.gl/maps/Z4kXv3C3MZyZVLoq5",
    description: "A serene valley and a major stop for pilgrims heading to Yamunotri."
  },
  {
    title: "Nearby Villages",
    image: require('./assets/Nearbyvillages.jpg'),
    mapLink: "https://goo.gl/maps/E7PBZhyuRgaMw8Ju6",
    description: "You will have a experience of how the actual life is in villages of uttarakhand."
  },
  {
    title: "Gangnani",
    image: require('./assets/Gangnani.jpg'),
    mapLink: "https://goo.gl/maps/KJYtN6wjWjDuwpKR6",
    description: "Known for its hot water springs and a aesthetic beautifull river and mountain view."
  },
  {
    title: "Surya Kund",
    image: require('./assets/suryakund.jpg'),
    mapLink: "https://goo.gl/maps/6ndqZ7tqNgZ7CDM68",
    description: "A sacred hot water spring near Yamunotri temple where pilgrims cook rice as prasad."
  },
  {
    title: "Than Mandir",
    image: require('./assets/thanmandir.jpg'),
    mapLink: "https://dummy-link.com/thanmandir",
    description: "A peaceful spiritual spot surrounded by natural beauty, ideal for a tranquil break on your route."
  },
  {
    title: "Lakhamandal",
    image: require('./assets/lakhamandal.jpg'),
    mapLink: "https://dummy-link.com/lakhamandal",
    description: "An ancient mythological site believed to be associated with the Mahabharata era, rich in history and legend."
  }
];

function Rooms() {
  return (
    <div className="modern-places">
      <div className="header-content">
        <h2>Explore Scenic Stopovers</h2>
        <p>
          Embark on a divine journey to Yamunotri and Gangotri Dham through nature’s splendor and spiritual serenity. Discover some of the most captivating places along the way — our team is here to help make your experience fulfilling and unforgettable.
        </p>
      </div>

      <div className="card-grid">
        {places.map((place, index) => (
          <div className="place-card" key={index}>
            <img src={place.image} alt={place.title} className="place-image" />
            <div className="card-body">
              <h3>{place.title}</h3>
              <p>{place.description}</p>
              <a
                href={place.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="map-button"
              >
                View on Google Maps
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Rooms;
