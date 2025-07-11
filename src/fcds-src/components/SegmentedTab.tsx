import React, { useState } from "react";
// Figma: https://figma.com/design/tiGtyc8Fom1Iw7HrTGFm7y?node-id=24964:20665

const SegmentedTab = ({ options = ["Tab 1", "Tab 2"], ...props }) => {
  const [selected, setSelected] = useState(0);
  return (
    <div style={{ display: 'flex', gap: 4 }} {...props}>
      {options.map((option, i) => (
        <button
          key={i}
          style={{
            padding: '0.5em 1em',
            border: '1px solid #ccc',
            background: selected === i ? '#007AFF' : '#fff',
            color: selected === i ? '#fff' : '#333',
            borderRadius: '0.5em',
            cursor: 'pointer',
          }}
          onClick={() => setSelected(i)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default SegmentedTab; 