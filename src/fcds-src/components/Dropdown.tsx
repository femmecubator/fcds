import React from "react";
// Figma: https://figma.com/design/tiGtyc8Fom1Iw7HrTGFm7y?node-id=24942:2335

const Dropdown = ({ options = ["Option 1", "Option 2"], ...props }) => (
  <select {...props}>
    {options.map((option, i) => (
      <option key={i} value={option}>{option}</option>
    ))}
  </select>
);

export default Dropdown; 