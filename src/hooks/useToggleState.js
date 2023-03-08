import React, {useState} from "react";

function useToggleState() {
  const [ state, setState ] = useState(false);
  function toggleState() {
    setState(state => !state);
  }
  return [ state, toggleState ]
}

export default useToggleState;