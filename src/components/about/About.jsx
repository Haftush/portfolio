import "./about.css";
import RecordVoiceOverOutlinedIcon from "@mui/icons-material/RecordVoiceOverOutlined";
import luxury from "./luxury.png";

const About = () => {
  return (
    <div className="aboutcontainer">
      <div className="introduction">
        <RecordVoiceOverOutlinedIcon className="introicon" />
        <h4>About</h4>
      </div>

      <div className="about-content">
        <div className="aboutme">
          <h1>I don’t hand designs to devs — I am the dev</h1>
          <span>
            I'm just beginning my journey as a designer, and I'm excited to keep
            learning and growing every day. I've been exploring design by
            working on small projects, watching tutorials, and getting inspired
            by amazing creators. I love connecting with others and bringing good
            energy wherever I go. That smile up there? That’s me vibing through
            the process—learning, experimenting, and having fun. When I'm not
            practicing design, you’ll probably find me sketching ideas or
            curating my Spotify playlists to keep the creative vibes flowing.
          </span>
        </div>

        <div className="about-image">
          <img src={luxury} alt="Haftu - Designer & Developer" />
        </div>
      </div>
    </div>
  );
};

export default About;
