import { BaseListPlugin } from "@udecode/plate-list";
import { BaseBasicElementsPlugin } from "@udecode/plate-basic-elements";
import { BaseBasicMarksPlugin } from "@udecode/plate-basic-marks";
import {
  createSlateEditor,
  serializeHtml,
  SlateElement,
  SlateElementProps,
  SlateLeaf,
  SlateLeafProps,
  Value
} from "@udecode/plate";

export const editorPlugins = [
  BaseBasicMarksPlugin,
  BaseBasicElementsPlugin,
  BaseListPlugin
];

export const editorComponents = {
  h1: (props: SlateElementProps) => <SlateElement {...props} as="h1" />,
  h2: (props: SlateElementProps) => <SlateElement {...props} as="h2" />,
  h3: (props: SlateElementProps) => <SlateElement {...props} as="h3" />,
  h4: (props: SlateElementProps) => <SlateElement {...props} as="h4" />,
  h5: (props: SlateElementProps) => <SlateElement {...props} as="h5" />,
  h6: (props: SlateElementProps) => <SlateElement {...props} as="h6" />,
  blockquote: (props: SlateElementProps) => (
    <SlateElement {...props} as="blockquote" />
  ),
  p: (props: SlateElementProps) => <SlateElement {...props} as="p" />,
  bold: (props: SlateLeafProps) => <SlateLeaf {...props} as="strong" />,
  italic: (props: SlateLeafProps) => <SlateLeaf {...props} as="em" />,
  underline: (props: SlateLeafProps) => <SlateLeaf {...props} as="u" />,
  li: (props: SlateElementProps) => <SlateElement {...props} as="li" />,
  ol: (props: SlateElementProps) => <SlateElement {...props} as="ol" />,
  ul: (props: SlateElementProps) => <SlateElement {...props} as="ul" />
};

export const serializeValue = async (value: Value) => {
  const editor = createSlateEditor({
    plugins: editorPlugins,
    value
  });

  return await serializeHtml(editor, {
    components: editorComponents
  });
};
