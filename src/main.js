import "./styles/global.css";
import "./styles/themes.css";

import { Navbar } from "./components/Navbar/navbar.js";
import { Hero } from "./components/Hero/hero.js";

document.querySelector("#app").innerHTML =
  Navbar() + Hero();

console.log("Carriers Website initialized");
