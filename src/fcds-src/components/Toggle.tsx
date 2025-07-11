import React from "react";
// Figma: https://figma.com/design/tiGtyc8Fom1Iw7HrTGFm7y?node-id=24944:28856

const Toggle = ({ checked, onChange, label = "Toggle", ...props }) => (
  <label style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
    <input type="checkbox" checked={checked} onChange={onChange} {...props} />
    {label}
  </label>
);

export default Toggle; 