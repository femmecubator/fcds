import React from "react";
// Figma: https://figma.com/design/tiGtyc8Fom1Iw7HrTGFm7y?node-id=24942:22710

const Multiselect = ({ options = ["Option 1", "Option 2"], ...props }) => (
  <select multiple {...props}>
    {options.map((option, i) => (
      <option key={i} value={option}>{option}</option>
    ))}
  </select>
);

export default Multiselect; 