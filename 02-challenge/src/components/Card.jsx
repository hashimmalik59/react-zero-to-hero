import React from "react";

const skillsData = [
  {
    skill: "HTML",
    level: "advance",
    bgColor: "blue",
  },
  {
    skill: "CSS",
    level: "intermediate",
    bgColor: "orange",
  },
  {
    skill: "JavaScript",
    level: "intermediate",
    bgColor: "yellow",
  },
  {
    skill: "TailwindCSS",
    level: "intermediate",
    bgColor: "lightblue",
  },
  {
    skill: "ReactJS",
    level: "basic",
    bgColor: "skyblue",
  },
  {
    skill: "NodeJS",
    level: "basic",
    bgColor: "darkgreen",
  },
];

const Card = ({ image, name, bio }) => {
  return (
    <>
      <div className="card">
        <img src={image} alt={name} width={"100%"} />
        <div className="skill-info">
          <h1>{name}</h1>
          <p>{bio}</p>
          <div className="skill-list">
            {skillsData.map((item) => (
              <Skill
                skill={item.skill}
                bgColor={item.bgColor}
                level={item.level}
                key={item.skill}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

const Skill = ({ skill, bgColor, level }) => {
  return (
    <>
      <div className="skill" style={{ backgroundColor: bgColor }}>
        <span>{skill}</span>
        <span>
          {level === "basic" && "👶"}
          {level === "intermediate" && "👍"}
          {level === "advance" && "💪"}
        </span>
      </div>
    </>
  );
};

export default Card;
