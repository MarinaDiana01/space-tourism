import "./technology.css";
import { useState } from "react";
import launchVehicleIcon from "../assets/technology/image-launch-vehicle.jpg";
import spaceportIcon from "../assets/technology/image-spaceport.jpg";
import spaceCapsuleIcon from "../assets/technology/image-space-capsule.jpg";

const technologies = [
  {
    name: "Launch vehicle",
    image: launchVehicleIcon,
    description:
      "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
  },
  {
    name: "Spaceport",
    image: spaceportIcon,
    description:
      "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
  },
  {
    name: "Space capsule",
    image: spaceCapsuleIcon,
    description:
      "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
  },
];

const TechnologyPage = () => {
  const [fadeOut, setFadeOut] = useState(false);
  const [selectedTechnology, setSelectedTechnology] = useState(technologies[0]);

  const handleTechnologyChange = (technology) => {
    setFadeOut(true);

    setTimeout(() => {
      setSelectedTechnology(technology);
      setFadeOut(false);
    }, 300);
  };

  return (
    <main className="technology-page-container">
      <h1 className="technology-page-title">
        <span>03</span> Space launch 101
      </h1>
      <div className="technology-page-menu">
        {technologies.map((technology, index) => (
          <button
            key={index}
            onClick={() => handleTechnologyChange(technology)}
            className={
              selectedTechnology.name === technology.name ? "active" : ""
            }
          >
            {index + 1}
          </button>
        ))}
      </div>

      <article
        className={`article-technology-container ${
          fadeOut === true ? "fade-out" : "fade-in"
        }`}
      >
        <h2 className="article-technology-title">the terminology...</h2>
        <p className="article-technology-subtitle">{selectedTechnology.name}</p>

        <p className="article-technology-content">
          {selectedTechnology.description}
        </p>
      </article>

      <div className="article-technology-image-container">
        <img
          className={`${fadeOut === true ? "fade-out" : "fade-in"}`}
          src={selectedTechnology.image}
          alt={selectedTechnology.name}
        />
      </div>
    </main>
  );
};

export default TechnologyPage;
