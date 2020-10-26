import React, { useState } from "react";
import ReactDOM from "react-dom";
import ReactTooltip from "react-tooltip";

import "./styles.css";

import MapChart from "./MapChart";

function App() {
  const [content, setContent] = useState("");
  return (
    <div>
      <MapChart setTooltipContent={setContent} />
      <ReactTooltip>{content}</ReactTooltip>
    </div>
  );
}

export default App;
// import React from "react";
// // import ReactDOM from "react-dom";
// import { ComposableMap, Geographies, Geography } from "react-simple-maps";

// import "./styles.css";

// const geoUrl =
//   "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

// const App = () => (
//   <div>
//     <ComposableMap>
//       <Geographies geography={geoUrl}>
//         {({ geographies }) =>
//           geographies.map(geo => <Geography key={geo.rsmKey} geography={geo} />)
//         }
//       </Geographies>
//     </ComposableMap>
//   </div>
// );

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);

