import React, { useRef } from 'react';
import './InstamartSection.css';

const groceries = [
  { name: 'Fresh Vegetables', image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/NI_CATALOG/IMAGES/CIW/2025/5/14/43e3c412-4ca9-4894-82ba-24b69da80aa6_06c0d2a9-804c-4bf1-8725-7ebd234e144a' },
  { name: 'Fresh Fruits', image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_225,h_225/Instamart/Fruits.png' },
  { name: 'Dairy & Eggs', image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_225,h_225/Instamart/DairyAndEggs.png' },
  { name: 'Bread & Bakery', image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_225,h_225/Instamart/Bread.png' },
  { name: 'Cold Drinks', image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_225,h_225/Instamart/ColdDrinks.png' },
  { name: 'Snacks & Chips', image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_225,h_225/Instamart/SnacksAndChips.png' },
  { name: 'Meat & Fish', image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_225,h_225/Instamart/Chicken.png' },
  { name: 'Ice Cream', image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_225,h_225/Instamart/IceCream.png' },
  { name: 'Tea & Coffee', image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_225,h_225/Instamart/TeaAndCoffee.png' },
  { name: 'Noodles & Pasta', image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_225,h_225/Instamart/NoodlesPasta.png' },
  { name: 'Chocolates', image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_225,h_225/Instamart/Chocolates.png' },
  { name: 'Cooking Oil', image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_225,h_225/Instamart/EdibleOil.png' },
  { name: 'Atta & Rice', image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_225,h_225/Instamart/Atta.png' },
  { name: 'Medicines', image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_225,h_225/Instamart/Medicines.png' },
  { name: 'Cleaning Supplies', image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_225,h_225/Instamart/Cleaners.png' },
  { name: 'Baby Care', image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_225,h_225/Instamart/BabyCare.png' },
  { name: 'Pet Supplies', image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_225,h_225/Instamart/PetFood.png' },
  { name: 'Personal Care', image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_225,h_225/Instamart/PersonalCare.png' },
  { name: 'Spices & Masala', image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_225,h_225/Instamart/Spices.png' },
  { name: 'Sweets', image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_225,h_225/Instamart/Sweets.png' },
];

const InstamartSection = () => {
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
    <div className="instamart-container">
      <div className="instamart-header">
        <div className="instamart-title-group">
          <span className="instamart-badge">Swiggy</span>
          <h2>Instamart</h2>
          <span className="instamart-subtitle">Groceries delivered in minutes</span>
        </div>
        <div className="instamart-scroll-buttons">
          <button className="instamart-scroll-btn" onClick={() => scroll('left')}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 19L5 12l7-7" />
              <path d="M5 12h14" />
            </svg>
          </button>
          <button className="instamart-scroll-btn" onClick={() => scroll('right')}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 5l7 7-7 7" />
              <path d="M19 12H5" />
            </svg>
          </button>
        </div>
      </div>

      <div className="instamart-scroll" ref={scrollRef}>
        <div className="instamart-grid">
          {groceries.map((item, index) => (
            <div key={index} className="grocery-item">
              <div className="grocery-img-wrap">
                <img src={item.image} alt={item.name}
                  onError={(e) => {
                    e.target.src = `https://placehold.co/120x120/f0fdf4/16a34a?text=${encodeURIComponent(item.name)}`;
                  }}
                />
              </div>
              <p className="grocery-name">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InstamartSection;
