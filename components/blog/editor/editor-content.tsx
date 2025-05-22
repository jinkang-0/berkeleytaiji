"use client";

import { Value } from "@udecode/plate";
import { BasicElementsPlugin } from "@udecode/plate-basic-elements/react";
import { BasicMarksPlugin } from "@udecode/plate-basic-marks/react";
import {
  Plate,
  PlateContent,
  PlateElement,
  PlateElementProps,
  PlateLeaf,
  PlateLeafProps,
  usePlateEditor
} from "@udecode/plate/react";
import styles from "./editor-content.module.scss";
import { EditorToolbar } from "./editor-toolbar";
import { ListPlugin } from "@udecode/plate-list/react";
import { AutoformatPlugin } from "@udecode/plate-autoformat/react";
import { ExitBreakPlugin, SoftBreakPlugin } from "@udecode/plate-break/react";
import { TrailingBlockPlugin } from "@udecode/plate-trailing-block";
import { ResetNodePlugin } from "@udecode/plate-reset-node/react";

const initialValue: Value = [
  { type: "h3", children: [{ text: "Title" }] },
  { type: "blockquote", children: [{ text: "This is a quote." }] },
  {
    type: "p",
    children: [
      { text: "Hello! Try out the " },
      { text: "bold", bold: true },
      { text: ", " },
      { text: "italic", italic: true },
      { text: ", and " },
      { text: "underline", underline: true },
      { text: " formatting." }
    ]
  }
];

const resetBlockTypesCommonRule = {
  types: ["blockquote", "h1", "h2", "h3", "h4", "h5", "h6"],
  defaultType: "p"
};

export default function EditorContent() {
  const editor = usePlateEditor({
    value: initialValue,
    plugins: [
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
              ...resetBlockTypesCommonRule,
              hotkey: "Enter",
              predicate: (editor) =>
                editor.api.isEmpty(editor.selection, { block: true })
            },
            {
              ...resetBlockTypesCommonRule,
              hotkey: "Backspace",
              predicate: (editor) => editor.api.isAt({ start: true })
            }
          ]
        }
      }),
      SoftBreakPlugin.configure({
        options: {
          rules: [
            { hotkey: "shift+enter" },
            { hotkey: "enter", query: { allow: ["blockquote"] } }
          ]
        }
      })
    ],
    components: {
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
    }
  });

  return (
    <Plate editor={editor}>
      <EditorToolbar />
      <PlateContent
        className={styles.editor}
        style={{ minHeight: "100px" }}
        placeholder="Write something..."
      />
    </Plate>
  );
}
