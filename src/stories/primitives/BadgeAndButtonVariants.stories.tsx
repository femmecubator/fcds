import type { Meta, StoryObj } from "@storybook/react";
import { Tag } from "primitives";
import { Button, ButtonDanger } from "primitives";

// Tag/Badge Stories with Interactive Controls
const tagMeta: Meta<typeof Tag> = {
  title: "SDS Primitives/Tags",
  component: Tag,
  parameters: { layout: "centered" },
};

export const InteractiveTag: StoryObj<typeof Tag> = {
  name: "Interactive Tag",
  args: {
    children: "Sample Tag",
    scheme: "brand",
    variant: "primary",
  },
  argTypes: {
    children: {
      control: { type: "text" },
      description: "The text content of the tag",
    },
    scheme: {
      control: { type: "select" },
      options: ["brand", "danger", "positive", "warning", "neutral"],
      description: "Color scheme of the tag",
    },
    variant: {
      control: { type: "select" },
      options: ["primary", "secondary"],
      description: "Visual variant of the tag",
    },
    onRemove: {
      action: "removed",
      description: "Callback when remove button is clicked",
    },
  },
  render: (args) => <Tag {...args} />,
};

export const TagVariants: StoryObj<typeof Tag> = {
  name: "All Tag Variants",
  render: () => (
    <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
      <Tag scheme="brand">Brand</Tag>
      <Tag scheme="danger">Danger</Tag>
      <Tag scheme="positive">Positive</Tag>
      <Tag scheme="warning">Warning</Tag>
      <Tag scheme="neutral">Neutral</Tag>
      <Tag variant="secondary">Secondary</Tag>
      <Tag scheme="danger" variant="secondary">Danger Secondary</Tag>
      <Tag scheme="positive" variant="secondary">Positive Secondary</Tag>
      <Tag scheme="warning" variant="secondary">Warning Secondary</Tag>
      <Tag scheme="neutral" variant="secondary">Neutral Secondary</Tag>
      <Tag onRemove={() => alert("Removed!")}>Removable</Tag>
      <Tag scheme="danger" onRemove={() => alert("Removed!")}>Danger Removable</Tag>
      <Tag scheme="positive" variant="secondary" onRemove={() => alert("Removed!")}>Positive Secondary Removable</Tag>
    </div>
  ),
};

// Button Stories with Interactive Controls
const buttonMeta: Meta<typeof Button> = {
  title: "SDS Primitives/Buttons",
  component: Button,
  parameters: { layout: "centered" },
};

export const InteractiveButton: StoryObj<typeof Button> = {
  name: "Interactive Button",
  args: {
    children: "Click me",
    variant: "primary",
    size: "medium",
  },
  argTypes: {
    children: {
      control: { type: "text" },
      description: "Button text content",
    },
    variant: {
      control: { type: "select" },
      options: ["primary", "neutral", "subtle"],
      description: "Button variant style",
    },
    size: {
      control: { type: "select" },
      options: ["small", "medium"],
      description: "Button size",
    },
    isDisabled: {
      control: { type: "boolean" },
      description: "Whether the button is disabled",
    },
    onPress: {
      action: "pressed",
      description: "Callback when button is pressed",
    },
  },
  render: (args) => <Button {...args} />,
};

export const ButtonVariants: StoryObj<typeof Button> = {
  name: "All Button Variants",
  render: () => (
    <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
      <Button variant="primary">Primary</Button>
      <Button variant="neutral">Neutral</Button>
      <Button variant="subtle">Subtle</Button>
      <Button size="small">Small</Button>
      <Button size="medium">Medium</Button>
      <Button variant="primary" isDisabled>Primary Disabled</Button>
      <Button variant="neutral" isDisabled>Neutral Disabled</Button>
      <Button variant="subtle" isDisabled>Subtle Disabled</Button>
    </div>
  ),
};

// ButtonDanger Stories with Interactive Controls
const buttonDangerMeta: Meta<typeof ButtonDanger> = {
  title: "SDS Primitives/Button Danger",
  component: ButtonDanger,
  parameters: { layout: "centered" },
};

export const InteractiveButtonDanger: StoryObj<typeof ButtonDanger> = {
  name: "Interactive Button Danger",
  args: {
    children: "Delete",
    variant: "danger-primary",
    size: "medium",
  },
  argTypes: {
    children: {
      control: { type: "text" },
      description: "Button text content",
    },
    variant: {
      control: { type: "select" },
      options: ["danger-primary", "danger-subtle"],
      description: "Danger button variant style",
    },
    size: {
      control: { type: "select" },
      options: ["small", "medium"],
      description: "Button size",
    },
    isDisabled: {
      control: { type: "boolean" },
      description: "Whether the button is disabled",
    },
    onPress: {
      action: "pressed",
      description: "Callback when button is pressed",
    },
  },
  render: (args) => <ButtonDanger {...args} />,
};

export const ButtonDangerVariants: StoryObj<typeof ButtonDanger> = {
  name: "All Button Danger Variants",
  render: () => (
    <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
      <ButtonDanger variant="danger-primary">Danger Primary</ButtonDanger>
      <ButtonDanger variant="danger-subtle">Danger Subtle</ButtonDanger>
      <ButtonDanger variant="danger-primary" isDisabled>Danger Primary Disabled</ButtonDanger>
      <ButtonDanger variant="danger-subtle" isDisabled>Danger Subtle Disabled</ButtonDanger>
    </div>
  ),
};

export default tagMeta; 