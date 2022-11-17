import { useEffect, useRef, useContext } from "react";
import { json } from "d3";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import "mapbox-gl/dist/mapbox-gl.css";
import ReactDOM from "react-dom";
import Tooltip from "./Tooltip";
import "./NeighborhoodMap.scss";
import { URLStateContext } from "../URLStateContext";
import {getColorScheme, getStrokeColor, getStrokeWidth} from "./mapHelpers";

mapboxgl.accessToken =
  "pk.eyJ1IjoiamhqYW5pY2tpIiwiYSI6Il9vb1ZlWnMifQ.zJie3Sr8zh3h5rR8IBMB2A";

export const NeighborhoodMap = ({ mapData, selected, selected2, mode }) => {
  const ref = useRef();
  const mapRef = useRef();
  const tooltipRef = useRef(new mapboxgl.Popup({ offset: 15 }));
  const { language } = useContext(URLStateContext);



  useEffect(() => {
    mapRef.current = new mapboxgl.Map({
      container: ref.current,
      style: "mapbox://styles/jhjanicki/ckrukpn7t13zy18o82tq8o7wp",
      center: [4.3272, 51.929], // initial map center in [lon, lat]
      zoom: 10,
      minZoom: 9,
    });

    mapRef.current.on("load", () => {
      json("rotterdam_neighbourhoods.geojson").then((data) => {
        data.features.forEach(function (neighborhood) {
          mapData.forEach(function (neighborhoodData) {
            if (
              neighborhood.properties.neighborhood === neighborhoodData.bc_naam
            ) {
              neighborhood.properties.pDiscr = neighborhoodData.pDiscr;
              neighborhood.properties.mbc_code = neighborhoodData.mbc_code;
              neighborhood.properties.gini_inc_st =
                neighborhoodData.gini_inc_st;
              neighborhood.properties.avg_inc = neighborhoodData.avg_inc;
              neighborhood.properties.sh_housow1 = neighborhoodData.sh_housow1;
              neighborhood.properties.sh_housow3 = neighborhoodData.sh_housow3;
              neighborhood.properties.simp_educ = neighborhoodData.simp_educ;
              neighborhood.properties.simp_motive =
                neighborhoodData.simp_motive;
              neighborhood.properties.simp_conbirth =
                neighborhoodData.simp_conbirth;
              neighborhood.properties.median_inc = neighborhoodData.median_inc;
              neighborhood.properties.totalhh = neighborhoodData.totalhh;
              neighborhood.properties.sh_housow2 = neighborhoodData.sh_housow2;
              neighborhood.properties.sh_housow8 = neighborhoodData.sh_housow8;
              neighborhood.properties.avg_welfare =
                neighborhoodData.avg_welfare;
              neighborhood.properties.sh_welf1 = neighborhoodData.sh_welf1;
              neighborhood.properties.sh_welf2 = neighborhoodData.sh_welf2;
              neighborhood.properties.sh_welf3 = neighborhoodData.sh_welf3;
              neighborhood.properties.sh_welf4 = neighborhoodData.sh_welf4;
              neighborhood.properties.sh_welf5 = neighborhoodData.sh_welf5;
              neighborhood.properties.sh_educ1 = neighborhoodData.sh_educ1;
              neighborhood.properties.sh_educ3 = neighborhoodData.sh_educ3;
              neighborhood.properties.sh_educ4 = neighborhoodData.sh_educ4;
              neighborhood.properties.sh_educ5 = neighborhoodData.sh_educ5;
              neighborhood.properties.sh_educ6 = neighborhoodData.sh_educ6;
              neighborhood.properties.sh_recent = neighborhoodData.sh_recent;
              neighborhood.properties.sh_stat1 = neighborhoodData.sh_stat1;
              neighborhood.properties.sh_stat2 = neighborhoodData.sh_stat2;
              neighborhood.properties.sh_stat3 = neighborhoodData.sh_stat3;
              neighborhood.properties.sh_stat4 = neighborhoodData.sh_stat4;
              neighborhood.properties.sh_stat5 = neighborhoodData.sh_stat5;
              neighborhood.properties.totalpop = neighborhoodData.totalpop;
              neighborhood.properties.N_conbirth = neighborhoodData.N_conbirth;
              neighborhood.properties.forborn_sh = neighborhoodData.forborn_sh;
              neighborhood.properties.NLbornbur = neighborhoodData.NLbornbur;
              neighborhood.properties.abs_disrep = neighborhoodData.abs_disrep;


              neighborhood.properties.gini_inc_st_norm =
                neighborhoodData.gini_inc_st_norm;
              neighborhood.properties.avg_inc_norm =
                neighborhoodData.avg_inc_norm;
              neighborhood.properties.sh_housow1_norm =
                neighborhoodData.sh_housow1_norm;
              neighborhood.properties.sh_housow3_norm =
                neighborhoodData.sh_housow3_norm;
              neighborhood.properties.simp_educ_norm =
                neighborhoodData.simp_educ_norm;
              neighborhood.properties.simp_motive_norm =
                neighborhoodData.simp_motive_norm;
              neighborhood.properties.simp_conbirth_norm =
                neighborhoodData.simp_conbirth_norm;
              neighborhood.properties.pDiscr_norm =
                neighborhoodData.pDiscr_norm;
            }
          });
        });

        mapRef.current.addSource("neighborhoods", { type: "geojson", data });
        mapRef.current.addLayer(
          {
            id: "neighborhoodsFill",
            type: "fill",
            source: "neighborhoods",
            paint: {
              "fill-color": getColorScheme(mapData,selected),
              "fill-opacity": 0.9,
            },
          },
          "settlement-subdivision-label"
        );

        mapRef.current.addLayer(
          {
            id: "neighborhoodsLines",
            type: "line",
            source: "neighborhoods",
            paint: {
              "line-color": "black",
              "line-opacity": 1,
              "line-width": 0.5,
            },
          },
          "settlement-subdivision-label"
        );
      });
    });
  }, []);

  useEffect(() => {
    mapRef.current.on("click", "neighborhoodsFill", (e) => {
      const features = e.features;
      if (features.length) {
        const feature = features[0];
        const tooltipNode = document.createElement("div");
        ReactDOM.render(
          <Tooltip
            feature={feature}
            mode={mode}
            selected={selected}
            selected2={selected2}
            language={language}
          />,
          tooltipNode
        );

        // Set tooltip on map
        tooltipRef.current
          .setLngLat(e.lngLat)
          .setDOMContent(tooltipNode)
          .addTo(mapRef.current);
      }
    });
  }, [selected, selected2, mode, language]);


  //remove popup when switch modes or dropdown
  useEffect(()=>{
    tooltipRef.current.remove();
  },[selected, selected2, mode])

  useEffect(() => {
    const neighborhoodFill = mapRef.current.getLayer("neighborhoodsFill");
    if (!neighborhoodFill) return;
    if (!mapRef.current) return;
    if (mode === "Traditional") {
      mapRef.current.setPaintProperty(
        "neighborhoodsFill",
        "fill-color",
        getColorScheme(mapData,selected)
      );
      mapRef.current.setPaintProperty(
        "neighborhoodsLines",
        "line-color",
        getStrokeColor(selected)
      );
      mapRef.current.setPaintProperty(
        "neighborhoodsLines",
        "line-width",
        getStrokeWidth(selected)
      );
    } else {
      mapRef.current.setPaintProperty("neighborhoodsFill", "fill-color", [
        "match",
        ["get", selected.value],
        1,
        [
          "match",
          ["get", selected2.value],
          3,
          "#4ebc82",
          2,
          "#72cbc1",
          1,
          "#add5e9",
          "#e6e6e6",
        ],
        2,
        [
          "match",
          ["get", selected2.value],
          3,
          "#459980",
          2,
          "#64a5be",
          1,
          "#98ade6",
          "#e6e6e6",
        ],
        3,
        [
          "match",
          ["get", selected2.value],
          3,
          "#365f8d",
          2,
          "#7f679a",
          1,
          "#c06cba",
          "#e6e6e6",
        ],
        "#e6e6e6",
      ]);
      mapRef.current.setPaintProperty(
        "neighborhoodsLines",
        "line-color",
        "black"
      );
      mapRef.current.setPaintProperty("neighborhoodsLines", "line-width", 0.5);
    }
  }, [
    selected,
    selected2,
    mode,
    getColorScheme,
    getStrokeColor,
    getStrokeWidth,
  ]);

  return <div className="neighborhood-map" ref={ref} />;
};
