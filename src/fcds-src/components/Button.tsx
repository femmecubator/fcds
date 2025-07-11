import React from "react";
// Figma: https://figma.com/design/tiGtyc8Fom1Iw7HrTGFm7y?node-id=3:1426

const Button = ({ children = "Button", ...props }) => (
  <button {...props}>{children}</button>
);

export default Button; 