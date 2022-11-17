import { useState, useEffect, useContext } from "react";
import { NeighborhoodMap } from "../Home/NeighborhoodMap";
import { IndicatorDescription } from "./IndicatorDescription";
import { Dropdown } from "../Home/Dropdown";
import { SecondaryDropdown } from "../Home/SecondaryDropdown";
import { Legend } from "../Home/Legend";
import { useCBSData } from "../hooks/useCBSData";
import {
  traditionalDropdownOptions,
  superdiversityDropdownOptions,
  yearDropdownOptions,
  treemapDropdownOptions
} from "./dropdownOptions";
import { URLStateContext } from "../URLStateContext";
import { home_translations } from "./translations";
import * as d3 from "d3";

export const Home = () => {
  const [selected, setSelected] = useState(traditionalDropdownOptions[0]); //for dropdown
  const [selected2, setSelected2] = useState(superdiversityDropdownOptions[0]); //for dropdown2
  const [selectedYear, setSelectedYear] = useState(yearDropdownOptions[0]);
  const [selectedYearTreemap, setSelectedYearTreemap] = useState(treemapDropdownOptions[0]);
  const [selectedYearBars, setSelectedYearBars] = useState(treemapDropdownOptions[0]);
  const [mapMode, setMapMode] = useState("Traditional"); //traditional vs superdiversity
  const cbsData = useCBSData();
  const { language } = useContext(URLStateContext);
  const colorScale = d3
    .scaleOrdinal()
    .domain([
      "Discrimination",
      "Context",
      "Education",
      "Housing",
      "Migration diversity",
      "Economic status",
    ])
    .range([
      "#fde0dd",
      "#fff7bc",
      "#edf8e9",
      "#fee5d9",
      "#eff3ff",
      "#feedde",
      "#f1eef6",
    ]);

  useEffect(() => {
    if (mapMode === "Traditional") {
      setSelected(traditionalDropdownOptions[0]);
    } else {
      setSelected(superdiversityDropdownOptions[0]);
      setSelected2(superdiversityDropdownOptions[1]);
    }
  }, [mapMode]);

  return (
    <>
      <div className="introSection sections">
        <div className="title">{home_translations.page_title[language]}</div>
        <div className="introBlurb">
          <p dangerouslySetInnerHTML={{ __html: home_translations.p1[language] }}></p>
        </div>
      </div>
      <div className="mapSection sections">
        <div className="title">{home_translations.map_title[language]}</div>
        <div className="leftRightWrapper">
          <div className="leftWrapper">
            <div className="inlineWrapper">
              <div
                onClick={() => setMapMode("Traditional")}
                className={`button inline ${
                  mapMode === "Traditional" ? "selected" : ""
                }`}
              >
                {home_translations.toggle_labels[0][language]}
              </div>
              <div
                onClick={() => setMapMode("Superdiversity")}
                className={`button inline ${
                  mapMode === "Superdiversity" ? "selected" : ""
                }`}
              >
                {home_translations.toggle_labels[1][language]}
              </div>
            </div>
            <div className="inlineWrapper">
              <div className="dropdownWrapper">
                <Dropdown
                  dropdownOptions={
                    mapMode === "Traditional"
                      ? traditionalDropdownOptions
                      : superdiversityDropdownOptions
                  }
                  selected={selected}
                  onSelectedChange={setSelected}
                  colorScale={colorScale}
                  mapMode={mapMode}
                />
              </div>
              <div
                className={`${mapMode === "Traditional" ? "hidden" : "visible"}`}
              >
                <Dropdown
                  dropdownOptions={superdiversityDropdownOptions}
                  selected={selected2}
                  onSelectedChange={setSelected2}
                  colorScale={colorScale}
                  mapMode={mapMode}
                />
              </div>
            </div>
          </div>
          <div className="rightWrapper">
          <IndicatorDescription
            selected = {selected}
            selected2 = {selected2}
            mapMode={mapMode}
          />
          </div>
        </div>

        <div className="mapWrapper">
          <div className="legendWrapper">
          {cbsData ? (<Legend
              mapData={cbsData}
              option1={selected}
              option2={selected2}
              mode={mapMode}
            />
            ) : null}
          </div>
          <div className="mapContainer">
            {cbsData ? (
              <NeighborhoodMap
                mapData={cbsData}
                selected={selected}
                selected2={selected2}
                mode={mapMode}
              />
            ) : null}
            <p id="mapYear">Data from 2019</p>
          </div>
          <p className="mapFootnote">{home_translations.map_footnote[language]}</p>
        </div>

      </div>
      <div className="mapTimeSection sections">
        <div className="title">{home_translations.map2_title[language]}</div>
        <p className="sectionDescription">{home_translations.map2_description[language]}</p>
        <SecondaryDropdown
              dropdownOptions={yearDropdownOptions}
              selected={selectedYear}
              onSelectedChange={setSelectedYear}
            />
         <img class="chartImg" src={`maps/map${selectedYear}.png`}></img>
         <p className="source">{home_translations.map2_footnote[language]}</p>
      </div>
      <div className="treemapSection sections">
        <div className="title">{home_translations.treemap_title[language]}</div>
        <p className="sectionDescription">{home_translations.treemap_description[language]}</p>
          <SecondaryDropdown
              dropdownOptions={treemapDropdownOptions}
              selected={selectedYearTreemap}
              onSelectedChange={setSelectedYearTreemap}
            />
         <img class="chartImg" src={`plots/tree${selectedYearTreemap}.png`}></img>
         <p className="source">{home_translations.treemap_footnote[language]}</p>
      </div>
      <div className="barSection sections">
        <div className="title">{home_translations.bar_title[language]}</div>
        <p className="sectionDescription">{home_translations.bar_description[language]}</p>
          <SecondaryDropdown
              dropdownOptions={treemapDropdownOptions}
              selected={selectedYearBars}
              onSelectedChange={setSelectedYearBars}
            />
         <img class="chartImg" src={`plots/bar${selectedYearBars}.png`}></img>
         <p className="source">{home_translations.bar_footnote[language]}</p>
      </div>

      {/* <div className="dashboardSection sections">
        <div className="title">Dashboard</div>
      </div>
      <div className="partnerSection sections">
        <div className="title">
          {home_translations.collaborators_title[language]}
        </div>
        <div className="button">Link</div>
      </div> */}
    </>
  );
};
