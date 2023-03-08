import React from "react";
import { useParams, Link } from "react-router-dom";
import "./Color.css";
import ColorForm from "./ColorForm";
import useToggleState from "./hooks/useToggleState";

function Color({ updateColors }) {
  const [displayForm, toggleForm ] = useToggleState();
  const add = (colorObj) => {
    updateColors((colors) => [...colors, colorObj]);
  };
  let { color } = useParams();
  if (!color) color = "black";
  return (
    <div className="Color" style={{ backgroundColor: `${color}` }}>
      <div>
        <h2>Welcome to the Color Factory!</h2>
      </div>
      <div>
        {displayForm ? (
          <ColorForm createColor={add} />
        ) : (
          <Link className="add" to="#" onClick={toggleForm} >
            Add a Color
          </Link>
        )}
      </div>
    </div>
  );
}

export default Color;
