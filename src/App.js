import React, { useState } from "react";

import ReactTooltip from "react-tooltip";
import Header from './Header';

import PersonList from "./fetch";

import "./styles.css";

import MapChart from "./MapChart";

function App() {
  const [content, setContent] = useState("");
  return (
    <>
    <Header />
      <main>
        <MapChart setTooltipContent={setContent} />
        <ReactTooltip>{content}</ReactTooltip>
      
      </main>
      <PersonList />
    </>
  );
}

export default App;

