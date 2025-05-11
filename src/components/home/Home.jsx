import "./home.css";

import NotStartedOutlinedIcon from "@mui/icons-material/NotStartedOutlined";
const Home = () => {
  return (
    <div className="homecontainer">
      <div className="introduction">
        <NotStartedOutlinedIcon className="introicon" />
        <h4>Introduction</h4>
      </div>
      <div className="wellcome">
        <h1 className="welcomemsg">
          Hello, this is <span className="haftu">Haftu</span> Design and
          Develope <br /> Full Stack Applicaton
        </h1>
        <span>
          “I’m the rare breed that turns wireframes into wonders and code into
          experiences. I don’t hand designs to devs — I am the dev.”
        </span>
      </div>
    </div>
  );
};

export default Home;
