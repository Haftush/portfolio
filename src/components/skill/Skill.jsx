import "./skill.css";
import ConstructionOutlinedIcon from "@mui/icons-material/ConstructionOutlined";

import illustrator from "../../assets/illustraor.png";
import photshop from "../../assets/photoshop.png";
import figma from "../../assets/figma.webp";
import indesin from "../../assets/indesign.png";
import node from "../../assets/nodeimg.png";
import react from "../../assets/reactimg.png";
import css from "../../assets/cssimg.png";
import flutter from "../../assets/flutterimg.png";

const designSkills = [
  { img: illustrator, name: "Illustrator", percent: "98%" },
  { img: photshop, name: "Photoshop", percent: "85%" },
  { img: figma, name: "Figma", percent: "90%" },
  { img: indesin, name: "Indesign", percent: "70%" },
];

const programmingSkills = [
  { img: react, name: "React", percent: "90%" },
  { img: node, name: "Node", percent: "80%" },
  { img: flutter, name: "Flutter", percent: "85%" },
  { img: css, name: "CSS", percent: "95%" },
];

const SkillCard = ({ img, name, percent }) => (
  <div className="icons-container">
    <div className="iconskill">
      <img src={img} alt={name} />
    </div>
    <div className="percent">
      <span>{percent}</span>
    </div>
    <div className="software-name">
      <h3>{name}</h3>
    </div>
  </div>
);

const Skill = () => {
  return (
    <div className="skill-container">
      <div className="skill-button">
        <ConstructionOutlinedIcon style={{ fontSize: "2rem" }} />
        <h4>Skill</h4>
      </div>

      <div className="design">
        {designSkills.map((skill, index) => (
          <div className="software-skill" key={index}>
            <SkillCard {...skill} />
          </div>
        ))}
      </div>

      <div className="programming">
        {programmingSkills.map((skill, index) => (
          <SkillCard {...skill} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Skill;
