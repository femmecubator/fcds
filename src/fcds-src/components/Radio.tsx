import React from "react";
// Figma: https://figma.com/design/tiGtyc8Fom1Iw7HrTGFm7y?node-id=24940:6217

const Radio = ({ label = "Radio", name = "radio-group", ...props }) => (
  <label style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
    <input type="radio" name={name} {...props} />
    {label}
  </label>
);

export default Radio; 