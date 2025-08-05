import styles from "./callout.module.scss";

export default function Callout({
  children,
  className = "",
  type = "warning"
}: {
  children?: React.ReactNode;
  className?: string;
  type?: "warning" | "success";
}) {
  return (
    <div className={`${styles.callout} ${styles[type]} ${className}`}>
      {children}
    </div>
  );
}
