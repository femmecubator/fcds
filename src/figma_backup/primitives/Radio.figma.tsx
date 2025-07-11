import figma from "@figma/code-connect";
import { RadioField, RadioGroup } from "primitives";

figma.connect(RadioField, "<FIGMA_RADIO_RADIO>", {
  props: {
    label: figma.string("Label"),
    description: figma.boolean("Has Description", {
      true: figma.string("Description"),
      false: undefined,
    }),
    isDisabled: figma.enum("State", { Disabled: true }),
  },
  example: ({ ...props }) => <RadioField value="Initial value" {...props} />,
});

figma.connect(RadioGroup, "<FIGMA_RADIO_RADIO>", {
  props: { children: figma.children(["Radio Field"]) },
  example: ({ children }) => <RadioGroup>{children}</RadioGroup>,
});
