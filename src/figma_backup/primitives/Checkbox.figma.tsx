import figma from "@figma/code-connect";
import { CheckboxField, CheckboxGroup } from "primitives";

figma.connect(CheckboxField, "<FIGMA_CHECKBOX_CHECKBOX>", {
  props: {
    label: figma.string("Label"),
    description: figma.boolean("Has Description", {
      true: figma.string("Description"),
      false: undefined,
    }),
    defaultSelected: figma.enum("Value Type", {
      Checked: true,
      Indeterminate: true,
    }),
    isIndeterminate: figma.enum("Value Type", {
      Indeterminate: true,
    }),
    isDisabled: figma.enum("State", {
      Disabled: true,
    }),
  },
  example: ({ ...props }) => <CheckboxField {...props} />,
});

figma.connect(CheckboxGroup, "<FIGMA_CHECKBOX_CHECKBOX>", {
  props: { children: figma.children(["Checkbox Field"]) },
  example: ({ children }) => <CheckboxGroup>{children}</CheckboxGroup>,
});
