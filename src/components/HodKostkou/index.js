import { Kostka } from "../Kostka";
import "./style.css";

const nahodneCisloNaKostce = () => Math.floor(Math.random() * 6 + 1);

export const HodKostkou = ({jmeno, barva}) => {
  let kostkaComp = Kostka({});

  const tlacitkoElm = document.createElement("button");
  tlacitkoElm.textContent = "Hoď!";
  tlacitkoElm.addEventListener("click", () => {
    fetch("https://random.kodim.app/api/diceroll")
      .then((resp) => resp.json())
      .then((data) => {
        const puvodniKostkaComp = kostkaComp;
        kostkaComp = Kostka({ cislo: data.result.number });
        puvodniKostkaComp.replaceWith(kostkaComp);
      });
  });

  const jmenoElm = document.createElement("div");
  jmenoElm.classList.add("jmeno");
  jmenoElm.textContent = jmeno;

  const hodKostkou = document.createElement("div");
  hodKostkou.classList.add("hod-kostkou");
  hodKostkou.append(jmenoElm);
  hodKostkou.append(kostkaComp);
  hodKostkou.append(tlacitkoElm);
  return hodKostkou;
};
