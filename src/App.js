import React from "react";
import "./App.scss";
import Acc from "./acc";
import AccHeader from './Components/AccHeader'

import CustomArrowExample from "./Dropdown/customArrow";

function App() {
  return (
    <div className="App">
      <Acc />
      <CustomArrowExample />
      <AccHeader />
    </div>
  );
}

export default App;
