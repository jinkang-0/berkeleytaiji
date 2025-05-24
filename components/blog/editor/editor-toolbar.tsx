import { useMemo, useState } from "react";

import { ButtonGhost } from "@/components/ui/button";
import styles from "./editor-toolbar.module.scss";

import {
  ParagraphPlugin,
  useEditorRef,
  useMarkToolbarButton,
  useMarkToolbarButtonState,
  useSelectionFragmentProp
} from "@udecode/plate/react";
import {
  useListToolbarButton,
  useListToolbarButtonState
} from "@udecode/plate-list/react";
import { Alignment, setAlign } from "@udecode/plate-alignment";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import * as RadixTooltip from "@radix-ui/react-tooltip";

import Bold from "@/icons/editor/bold";
import Italic from "@/icons/editor/italic";
import Underline from "@/icons/editor/underline";
import BulletListIcon from "@/icons/editor/bullet-list";
import NumberedListIcon from "@/icons/editor/numbered-list";
import Blockquote from "@/icons/editor/blockquote";
import Pilcrow from "@/icons/editor/pilcrow";
import HeadingOne from "@/icons/editor/heading-one";
import DownCaret from "@/icons/down-caret";
import HeadingTwo from "@/icons/editor/heading-two";
import HeadingThree from "@/icons/editor/heading-three";
import SavingIndicator from "./saving-indicator";
import LeftAlign from "@/icons/editor/left-align";
import CenterAlign from "@/icons/editor/center-align";
import RightAlign from "@/icons/editor/right-align";

export function EditorToolbar() {
  return (
    <div className={styles.toolbarContainer}>
      <SavingIndicator />
      <div className={styles.toolbar}>
        <ToolbarDropdown />
        <ToolbarSeparator />
        <ToolbarGroup>
          <ToolbarButtonMark format="bold" tooltip="Bold (Ctrl+B)">
            <Bold />
          </ToolbarButtonMark>
          <ToolbarButtonMark format="italic" tooltip="Italic (Ctrl+I)">
            <Italic />
          </ToolbarButtonMark>
          <ToolbarButtonMark format="underline" tooltip="Underline (Ctrl+U)">
            <Underline />
          </ToolbarButtonMark>
        </ToolbarGroup>
        <ToolbarSeparator />
        <ToolbarGroup>
          <ToolbarButtonList format="ul" tooltip="Bullet List">
            <BulletListIcon />
          </ToolbarButtonList>
          <ToolbarButtonList format="ol" tooltip="Numbered List">
            <NumberedListIcon />
          </ToolbarButtonList>
          <ToolbarButtonBlock format="blockquote" tooltip="Quote">
            <Blockquote />
          </ToolbarButtonBlock>
        </ToolbarGroup>
        <ToolbarSeparator />
        <ToolbarGroup>
          <ToolbarButtonAlign format="left" tooltip="Align Left">
            <LeftAlign />
          </ToolbarButtonAlign>
          <ToolbarButtonAlign format="center" tooltip="Align Center">
            <CenterAlign />
          </ToolbarButtonAlign>
          <ToolbarButtonAlign format="right" tooltip="Align Right">
            <RightAlign />
          </ToolbarButtonAlign>
        </ToolbarGroup>
      </div>
    </div>
  );
}

export function Tooltip({
  tooltip,
  children
}: {
  tooltip: string;
  children: React.ReactNode;
}) {
  return (
    <RadixTooltip.Provider delayDuration={0}>
      <RadixTooltip.Root>
        <RadixTooltip.Trigger asChild>{children}</RadixTooltip.Trigger>
        <RadixTooltip.Portal>
          <RadixTooltip.Content
            className={styles.toolbarTooltip}
            sideOffset={10}
          >
            {tooltip}
          </RadixTooltip.Content>
        </RadixTooltip.Portal>
      </RadixTooltip.Root>
    </RadixTooltip.Provider>
  );
}

