import React from "react";
/*
  TODO: import and render the presentational components
  needed to finish decomposing our app into small react components,
  each of which is responsible for a small, simple part of the UI
*/
import CssOptionsList from "./CssOptions/CssOptionsList.js";
import SelectedCssOption from "./CssOptions/SelectedCssOption.js";

const CssOptions = (props) => (
  <div>
    <CssOptionsList selectColor={props.selectColor} />
    <h2>CSS Color Options</h2>
    <div className="color-options-row"></div>
  </div>
);

export default CssOptions;
