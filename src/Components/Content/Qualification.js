import React from "react";
import "./Qualification.scss";

const education = [
  {
    title: "Bachelor Science in CSE",
    university: "Dhaka International University",
    desc: "Dhaka International University or DIU is a non-government institution in Dhaka, Bangladesh. The university was established on 7 April 1995 by the Private University Act 1992.",
    durations: "Sep-2021 to Aug-2022",
    link: "https://diu.ac/",
  },
  {
    title: "Full Stack Web Development",
    university: "Programming Hero",
    desc: "Programming Hero one of the most popular platform in Bangladesh. Learner can easily programming with fun",
    durations: "Jan-2021 to Jun-2021",
    link: "https://web.programming-hero.com/",
  },
  {
    title: "Diploma in Engineering",
    university: "Kurigram Polytechnic Institute",
    desc: "The Diploma in Engineering or Diploma in Technical Education or Technical Diploma is a program focused on practical and skills-oriented training. It is a technical course that only covers the essentials when ranked with an undergraduate engineering degree.",
    durations: "July-2012 to Jun-2016",
    link: "https://kpik.gov.bd/",
  },
];

const work = [
  {
    title: "DEV ZeroOne ",
    university: "Web Developer",
    desc: "Design and Implement business strategies, plans and procedures. Oversee daily operations of the company and the work other employees. Establish policies that promote company culture and vision",
    durations: "Jan-2022 to Present",
  },
  {
    title: "Pacific Jeans Limited",
    university: "Site Engineer",
    desc: "Collaborated with the project manager to maintain effective working relationships with contractors, engineers, architects, and staff to achieve deadlines. Established accurate records, prepared daily reports, and maintain a high level of quality.",
    durations: "Aug-2018 to Nov-2021",
  },
  {
    title: "IIML (Bangladesh)",
    university: "Data Entry Operator",
    desc: "Complete all assigned data entry request and task within required timeframes while maintaining a high-level of quality.Maintain good accuracy rate by assessing client and other documents.",
    durations: "May-2017 to Nov-2017",
  },
];

export default function Qualification() {
  return (
    <div className="qualification">
      <div className="q-left">
        <h4 className="head_title">Education</h4>

        {education.map((item, index) => (
          <div key={index} className="qua_card left_card">
            <div className="top">
              <h5 className="title">{item.title}</h5>
              <div className="from_date">{item.durations}</div>
            </div>
            <p className="sub_title">{item.university}</p>
            <div className="details">{item.desc}</div>

            <div className="order_btn">
              <a target="_blank" href={item.link}>
                About Institution
                <span>
                  <i class="fa-solid fa-angle-right"></i>
                </span>
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="q-middle">
        <div className="middle_bar"></div>
      </div>
      <div className="q-right">
        <h4 className="head_title">
          <h4 className="head_title">Work Experience</h4>
          {work.map((item, index) => (
            <div key={index} className="qua_card right_card">
              <div className="top">
                <h5 className="title">{item.title}</h5>
                <div className="from_date">{item.durations}</div>
              </div>
              <p className="sub_title">{item.university}</p>
              <div className="details">{item.desc}</div>

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
        </h4>
      </div>
    </div>
  );
}
