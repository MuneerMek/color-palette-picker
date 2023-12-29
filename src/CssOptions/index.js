import React from "react";
import CssOptionsList from "./CssOptionsList";
import SelectedCssOption from "./SelectedCssOption";

/*
  TODO: import and render the presentational components
  needed to finish decomposing our app into small react components,
  each of which is responsible for a small, simple part of the UI
*/

const CssOptions = (props) => (
  <div>
    <h2>CSS Color Options</h2>
    <div className="color-options-row">
      <CssOptionsList selectColor={props.selectColor} />
      <SelectedCssOption
        palette={props.palette}
        addToPalette={props.addToPalette}
        selectedColor={props.selectedColor}
      />
    </div>
  </div>
);

export default CssOptions;
