import { ListPlugin } from "@udecode/plate-list/react";
import { AutoformatPlugin } from "@udecode/plate-autoformat/react";
import { ExitBreakPlugin } from "@udecode/plate-break/react";
import { TrailingBlockPlugin } from "@udecode/plate-trailing-block";
import { ResetNodePlugin } from "@udecode/plate-reset-node/react";
import { BasicElementsPlugin } from "@udecode/plate-basic-elements/react";
import { BasicMarksPlugin } from "@udecode/plate-basic-marks/react";
import { SoftBreakPlugin } from "@udecode/plate-break/react";
import {
  PlateElement,
  PlateElementProps,
  PlateLeaf,
  PlateLeafProps
} from "@udecode/plate/react";

const resetBlockTypesCommonRule = {
  types: ["blockquote", "h1", "h2", "h3", "h4", "h5", "h6"],
  defaultType: "p"
};

export const editorPlugins = [
  BasicMarksPlugin,
  BasicElementsPlugin,
  ListPlugin,
  AutoformatPlugin.configure({
    options: {
      rules: [
        {
          match: "> ",
          mode: "block",
          type: "blockquote"
        },
        {
          match: "1. ",
          mode: "block",
          type: "ol"
        },
        {
          match: ["- ", "* "],
          mode: "block",
          type: "ul"
        }
      ]
    }
  }),
  ExitBreakPlugin.configure({
    options: {
      rules: [{ hotkey: "mod+enter" }]
    }
  }),
  TrailingBlockPlugin,
  ResetNodePlugin.configure({
    options: {
      rules: [
        {
          // if the block is empty, reset to a paragraph when pressing enter
          ...resetBlockTypesCommonRule,
          hotkey: "Enter",
          predicate: (editor) =>
            editor.api.isEmpty(editor.selection, { block: true })
        },
        {
          // when at the start of a block, reset to a paragraph when pressing backspace
          ...resetBlockTypesCommonRule,
          hotkey: "Backspace",
          predicate: (editor) => editor.api.isAt({ start: true })
        }
      ]
    }
  }),
  // IMPORTANT: SoftBreakPlugin must be after ResetNodePlugin
  // to give precedence to the ResetNodePlugin's enter rule
  SoftBreakPlugin.configure({
    options: {
      rules: [
        { hotkey: "shift+enter" },
        { hotkey: "enter", query: { allow: ["blockquote"] } }
      ]
    }
  })
];

export const editorComponents = {
  h1: (props: PlateElementProps) => <PlateElement {...props} as="h1" />,
  h2: (props: PlateElementProps) => <PlateElement {...props} as="h2" />,
  h3: (props: PlateElementProps) => <PlateElement {...props} as="h3" />,
  h4: (props: PlateElementProps) => <PlateElement {...props} as="h4" />,
  h5: (props: PlateElementProps) => <PlateElement {...props} as="h5" />,
  h6: (props: PlateElementProps) => <PlateElement {...props} as="h6" />,
  blockquote: (props: PlateElementProps) => (
    <PlateElement {...props} as="blockquote" />
  ),
  p: (props: PlateElementProps) => <PlateElement {...props} as="p" />,
  bold: (props: PlateLeafProps) => <PlateLeaf {...props} as="strong" />,
  italic: (props: PlateLeafProps) => <PlateLeaf {...props} as="em" />,
  underline: (props: PlateLeafProps) => <PlateLeaf {...props} as="u" />,
  li: (props: PlateElementProps) => <PlateElement {...props} as="li" />,
  ol: (props: PlateElementProps) => <PlateElement {...props} as="ol" />,
  ul: (props: PlateElementProps) => <PlateElement {...props} as="ul" />
};
