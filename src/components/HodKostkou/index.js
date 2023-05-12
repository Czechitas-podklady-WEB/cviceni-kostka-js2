import { Kostka } from "../Kostka";
import "./style.css";

const nahodneCisloNaKostce = () => Math.floor(Math.random() * 6 + 1);

export const HodKostkou = ({ jmeno, barva }) => {
  let kostkaComp = Kostka({});

  const zmenCisloNaKostce = (cislo) => {
    const puvodniKostkaComp = kostkaComp;
    kostkaComp = Kostka({ cislo: cislo });
    puvodniKostkaComp.replaceWith(kostkaComp);
  };

  const tlacitkoElm = document.createElement("button");
  tlacitkoElm.textContent = "Hoď!";
  tlacitkoElm.addEventListener("click", () => {
    tlacitkoElm.disabled = true;
    const intervalHandler = setInterval(() => {
      zmenCisloNaKostce(nahodneCisloNaKostce());
    }, 100);
    setTimeout(() => {
      fetch("https://random.kodim.app/api/diceroll")
        .then((resp) => resp.json())
        .then((data) => {
          clearInterval(intervalHandler);
          zmenCisloNaKostce(data.result.number);
          tlacitkoElm.disabled = false;
        });
    }, 1000);
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
