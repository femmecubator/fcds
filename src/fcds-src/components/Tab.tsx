import React from "react";
// Figma: https://figma.com/design/tiGtyc8Fom1Iw7HrTGFm7y?node-id=24940:6218

const Tab = ({ label = "Tab", ...props }) => (
  <button role="tab" {...props}>{label}</button>
);

export default Tab; 