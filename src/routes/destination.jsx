import "./destination.css";
import { useState } from "react";
import moonIcon from "../assets/destination/image-moon.png";
import marsIcon from "../assets/destination/image-mars.png";
import europaIcon from "../assets/destination/image-europa.png";
import titanIcon from "../assets/destination/image-titan.png";

const destinations = [
  {
    name: "Moon",
    image: moonIcon,
    description:
      "See our planet as you've never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you're there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    distance: "384,400 km",
    travel: "3 days",
  },
  {
    name: "Mars",
    image: marsIcon,
    description:
      "Don't forget to pack your hiking boots. You'll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It's two and a half times the size of Everest!",
    distance: "225 mil. km",
    travel: "9 months",
  },
  {
    name: "Europa",
    image: europaIcon,
    description:
      "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover's dream. With an icy surface, it's perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
    distance: "628 mil. km",
    travel: "3 years",
  },
  {
    name: "Titan",
    image: titanIcon,
    description:
      "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
    distance: "1.6 bil. km",
    travel: "7 years",
  },
];

const DestinationPage = () => {
  const [fadeOut, setFadeOut] = useState(false);
  const [selectedDestination, setSelectedDestination] = useState(
    destinations[0]
  );

  const handleDestinationChange = (destination) => {
    setFadeOut(true);

    setTimeout(() => {
      setSelectedDestination(destination);
      setFadeOut(false);
    }, 300);
  };

  return (
    <main className="destination-page-container">
      <h1 className="destination-page-title">
        <span>01</span>Pick your destination
      </h1>
      <img
        src={selectedDestination.image}
        alt={selectedDestination.name}
        className={fadeOut === true ? "fade-out" : "fade-in"}
      ></img>

      <div className="destination-page-menu">
        {destinations.map((destination) => (
          <button
            key={destination.name}
            onClick={() => handleDestinationChange(destination)}
            className={
              selectedDestination.name === destination.name ? "active" : ""
            }
          >
            {destination.name}
          </button>
        ))}
      </div>

      <article
        className={`article-destination-container ${
          fadeOut === true ? "fade-out" : "fade-in"
        }`}
      >
        <h2 className="article-destination-title">
          {selectedDestination.name}
        </h2>
        <p className="article-destination-content">
          {selectedDestination.description}
        </p>
        <div className="article-destination-information-container">
          <div className="article-destination-information">
            <h3>Avg. distance</h3>
            <p>{selectedDestination.distance}</p>
          </div>
          <div className="article-destination-information">
            <h3>Est. travel time</h3>
            <p>{selectedDestination.travel}</p>
          </div>
        </div>
      </article>
    </main>
  );
};

export default DestinationPage;
