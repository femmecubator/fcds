import React from "react";
// Figma: https://figma.com/design/tiGtyc8Fom1Iw7HrTGFm7y?node-id=24883:3496

const FormField = ({ label = "Label", ...props }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
    <label>{label}</label>
    <input {...props} />
  </div>
);

export default FormField; 