import "./styles/global.css";
import "./styles/themes.css";

import { Navbar } from "./components/Navbar/navbar.js";

document.querySelector("#app").innerHTML = Navbar();

console.log("Carriers Website initialized");