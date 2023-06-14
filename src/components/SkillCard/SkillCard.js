import React from "react";
import "./skillcard.css";
import { IoIosCloseCircle } from "react-icons/io";

function handleInnerDivClick(event) {
  event.stopPropagation();
}

const SkillCard = ({ closeSkillCard, skill }) => {
  return (
    <div className="skill-card" onClick={closeSkillCard}>
      <div className="skill-card-content" onClick={handleInnerDivClick}>
        <button>
          <IoIosCloseCircle size="2rem" onClick={closeSkillCard} />
        </button>
        <h3>{skill.name}</h3>
        <p>Mastery: {skill.mastery}</p>
        <p>Exposure: {skill.exposure}</p>
      </div>
    </div>
  );
};

export default SkillCard;
