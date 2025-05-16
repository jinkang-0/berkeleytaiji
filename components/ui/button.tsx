import styles from "./button.module.scss";
import Link from "next/link";

export function ButtonPrimary({
  children,
  className,
  ...rest
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={`${styles.button} ${styles.buttonPrimary} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}

export function ButtonSecondary({
  children,
  className,
  ...rest
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={`${styles.button} ${styles.buttonSecondary} ${className}`}
      {...rest}
    >
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
    <button
      className={`${styles.button} ${styles.buttonGhost} ${className}`}
      {...rest}
    >
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
    <Link
      className={`${styles.button} ${styles.buttonPrimary} ${className}`}
      {...rest}
    >
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
    <Link
      className={`${styles.button} ${styles.buttonGhost} ${className}`}
      {...rest}
    >
      {children}
    </Link>
  );
}

export function LinkButtonOutline({
  children,
  className,
  ...rest
}: React.ComponentProps<typeof Link>) {
  return (
    <Link
      className={`${styles.button} ${styles.buttonOutline} ${className}`}
      {...rest}
    >
      {children}
    </Link>
  );
}
