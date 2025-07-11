import React from "react";
// Figma: https://figma.com/design/tiGtyc8Fom1Iw7HrTGFm7y?node-id=24955:9384

const Base = ({ children = "Base Component", ...props }) => (
  <div style={{ border: '1px solid #eee', padding: 16, borderRadius: 8 }} {...props}>{children}</div>
);

export default Base; 