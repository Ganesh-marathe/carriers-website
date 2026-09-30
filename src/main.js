import "./styles/global.css";
import "./styles/themes.css";

import { Navbar } from "./components/Navbar/navbar.js";
import { Hero } from "./components/Hero/hero.js";
import { About } from "./components/About/about.js";
import { Projects } from "./components/Projects/projects.js";
import { Skills } from "./components/Skills/skills.js";
document.querySelector("#app").innerHTML =
  Navbar() + Hero() + About() + Projects() + Skills();
console.log("Carriers Website initialized");