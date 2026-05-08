import { useEffect, useRef, useState } from "react";
import Card from "./Card";

function Hero() {
  const locationRef = useRef();
  const [location, setLocation] = useState("");
  const [search, setSearch] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // manual validation
    if (location === "" || search === "") {
      alert("Please fill all fields!");
      return;
    }

    setSubmitted(true);
  };
  useEffect(() => {
    locationRef.current.focus();
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <section className="hero">
        <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png" alt="left" className="hero-img left-img" />

        <div className="hero-content">
          <h1>
            Order food & groceries.<br />
            Discover best restaurants.<br />
            Swiggy it!
          </h1>

          <div className="search-box">
            <input
              ref={locationRef}
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Enter Delivery location"
              required
            />

            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search for restaurant, food & more"
              required
            />

            <button type="submit">Search</button>
            {submitted && <p>Searching...</p>}
          </div>
        </div>

        <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png" alt="right" className="hero-img right-img" />
        <div className="services">
          <Card
            title="Food Delivery"
            dec="from resturent"
            offer="UPTO 60% OFF"
            imge="Screenshot 2026-04-27 173527.png"
            link="/food"
          />
          <Card
            title="Instamart"
            dec="from resturent"
            offer="UPTO 60% OFF"
            imge="Screenshot 2026-04-27 173539.png"
            link="/instamart"
          />
          <Card
            title="Dineout"
            dec="from resturent"
            offer="UPTO 60% OFF"
            imge="Screenshot 2026-04-27 173546.png"
            link="/dineout"
          />
        </div>
      </section>
    </form>
  );
}

export default Hero;