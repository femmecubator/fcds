import React from "react";
import { Tag } from "primitives";
import { Button, ButtonDanger } from "primitives";
import BadgeAndButtonVariants from "../../examples/BadgeAndButtonVariants";

export default function BadgeAndButtonVariants() {
  return (
    <div style={{ padding: 32, display: "flex", flexDirection: "column", gap: 32 }}>
      <section>
        <h2>Badge (Tag) Variants</h2>
        <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
          {/* Schemes */}
          <Tag scheme="brand">Brand</Tag>
          <Tag scheme="danger">Danger</Tag>
          <Tag scheme="positive">Positive</Tag>
          <Tag scheme="warning">Warning</Tag>
          <Tag scheme="neutral">Neutral</Tag>

          {/* Variants */}
          <Tag variant="secondary">Secondary</Tag>
          <Tag scheme="danger" variant="secondary">Danger Secondary</Tag>
          <Tag scheme="positive" variant="secondary">Positive Secondary</Tag>
          <Tag scheme="warning" variant="secondary">Warning Secondary</Tag>
          <Tag scheme="neutral" variant="secondary">Neutral Secondary</Tag>

          {/* Removable */}
          <Tag onRemove={() => alert("Removed!")}>Removable</Tag>
          <Tag scheme="danger" onRemove={() => alert("Removed!")}>Danger Removable</Tag>
          <Tag scheme="positive" variant="secondary" onRemove={() => alert("Removed!")}>Positive Secondary Removable</Tag>
        </div>
      </section>

      <section>
        <h2>Button Variants</h2>
        <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
          {/* Button Variants */}
          <Button variant="primary">Primary</Button>
          <Button variant="neutral">Neutral</Button>
          <Button variant="subtle">Subtle</Button>
          <Button size="small">Small</Button>
          <Button size="medium">Medium</Button>
          <Button variant="primary" isDisabled>Primary Disabled</Button>
          <Button variant="neutral" isDisabled>Neutral Disabled</Button>
          <Button variant="subtle" isDisabled>Subtle Disabled</Button>

          {/* Danger Buttons */}
          <ButtonDanger variant="danger-primary">Danger Primary</ButtonDanger>
          <ButtonDanger variant="danger-subtle">Danger Subtle</ButtonDanger>
          <ButtonDanger variant="danger-primary" isDisabled>Danger Primary Disabled</ButtonDanger>
          <ButtonDanger variant="danger-subtle" isDisabled>Danger Subtle Disabled</ButtonDanger>
        </div>
      </section>
    </div>
  );
} 