export function ToolbarButtonMark({
  children,
  format,
  tooltip
}: {
  children: React.ReactNode;
  format: string;
  tooltip: string;
}) {
  const state = useMarkToolbarButtonState({ nodeType: format });
  const {
    props: { pressed, ...eventHandlers }
  } = useMarkToolbarButton(state);

  return (
    <Tooltip tooltip={tooltip}>
      <ButtonGhost className={pressed ? "active" : ""} {...eventHandlers}>
        {children}
      </ButtonGhost>
    </Tooltip>
  );
}

export function ToolbarButtonBlock({
  children,
  format,
  tooltip
}: {
  children: React.ReactNode;
  format: string;
  tooltip: string;
}) {
  const editor = useEditorRef();
  const value = useSelectionFragmentProp({
    defaultValue: ParagraphPlugin.key,
    getProp: (node) => node.type
  });

  const isActive = value === format;

  const toggleBlock = () => {
    editor.tf.toggleBlock(format);
    editor.tf.focus();
  };

  return (
    <Tooltip tooltip={tooltip}>
      <ButtonGhost
        className={isActive ? "active" : ""}
        onClick={() => toggleBlock()}
      >
        {children}
      </ButtonGhost>
    </Tooltip>
  );
}

export function ToolbarButtonList({
  children,
  format,
  tooltip
}: {
  children: React.ReactNode;
  format: string;
  tooltip: string;
}) {
  const state = useListToolbarButtonState({ nodeType: format });
  const {
    props: { pressed, ...eventHandlers }
  } = useListToolbarButton(state);

  return (
    <Tooltip tooltip={tooltip}>
      <ButtonGhost className={pressed ? "active" : ""} {...eventHandlers}>
        {children}
      </ButtonGhost>
    </Tooltip>
  );
}

export function ToolbarButtonAlign({
  children,
  format,
  tooltip
}: {
  children: React.ReactNode;
  format: Alignment;
  tooltip: string;
}) {
  const editor = useEditorRef();

  const toggleAlign = () => {
    setAlign(editor, { value: format });
    editor.tf.focus();
  };

  return (
    <Tooltip tooltip={tooltip}>
      <ButtonGhost onClick={() => toggleAlign()}>{children}</ButtonGhost>
    </Tooltip>
  );
}

const dropdownItems = [
  {
    icon: <Pilcrow />,
    label: "Text",
    value: ParagraphPlugin.key
  },
  {
    icon: <HeadingOne />,
    label: "Heading 1",
    value: "h1"
  },
  {
    icon: <HeadingTwo />,
    label: "Heading 2",
    value: "h2"
  },
  {
    icon: <HeadingThree />,
    label: "Heading 3",
    value: "h3"
  }
];

export function ToolbarDropdown() {
  const editor = useEditorRef();
  const [open, setOpen] = useState(false);

  const value = useSelectionFragmentProp({
    defaultValue: ParagraphPlugin.key,
    getProp: (node) => node.type
  });

  const selectedItem = useMemo(
    () =>
      dropdownItems.find(
        (item) => item.value === (value ?? ParagraphPlugin.key)
      ) ?? dropdownItems[0],
    [value]
  );

  return (
    <DropdownMenu.Root open={open} onOpenChange={setOpen} modal={false}>
      <DropdownMenu.Trigger asChild>
        <ButtonGhost className={styles.dropdownTrigger}>
          {selectedItem.label}
          <DownCaret />
        </ButtonGhost>
      </DropdownMenu.Trigger>

      <DropdownMenu.Content className={styles.dropdownMenu} sideOffset={10}>
        {dropdownItems.map((item) => (
          <DropdownMenu.Item
            key={item.value}
            className={styles.dropdownItem}
            onClick={() => {
              editor.tf.toggleBlock(item.value);
              setOpen(false);
            }}
          >
            {item.icon}
            {item.label}
          </DropdownMenu.Item>
        ))}
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}

export function ToolbarSeparator() {
  return <div className={styles.separator} />;
}

export function ToolbarGroup({ children }: { children: React.ReactNode }) {
  return <div className={styles.toolbarGroup}>{children}</div>;
}
