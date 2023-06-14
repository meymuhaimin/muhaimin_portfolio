import React from "react";

import Header from "./components/Header/Header";
import Intro from "./components/Intro/Intro";
import Skill from "./components/Skill/Skill";
import Contact from "./components/Contact/Contact";
import Project from "./components/Project/Project";

const App = () => {
  return (
    <div>
      <Header />
      <Intro />
      <Skill />
      <Project />
      <Contact />
    </div>
  );
};

export default App;
