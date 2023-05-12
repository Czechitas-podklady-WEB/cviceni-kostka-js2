import { HodKostkou } from "./components/HodKostkou/index.js";
import "./style.css";

const hraci = [
  { jmeno: "Jana", barva: "red" },
  { jmeno: "Eliška", barva: "green" },
  { jmeno: "Kristina", barva: "blue" },
  { jmeno: "Tamara", barva: "orange" },
];

const appElement = document.getElementById("app");

appElement.append(...hraci.map((hrac) => HodKostkou(hrac)));
