import React, { useState } from "react";
import Color from "./Color";
import ColorList from "./ColorList";
import "./ColorPicker.css";
import defaultColors from "./colors";

function ColorPicker() {
  const [colors, setColors] = useState(defaultColors);

  function updateColors(colors) {
    setColors(colors);
  }
  return (
    <div>
      <Color updateColors={updateColors} />
      <ColorList colors={colors} />
    </div>
  );
}

export default ColorPicker;
