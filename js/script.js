import { h, render } from "preact";
import { byeIE } from "./byeie";
/** @jsx h */

byeIE()
let host = "https://data.irozhlas.cz";
if (window.location.hostname === "localhost") {
  host = "http://localhost:8888";
}

function whatCol(val) {
  if (val === "politik") {
    return "blue";
  } else if (val === "ústřední úřad") {
    return "brown"
  }else if (val === "odbory a zaměstnavatelé") {
    return "red"
  } else if (val === "ekolog") {
    return "green"
  } else if (val === "regionální politik") {
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
          <div className={`${whatCol(el.k)}_b bio`}>{`${el.k}`}</div>
          <div className="bio">
            <div className="jmeno">{`${el.j} ${el.p}`}</div>
            <div className="funkce">{el.f}</div>
          </div>
          <div className={`odpoved1`}>{el.o1 || "Bez odpovědi"}</div>
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

