import React, { useState } from "react";
import { useParams } from "react-router-dom";
import GetInTouch from "../../Content/GetInTouch/GetInTouch";
import { data } from "../../Content/Projects/ProjectData";
import Slider from "../../Content/Slider/Slider";
import Footer from "../../Footer";
import "./ProjectDetails.scss";

export default function ProjectDetails() {
  const { id } = useParams();
  const [modal, setModal] = useState(false);
  const project = data.find((item) => item.id === id);

  return (
    <div id="projects" className="project_details">
      {modal && (
        <div onClick={() => setModal(false)} className="image_modal">
          <div className="container">
            <div className="modal_info">
              <div onClick={() => setModal(false)} className="close">
                <i class="fa-solid fa-xmark"></i>
              </div>
              <img src={project.url} alt="" />
            </div>
          </div>
        </div>
      )}

      <div className="details_title">Project Details</div>
      <div onClick={() => setModal(true)} className="project_image">
        <div className="zoom">
          <i class="fa-solid fa-expand"></i>
        </div>
        {/* <img src="https://i.ibb.co/St7g4RV/ec.png" alt="" /> */}
        <img src={project.url} alt="" />
      </div>
      <h4 className="head_title">About Project</h4>
      <div className="details">
        <div className="description">
          <h4 className="title">{project.title}</h4>
          <p>{project.description}</p>

          <a
            href={project.live_url && project.live_url}
            target="_blank"
            className="live_link"
          >
            Visit Website <i class="fa-solid fa-angle-right"></i>
          </a>
        </div>
        <div className="tools_used">
          {project.tools.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
      </div>
      <Slider />
      <GetInTouch />
      <Footer />
    </div>
  );
}
