import React, { memo } from "react";
import {
  ZoomableGroup,
  ComposableMap,
  Geographies,
  Geography
} from "react-simple-maps";
// import PersonList from "./fetch";
import exampleData from './ExampleData.json';
// const exampleData = JSON.parse(exampleData.json)
const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

  const makeToolTip = (ISO_A3) => {
    let propertyOne = "no data"
    if(exampleData[ISO_A3]) {
      propertyOne = exampleData[ISO_A3]["Property 1"] 
    }
    return `${ISO_A3} \n\n` + `${propertyOne}`
  }

// const rounded = num => {
//   if (num > 1000000000) {
//     return Math.round(num / 100000000) / 10 + "Bn";
//   } else if (num > 1000000) {
//     return Math.round(num / 100000) / 10 + "M";
//   } else {
//     return Math.round(num / 100) / 10 + "K";
//   }
// };
const MapChart = ({ setTooltipContent }) => {
  return (
    <>
      <ComposableMap data-tip="" projectionConfig={{ scale: 200 }}>
        <ZoomableGroup>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map(geo => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onMouseEnter={() => {
                    console.log(geo.properties);
                    const { NAME, ISO_A3 } = geo.properties;
                    
                    setTooltipContent(makeToolTip(ISO_A3, NAME));
                  }}
                  onMouseLeave={() => {
                    setTooltipContent("");
                  }}
                  style={{
                    default: {
                      fill: "#758b72",
                      outline: "#D6D6DA"
                    },
                    hover: {
                      fill: "#FF69f4",
                      outline: "none"
                    },
                    pressed: {
                      fill: "#E42",
                      outline: "none"
                    }
                  }}
                />
              ))
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
    </>
  );
};

export default memo(MapChart);
