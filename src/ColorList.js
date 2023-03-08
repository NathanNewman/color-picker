import React from "react";
import { Link, useParams } from "react-router-dom";
import uuid from "react-uuid";
import "./ColorList.css";

function ColorList( {colors} ) {
  let { color } = useParams();
  const param = color ? true : false;
  return (
    <div className="ColorList">
      <ul>
        {colors.map((color) =>
          param ? (
            <li key={uuid()}>
              <Link to={`${color}`} style={{ color: `${color}` }}>
                {color}
              </Link>
            </li>
          ) : (
            <li key={uuid()}>
              <Link to={`colors/${color}`} style={{ color: `${color}` }}>
                {color}
              </Link>
            </li>
          )
        )}
      </ul>
    </div>
  );
}

export default ColorList;
