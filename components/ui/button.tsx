import styles from "./button.module.scss";
import Link from "next/link";

export function ButtonPrimary({
  children,
  className,
  ...rest
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={`${styles.button} ${className}`} {...rest}>
      {children}
    </button>
  );
}

export function ButtonGhost({
  children,
  className,
  ...rest
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={`${styles.buttonGhost} ${className}`} {...rest}>
      {children}
    </button>
  );
}

export function LinkButtonPrimary({
  children,
  className,
  ...rest
}: React.ComponentProps<typeof Link>) {
  return (
    <Link className={`${styles.button} ${className}`} {...rest}>
      {children}
    </Link>
  );
}

export function LinkButtonGhost({
  children,
  className,
  ...rest
}: React.ComponentProps<typeof Link>) {
  return (
    <Link className={`${styles.buttonGhost} ${className}`} {...rest}>
      {children}
    </Link>
  );
}
