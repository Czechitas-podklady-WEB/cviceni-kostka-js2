import side1 from "./img/side1.svg"
import side2 from "./img/side2.svg"
import side3 from "./img/side3.svg"
import side4 from "./img/side4.svg"
import side5 from "./img/side5.svg"
import side6 from "./img/side6.svg"

const sides = [
    side1,
    side2,
    side3,
    side4,
    side5,
    side6
]

export const Kostka = ({cislo}) => {
    const kostkaElement = document.createElement("div");
    kostkaElement.innerHTML = `<img src="${sides[cislo - 1]}" alt="číslo ${cislo}"/>`;
    return kostkaElement;
}
