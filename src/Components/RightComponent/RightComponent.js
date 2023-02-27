import React from "react";
import GetInTouch from "../Content/GetInTouch/GetInTouch";
import Header from "../Content/Header";
import Projects from "../Content/Projects/Projects";
import Qualification from "../Content/Qualification";
import Service from "../Content/Service";
import Slider from "../Content/Slider/Slider";
import Footer from "../Footer";

export default function RightComponent() {
  return (
    <div>
      <Header />
      <Service />
      <Qualification />
      <Slider />
      <Projects />
      <GetInTouch />
      <Footer />
    </div>
  );
}
