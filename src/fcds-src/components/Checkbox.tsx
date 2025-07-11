import React from "react";
// Figma: https://figma.com/design/tiGtyc8Fom1Iw7HrTGFm7y?node-id=24940:6216

const Checkbox = ({ label = "Checkbox", ...props }) => (
  <label style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
    <input type="checkbox" {...props} />
    {label}
  </label>
);

export default Checkbox; 