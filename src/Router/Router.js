import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Components/Home";
import ProjectDetails from "../Components/RightComponent/ProjectDetails/ProjectDetails";
import RightComponent from "../Components/RightComponent/RightComponent";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route index element={<RightComponent />} />
        <Route path=":id" element={<ProjectDetails />} />
      </Route>
    </Routes>
  );
}
