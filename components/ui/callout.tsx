import styles from "./callout.module.scss";

export default function Callout({
  children,
  className = ""
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return <div className={`${styles.callout} ${className}`}>{children}</div>;
}
