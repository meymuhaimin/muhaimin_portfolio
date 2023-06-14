import React, { useState } from "react";
import "./skill.css";
import { FaReact, FaCss3, FaSass } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiMui, SiRedux, SiTypescript, SiNextdotjs } from "react-icons/si";
import SkillCard from "../SkillCard/SkillCard";
import { SKILLS } from "./SkillInfo";

const Skill = (skill) => {
  const [showSkillCard, setShowSkillCard] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState("");

  const showSkillCardHandler = (skill) => {
    setSelectedSkill(skill);
    setShowSkillCard(true);
  };

  const closeSkillCardHandler = () => {
    setShowSkillCard(false);
  };

  return (
    <>
      <div className="subtitles">
        <h1>Skills</h1>
      </div>
      <div className="card-container">
        <div className="card" onClick={() => showSkillCardHandler(SKILLS[0])}>
          <FaReact size="9rem" color="#61DBFB" />
          <p>more</p>
        </div>

        <div className="card" onClick={() => showSkillCardHandler(SKILLS[1])}>
          <FaCss3 size="9rem" color="darkblue" />
          <p>more</p>
        </div>

        <div className="card" onClick={() => showSkillCardHandler(SKILLS[2])}>
          <IoLogoJavascript size="9rem" color="#4bfa62" />
          <p>more</p>
        </div>
        <div className="card" onClick={() => showSkillCardHandler(SKILLS[3])}>
          <SiMui size="9rem" color="#0758ed" />
          <p>more</p>
        </div>
        <div className="card" onClick={() => showSkillCardHandler(SKILLS[4])}>
          <SiRedux size="9rem" color="#5300c7" />
          <p>more</p>
        </div>
        <div className="card" onClick={() => showSkillCardHandler(SKILLS[5])}>
          <SiTypescript size="9rem" color="#005dc7" />
          <p>more</p>
        </div>
        <div className="card" onClick={() => showSkillCardHandler(SKILLS[6])}>
          <FaSass size="9rem" color="#cf449e" />
          <p>more</p>
        </div>
        <div className="card" onClick={() => showSkillCardHandler(SKILLS[7])}>
          <SiNextdotjs size="9rem" color="black" />
          <p>more</p>
        </div>
      </div>

      {showSkillCard && (
        <SkillCard
          closeSkillCard={closeSkillCardHandler}
          skill={selectedSkill}
        />
      )}
    </>
  );
};

export default Skill;
