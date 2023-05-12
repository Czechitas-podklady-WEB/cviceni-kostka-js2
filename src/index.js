import { HodKostkou } from "./components/HodKostkou/index.js";
import "./style.css";

const hraci = [{ jmeno: "Jana" }, { jmeno: "Eliška" }, { jmeno: "Kristina" }];

const appElement = document.getElementById("app");

appElement.append(...hraci.map(hrac => HodKostkou(hrac)));