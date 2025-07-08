import React from 'react';
import { Tag, Button } from 'primitives';

export const FigmaTest: React.FC = () => {
  return (
    <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <h2>Figma Configuration Test</h2>
      
      <div>
        <h3>Tag Component (Badge)</h3>
        <Tag>Default Tag</Tag>
        <Tag scheme="danger">Danger Tag</Tag>
        <Tag scheme="positive">Success Tag</Tag>
        <Tag scheme="warning">Warning Tag</Tag>
      </div>

      <div>
        <h3>Button Component</h3>
        <Button>Primary Button</Button>
        <Button variant="neutral">Neutral Button</Button>
        <Button variant="subtle">Subtle Button</Button>
      </div>

      <div style={{ marginTop: '20px', padding: '10px', backgroundColor: '#f0f0f0', borderRadius: '4px' }}>
        <p><strong>Configuration Status:</strong></p>
        <ul>
          <li>✅ Tag/Badge: Using node ID 24940:6219</li>
          <li>✅ Button: Using node ID 3:1426</li>
          <li>✅ Checkbox: Using node ID 24940:6216</li>
          <li>✅ Radio: Using node ID 24940:6217</li>
          <li>✅ Switch/Toggle: Using node ID 24944:28856</li>
          <li>✅ Tab: Using node ID 24940:6218</li>
        </ul>
        <p><strong>Figma File:</strong> tiGtyc8Fom1Iw7HrTGFm7y</p>
        <p><strong>Status:</strong> All Figma connections updated to use correct node IDs</p>
      </div>
    </div>
  );
}; 