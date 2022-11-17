import React from "react";
import { useContext } from "react";
import "./Legend.scss";
import { URLStateContext } from "../URLStateContext";
import { legend_translations } from "./translations";
import { dropdown_translations } from "./dropdownTranslations"
import {getColorTexts, getColorValues} from "./mapHelpers";


export const Legend = ({ mapData, option1, option2, mode }) => {
  const { language } = useContext(URLStateContext);
  const colorTexts = getColorTexts(mapData, option1);
  const colorValues = getColorValues();
  if (mode === "Traditional") {
    if (option1.label === "Percentage Discrimination Experience" || option1.label === "Number of discrimination reports") {
      return (
        <div className="key align-left">
          <div className="">
              <div>
                <div className="square3 inline2" style={{ backgroundColor: colorValues[0] }}></div>
                <span className="inline2">{0}</span>
              </div>
              <div>
                <div className="square3 inline2" style={{ backgroundColor: colorValues[1] }}></div>
                <span className="inline2">{colorTexts[1]}</span>
              </div>
              <div>
                <div className="square3 inline2" style={{ backgroundColor: colorValues[2] }}></div>
                <span className="inline2">{colorTexts[2]}</span>
              </div>
              <div>
                <div className="square3 inline2" style={{ backgroundColor: colorValues[3] }}></div>
                <span className="inline2">{colorTexts[3]}</span>
              </div>
              <div>
                <div className="square3 inline2" style={{ backgroundColor: colorValues[4] }}></div>
                <span className="inline2">{colorTexts[4]}</span>
              </div>
              <div>
                <div className="square3 inline2" style={{ backgroundColor: colorValues[5] }}></div>
                <span className="inline2">{colorTexts[5]}</span>
              </div>
          </div>
          <div>
            <p className="legendTitle">
              <b>{legend_translations.legend_titles[0][language]}</b>
            </p>
          </div>
          <div>
            <div
              className="line inline"
              style={{ backgroundColor: "#de2d26" }}
            ></div>
            <p className="inline">Blijdorp/Blijdorpse Polder</p>
          </div>
          <div>
            <div
              className="line inline"
              style={{ backgroundColor: "#2c7fb8" }}
            ></div>
            <p className="inline">Nieuwe Werk/Dijkzigt</p>
          </div>
          <div>
            <div
              className="line inline"
              style={{ backgroundColor: "#31a354" }}
            ></div>
            <p className="inline">Dorp/Rijnpoort</p>
          </div>
          <div>
            <div
              className="line inline"
              style={{ backgroundColor: "#c51b8a" }}
            ></div>
            <p className="inline">Kralingen Oost/Kralingse Bos</p>
          </div>
          <div>
            <div
              className="line inline"
              style={{ backgroundColor: "#fee391" }}
            ></div>
            <p className="inline">NoordKethel/Schieveen/Zestienhoven</p>
          </div>
          <div>
            <div
              className="line inline"
              style={{ backgroundColor: "#fdbb84" }}
            ></div>
            <p className="inline">Oud Mathenesse/Witte Dorp</p>
          </div>
        </div>
      );
    } else {
      return (
        <div className="key align-left">
          <div className="">
              <div>
                <div className="square3 inline2" style={{ backgroundColor: colorValues[0] }}></div>
                <span className="inline2">{0}</span>
              </div>
              <div>
                <div className="square3 inline2" style={{ backgroundColor: colorValues[1] }}></div>
                <span className="inline2">{colorTexts[1]}</span>
              </div>
              <div>
                <div className="square3 inline2" style={{ backgroundColor: colorValues[2] }}></div>
                <span className="inline2">{colorTexts[2]}</span>
              </div>
              <div>
                <div className="square3 inline2" style={{ backgroundColor: colorValues[3] }}></div>
                <span className="inline2">{colorTexts[3]}</span>
              </div>
              <div>
                <div className="square3 inline2" style={{ backgroundColor: colorValues[4] }}></div>
                <span className="inline2">{colorTexts[4]}</span>
              </div>
              <div>
                <div className="square3 inline2" style={{ backgroundColor: colorValues[5] }}></div>
                <span className="inline2">{colorTexts[5]}</span>
              </div>
          </div>
        </div>
      );
    }
  } else {


    const option1_language = dropdown_translations.find(d=> d.label.english === option1.label)
    const option2_language = dropdown_translations.find(d=> d.label.english === option2.label)

    return (
      <div className="key">
        <div className="rowLegend">
          <div className="square2" style={{ backgroundColor: "#c06cba" }}></div>
          <div className="square2" style={{ backgroundColor: "#7f679a" }}></div>
          <div className="square2" style={{ backgroundColor: "#365f8d" }}></div>
        </div>
        <div className="rowLegend">
          <div className="square2" style={{ backgroundColor: "#98ade6" }}></div>
          <div className="square2" style={{ backgroundColor: "#64a5be" }}></div>
          <div className="square2" style={{ backgroundColor: "#459980" }}></div>
        </div>
        <div className="rowLegend">
          <div className="square2" style={{ backgroundColor: "#add5e9" }}></div>
          <div className="square2" style={{ backgroundColor: "#72cbc1" }}></div>
          <div className="square2" style={{ backgroundColor: "#4ebc82" }}></div>
        </div>
        <div id="xaxis">{option2_language.label[language]}</div>
        <div id="yaxis">{option1_language.label[language]}</div>
      </div>
    );
  }
};