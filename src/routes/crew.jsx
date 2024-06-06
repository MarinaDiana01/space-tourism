import "./crew.css";
import { useState } from "react";
import crewDouglasIcon from "../assets/crew/image-douglas-hurley.png";
import crewMarkIcon from "../assets/crew/image-mark-shuttleworth.png";
import crewVictorIcon from "../assets/crew/image-victor-glover.png";
import crewAnoushehIcon from "../assets/crew/image-anousheh-ansari.png";

const crew = [
  {
    name: "Douglas Hurley",
    image: crewDouglasIcon,
    role: "Commander",
    bio: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
  },
  {
    name: "Mark Shuttleworth",
    image: crewMarkIcon,
    role: "Mission Specialist",
    bio: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
  },
  {
    name: "Victor Glover",
    image: crewVictorIcon,
    role: "Pilot",
    bio: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
  },
  {
    name: "Anousheh Ansari",
    image: crewAnoushehIcon,
    role: "Flight Engineer",
    bio: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
  },
];

const CrewPage = () => {
  const [fadeOut, setFadeOut] = useState(false);
  const [selectedCrewPerson, setSelectedCrewPerson] = useState(crew[0]);

  const handleCrewPersonChange = (person) => {
    setFadeOut(true);

    setTimeout(() => {
      setSelectedCrewPerson(person);
      setFadeOut(false);
    }, 300);
  };

  return (
    <main className="crew-page-container">
      <h1 className="crew-page-title">
        <span>02</span> Meet your crew
      </h1>
      <div className="crew-page-menu">
        {crew.map((person) => (
          <button
            key={person.name}
            onClick={() => handleCrewPersonChange(person)}
            className={selectedCrewPerson.name === person.name ? "active" : ""}
          ></button>
        ))}
      </div>

      <article
        className={`article-crew-container ${
          fadeOut === true ? "fade-out" : "fade-in"
        }`}
      >
        <h2 className="article-crew-title">{selectedCrewPerson.role}</h2>
        <p className="article-crew-subtitle">{selectedCrewPerson.name}</p>

        <p>{selectedCrewPerson.bio}</p>
      </article>

      <img
        className={fadeOut === true ? "fade-out" : "fade-in"}
        src={selectedCrewPerson.image}
        alt={selectedCrewPerson.name}
      />
    </main>
  );
};

export default CrewPage;
