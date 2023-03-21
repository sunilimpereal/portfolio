import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import { About } from "./components";
import "./index.css";
import ProjectView from "./projects/ProjectView";

ReactDOM.createRoot(document.getElementById("root")).render(

  <BrowserRouter>
    <Routes>
      <Route path="/portfolio/" element={<App />}> </Route>
      <Route path="project-view" element={<ProjectView />} />
      <Route path="about" element={<About />} />

    </Routes>
  </BrowserRouter>

);
