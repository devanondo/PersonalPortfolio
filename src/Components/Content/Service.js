import React from "react";
import "./Service.scss";

const serviceData = [
  {
    title: "Frontend Development",
    desc: "Client-centered web design for laptops, tablets and mobile devices in FullHD quality. We help your shape your Brand identity, ensure page load optimization, and responsiveness of your site",
  },
  {
    title: "Backend Development",
    desc: "I know technology inside and out. We have unlimited and unrestricted access to new and future technologies which gives us an amazing wealth of information and competitive edge when recommending the best solutions to our customers.",
  },
  {
    title: "Graphic Design",
    desc: "The product design begins. If a project is big, designers create a style guide that keeps logos, colors, fonts, and other design elements.",
  },
  {
    title: "UI/UX Design",
    desc: "I create UI/UX design for web and mobile applications, using up-to-date tools and technologies. I keep up with the times by exploring 2D/3D design trends and finding the best ways to empower our projects.",
  },
  {
    title: "Web Research",
    desc: "What are their real needs? Where are they experiencing friction? Foundational research finds answers to those questions. Our team uses design thinking to expose unmet needs, identify the correct problem and who’s experiencing it, and uncover key insights into how we can solve it.",
  },
  {
    title: "Digital Service",
    desc: "I am helping Finder to provide expert consultation and execution for their social media marketing.",
  },
];

export default function Service() {
  return (
    <div className="service">
      <h4 className="head_title">My Services</h4>

      <div className="column_3">
        {serviceData.map((item, index) => (
          <div key={index} className="service_card">
            <div>
              <h5 className="title">{item.title}</h5>
              <div className="details">{item.desc}</div>
            </div>

            <div className="order_btn">
              <a href="#contact">
                Order Now
                <span>
                  <i class="fa-solid fa-angle-right"></i>
                </span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
