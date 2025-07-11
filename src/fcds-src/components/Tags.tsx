import React from "react";
// Figma: https://figma.com/design/tiGtyc8Fom1Iw7HrTGFm7y?node-id=24940:6219

const Tags = ({ tags = ["Tag 1", "Tag 2"] }) => (
  <div style={{ display: 'flex', gap: 8 }}>
    {tags.map((tag, i) => (
      <span key={i} style={{ background: '#eee', borderRadius: '1em', padding: '0.25em 0.75em', fontSize: '0.85em' }}>{tag}</span>
    ))}
  </div>
);

export default Tags; 