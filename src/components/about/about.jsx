import "./about.css";
import logo from "../../images/logoWA.jpg"
import NavBar from "../navbar/navbar"

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
      <img className="a-img" src={logo} alt=''></img>
      </div>
      <div className="a-right">
        <h1 className="a-title">What is WOEVEN AFREEKUH ?</h1>
          <p className="a-sub">
            It is a long established fact that a reader will be distracted by the
            readable content.
          </p>
          <p className="a-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat duis aute irure dolor in reprehende.
          </p>
      </div>
    </div>
  );
};

export default About;