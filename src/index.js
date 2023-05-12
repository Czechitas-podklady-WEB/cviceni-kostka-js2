import { HodKostkou } from "./components/HodKostkou/index.js"
import './style.css';

const appElement = document.getElementById("app");
appElement.append(HodKostkou({jmeno: "Filip"}))
appElement.append(HodKostkou({jmeno: "Jakub"}))
appElement.append(HodKostkou({jmeno: "Martin"}))
