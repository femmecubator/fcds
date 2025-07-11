import React from "react";
// Figma: https://figma.com/design/tiGtyc8Fom1Iw7HrTGFm7y?node-id=24955:11569

const Label = ({ children = "Label", ...props }) => (
  <label {...props}>{children}</label>
);

export default Label; 