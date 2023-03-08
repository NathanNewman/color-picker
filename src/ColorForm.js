import React, { useState } from "react";

function ColorForm({ createColor }) {
  const [color, setColor] = useState("");

  const handleChange = (evt) => {
    setColor(evt.target.value);
  };

  const gatherInput = (evt) => {
    evt.preventDefault();
    createColor(color);
    setColor("");
  };
  return (
    <div>
      <form onSubmit={gatherInput}>
        <label htmlFor="color">Color:</label>
        <input
          id="color"
          name="color"
          type="text"
          onChange={handleChange}
          value={color}
        />
        <button>Add new color!</button>
      </form>
    </div>
  );
}

export default ColorForm;
