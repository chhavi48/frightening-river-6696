import React from "react";
import "./Frontpage.css";
import { AiFillStar } from "react-icons/ai";
import { BsStarHalf, BsGithub } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { SiNotion, SiAsana, SiBasecamp, SiClickup } from "react-icons/si";
import { FaJira, FaTrello } from "react-icons/fa";
import { CgMonday } from "react-icons/cg";
import SplitWithImage from "../carousel1/img";
const Frontpage = () => {
  return (
    <div className="container">
      <div className="star">
        <AiFillStar color="orange" />
        <AiFillStar color="orange" />
        <AiFillStar color="orange" />
        <AiFillStar color="orange" />
        <BsStarHalf color="orange" />
        <div className="stars">4.5[500+reviews]</div>
      </div>
      <div className="head">
        <h1>
          Powerful time tracking software with <br></br>hassle-free integrations
        </h1>
      </div>
      <div className="para">
        <h1>
          Accurate time tracker for budgeting, client invoicing and painless
          payroll.<br></br> Works with the apps your team already use
        </h1>
      </div>
      <div className="input">
        <input type="text" placeholder="Work email..." />
        <button>Try free</button>
      </div>
      <div className="google">
        <FcGoogle />
        <a href="#/">Or sign up with Google Account</a>{" "}
      </div>
                 <SplitWithImage/>
      <div className="head2">
        <h1>
          Track time and watch progress inside <br></br>the most popular apps
        </h1>
      </div>
      <div className="logo">
        <SiAsana color="Magenta" />
        <div>Asana</div>
        <FaTrello color="blue" />
        <div>Trello</div>
        <SiBasecamp color="green" />
        <div>Basecamp</div>
        <FaJira color="blue" />
        <div>Jira</div>
        <BsGithub />
        <div>Github</div>
        <SiClickup color="purple" />
        <div>ClickUp</div>
        <CgMonday color="red" />
        <div>Monday</div>
        <SiNotion />
        <div>Notion</div>
      </div>
    </div>
  );
};

export default Frontpage;
