import { h, render } from "preact";
import { byeIE } from "./byeie";
/** @jsx h */

byeIE()
let host = "https://data.irozhlas.cz";
if (window.location.hostname === "localhost") {
  host = "http://localhost";
}

function whatCol(val) {
  if (val === "ústřední instituce") {
    return "blue";
  } else if (val === "zaměstanecké organizace") {
    return "red"
  } else if (val === "ekologové") {
    return "green"
  } else if (val === "regiony") {
    return "orange"
  } else if (val === "univerzity") {
    return "purple"
  }
};

function onLoad(e) {
  const data = JSON.parse(e.target.response);
  render((
    <div id="anketa">
      {data.map(el => (
        <div className="respondent">
          <img className="portret" src={`${host}/uhelkomise-anketa/img/${el.img}`} alt={el.jm} />
          <div className={`${whatCol(el.k)}_b bio`}>
            <div className="jmeno">{`${el.j} ${el.p}`}</div>
            <div className="funkce">{el.f}</div>
          </div>
          <div className={`odpoved1`}>{el.o1 || "bez odpovědi"}</div>
          <div className={`odpoved2`}>{el.o2}</div>
        </div>
      ))}
    </div>
  ), document.getElementById("anketa-wrapper"));
}

let r = new XMLHttpRequest()
r.addEventListener("load", onLoad)
r.open("GET", host + "/uhelkomise-anketa/data/data.json")
r.send()

