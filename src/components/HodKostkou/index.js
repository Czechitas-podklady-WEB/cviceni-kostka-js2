import { Kostka } from "../Kostka";
import "./style.css";

const nahodneCisloNaKostce = () => Math.floor(Math.random() * 6 + 1);

export const HodKostkou = () => {
  let kostkaComp = Kostka({ cislo: 6 });

  const tlacitkoElm = document.createElement("button");
  tlacitkoElm.textContent = "Hoď!";
  tlacitkoElm.addEventListener("click", () => {
    const puvodniKostkaComp = kostkaComp;
    kostkaComp = Kostka({ cislo: nahodneCisloNaKostce() });
    puvodniKostkaComp.replaceWith(kostkaComp);

    // alternativa
    //const novaKostkaKomp = Kostka({cislo: nahodneCisloNaKostce()});
    //kostkaComp.replaceWith(novaKostkaKomp);
    //kostkaComp = novaKostkaKomp;
  });

  const hodKostkou = document.createElement("div");
  hodKostkou.classList.add("hod-kostkou");
  hodKostkou.append(kostkaComp);
  hodKostkou.append(tlacitkoElm);
  return hodKostkou;
};
