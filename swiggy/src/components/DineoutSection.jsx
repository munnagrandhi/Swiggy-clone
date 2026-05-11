import React, { useRef } from 'react';
import './DineoutSection.css';

const dineoutPlaces = [
  {
    name: 'The Golden Spoon',
    rating: 4.7,
    description: 'Upscale Indian fine dining with royal Mughal ambiance and live ghazal nights.',
    cuisine: 'North Indian · Mughlai',
    image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/v1583259208/Dineout/plc_lqbm0p.jpg',
    priceFor2: '₹1800 for two',
  },
  {
    name: 'Sakura Japanese Bistro',
    rating: 4.5,
    description: 'Authentic sushi, sashimi & ramen crafted by Japanese chefs in a serene setting.',
    cuisine: 'Japanese · Sushi',
    image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/v1583259208/Dineout/plc_lqbm0p.jpg',
    priceFor2: '₹2200 for two',
  },
  {
    name: 'Bella Italia',
    rating: 4.4,
    description: 'Wood-fired Neapolitan pizzas and homemade pasta in a rustic Italian trattoria.',
    cuisine: 'Italian · Pizza',
    image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/v1583259208/Dineout/plc_lqbm0p.jpg',
    priceFor2: '₹1600 for two',
  },
  {
    name: 'Spice Route',
    rating: 4.6,
    description: 'A flavourful journey across South Indian states with traditional recipes and decor.',
    cuisine: 'South Indian · Kerala',
    image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/v1583259208/Dineout/plc_lqbm0p.jpg',
    priceFor2: '₹1200 for two',
  },
  {
    name: 'The Rooftop Grill',
    rating: 4.8,
    description: 'Panoramic city views, artisan cocktails and premium BBQ platters under the stars.',
    cuisine: 'BBQ · Continental',
    image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/v1583259208/Dineout/plc_lqbm0p.jpg',
    priceFor2: '₹2500 for two',
  },
  {
    name: 'Bombay Brasserie',
    rating: 4.3,
    description: 'Modern Indian cuisine with a bold twist on street food classics and craft beers.',
    cuisine: 'Indian · Street Food',
    image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/v1583259208/Dineout/plc_lqbm0p.jpg',
    priceFor2: '₹1400 for two',
  },
  {
    name: 'Café du Paris',
    rating: 4.5,
    description: 'Parisian-style café serving artisan croissants, crêpes, and fine espresso blends.',
    cuisine: 'French · Café',
    image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/v1583259208/Dineout/plc_lqbm0p.jpg',
    priceFor2: '₹900 for two',
  },
  {
    name: 'Dragon Palace',
    rating: 4.2,
    description: 'Sizzling dim sum, Peking duck and handcrafted Chinese delicacies since 1998.',
    cuisine: 'Chinese · Pan Asian',
    image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/v1583259208/Dineout/plc_lqbm0p.jpg',
    priceFor2: '₹1500 for two',
  },
];

const StarRating = ({ rating }) => (
  <div className="dineout-rating">
    <svg width="13" height="13" viewBox="0 0 24 24" fill="#48c479" stroke="none">
      <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
    </svg>
    <span>{rating}</span>
  </div>
);

const DineoutSection = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -400 : 400,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="dineout-container">
      <div className="dineout-header">
        <div className="dineout-title-group">
          <h2>Best Dineout Places</h2>
          <span className="dineout-subtitle">Book a table at top restaurants near you</span>
        </div>
        <div className="dineout-scroll-buttons">
          <button className="dineout-scroll-btn" onClick={() => scroll('left')}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 19L5 12l7-7" />
              <path d="M5 12h14" />
            </svg>
          </button>
          <button className="dineout-scroll-btn" onClick={() => scroll('right')}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 5l7 7-7 7" />
              <path d="M19 12H5" />
            </svg>
          </button>
        </div>
      </div>

      <div className="dineout-scroll" ref={scrollRef}>
        <div className="dineout-list">
          {dineoutPlaces.map((place, index) => (
            <div key={index} className="dineout-card">
              <div className="dineout-card-img">
                <img
                  src={place.image}
                  alt={place.name}
                  onError={(e) => {
                    e.target.src = `https://placehold.co/300x180/1c1c2e/eb4408?text=${encodeURIComponent(place.name)}`;
                  }}
                />
                <div className="dineout-img-overlay">
                  <span className="dineout-price-tag">{place.priceFor2}</span>
                </div>
              </div>
              <div className="dineout-card-info">
                <div className="dineout-name-row">
                  <h3>{place.name}</h3>
                  <StarRating rating={place.rating} />
                </div>
                <p className="dineout-cuisine">{place.cuisine}</p>
                <p className="dineout-desc">{place.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DineoutSection;
