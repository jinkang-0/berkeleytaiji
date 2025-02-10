"use client";

import * as Accordion from "@radix-ui/react-accordion";
import styles from "./faq-section.module.scss";
import DownCaret from "@/icons/down-caret";

interface FAQCardProps {
  question: string;
  children?: React.ReactNode;
}

export default function FAQCard({ question, children }: FAQCardProps) {
  return (
    <Accordion.Item className={styles.card} value={question}>
      <Accordion.Trigger>
        {question}
        <DownCaret />
      </Accordion.Trigger>
      <Accordion.Content className={styles.accordionContent}>
        <div className={styles.content}>{children}</div>
      </Accordion.Content>
    </Accordion.Item>
  );
}

interface FAQListProps {
  children: React.ReactNode;
}

export function FAQList({ children }: FAQListProps) {
  return (
    <Accordion.Root className={styles.list} type="single" collapsible>
      {children}
    </Accordion.Root>
  );
}
