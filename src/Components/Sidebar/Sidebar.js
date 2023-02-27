import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Profile_Picture from "../../Assets/profile.png";
import Resume from "../../Assets/resume.pdf";
import "./Sidebar.scss";

const tools = [
  {
    title: "JavaScript",
    percent: "80%",
  },
  {
    title: "React Js",
    percent: "90%",
  },
  {
    title: "Node Js",
    percent: "94%",
  },
  {
    title: "Express Js",
    percent: "96%",
  },
  {
    title: "MongoDB",
    percent: "95%",
  },
  {
    title: "TypeScript",
    percent: "80%",
  },
];

const allTools = [
  {
    title: "JavaScript, HTML, CSS",
  },
  {
    title: "AJAX, React Js, Node Js",
  },
  {
    title: "Express, Rest API, JWT",
  },
  {
    title: "CSS3, Material UI",
  },
  {
    title: "MySQL, React Native",
  },
  {
    title: "Git, NPM, VS Code",
  },
  {
    title: "Firebase, Heroku",
  },
  {
    title: "Netlify, Jira, Postman",
  },
];

export default function Sidebar() {
  return (
    <div className="sidebar">
      {/* Top section */}
      <div className="profile">
        <div className="image_container">
          <div className="img">
            <img src={Profile_Picture} alt="" />
          </div>
          <div className="zoom_image"></div>
          <div className="dot"></div>
        </div>
        <h2 className="author_name">
          <Link to="/">Anondo Bormon</Link>
        </h2>
        <h6 className="title">
          Full-Stack Web Developer <br /> Ui/UX Designer
        </h6>
      </div>

      {/* Middle section */}
      <div className="profile_details">
        <div className="residence">
          <h6>Residence</h6>
          <h6>Bangladesh</h6>
        </div>
        <div className="residence">
          <h6>City: </h6>
          <h6>Dhaka</h6>
        </div>
        <div className="residence">
          <h6>Streat: </h6>
          <h6>42 Lake Circus, Kalabagan</h6>
        </div>
        <div className="residence">
          <h6>Skype: </h6>
          <h6>live:.cid.28a7d6d5bf91f9fe</h6>
        </div>
        <div className="residence">
          <h6>Email: </h6>
          <h6>anondonhth27@gmail.com</h6>
        </div>
        <div className="residence">
          <h6>Personal: </h6>
          <h6>+8801790-841023</h6>
        </div>

        <div className="divider"></div>

        {tools.map((item, index) => (
          <div key={index} className="progress_div">
            <div className="progress_title">
              <h6>{item.title}</h6>
              <h6>{item.percent}</h6>
            </div>
            <div className="progress_bar">
              <div
                style={{ width: `${item.percent}` }}
                className="progress_inner"
              ></div>
            </div>
          </div>
        ))}

        <div className="divider"></div>

        {allTools.map((item, index) => (
          <div key={index} className="keys">
            <div className="keys_item">
              <FontAwesomeIcon icon={faCheck} className="icon" />
              {item.title}
            </div>
          </div>
        ))}

        <div className="divider"></div>

        <div className="resume">
          <a href={Resume} download>
            DOWNLOAD RESUME
            <i class="fa-solid fa-download"></i>
          </a>
        </div>
      </div>

      <div className="left_footer">
        <a
          href="https://www.facebook.com/anondobormon.bijoy/"
          target="_blank"
          rel="noreferrer"
        >
          <i class="fa-brands fa-facebook-f"></i>
        </a>
        <a
          href="https://github.com/anondobormon"
          target="_blank"
          rel="noreferrer"
        >
          <i class="fa-brands fa-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/anondo-bormon/"
          target="_blank"
          rel="noreferrer"
        >
          <i class="fa-brands fa-linkedin-in"></i>
        </a>
        <a
          href="https://twitter.com/AnondoBormon1"
          target="_blank"
          rel="noreferrer"
        >
          <i class="fa-brands fa-twitter"></i>
        </a>
      </div>

      {/* Bottom section */}
    </div>
  );
}
