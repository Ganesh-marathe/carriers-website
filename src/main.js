import "./styles/global.css";
import "./styles/themes.css";

import { Navbar } from "./components/Navbar/navbar.js";
import { Hero } from "./components/Hero/hero.js";
import { About } from "./components/About/about.js";

document.querySelector("#app").innerHTML =
  Navbar() + Hero() + About();

console.log("Carriers Website initialized");
