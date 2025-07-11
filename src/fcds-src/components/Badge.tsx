import React from "react";
// Figma: https://figma.com/design/tiGtyc8Fom1Iw7HrTGFm7y?node-id=93:6604

const Badge = ({ children = "Badge", ...props }) => (
  <span style={{ display: 'inline-block', padding: '0.25em 0.5em', background: '#eee', borderRadius: '1em', fontSize: '0.85em' }} {...props}>{children}</span>
);

export default Badge; 