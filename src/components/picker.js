import React from "react";
import { useSnapshot } from "valtio";
import { HexColorPicker } from "react-colorful";
// STYLE
import "./picker.style.scss";
// STATE
// import { state } from "./Shoe-draco";

const Picker = ({ colorState }) => {
  const snap = useSnapshot(colorState);
  return (
    <div
      className="color-section"
      style={{ display: snap.current ? "flex" : "none" }}
    >
      <HexColorPicker
        classname="picker"
        color={snap.items[snap.current]}
        onChange={(color) => (colorState.items[snap.current] = color)}
      />
      <h1>{snap.current}</h1>
    </div>
  );
};

export default Picker;
