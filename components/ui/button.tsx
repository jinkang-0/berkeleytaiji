"use client";

import styles from "./button.module.scss";
import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  className?: string;
}

export function ButtonPrimary({ children, className, ...rest }: ButtonProps) {
  return (
    <button className={`${styles.button} ${className}`} {...rest}>
      {children}
    </button>
  );
}

export function ButtonGhost({ children, className, ...rest }: ButtonProps) {
  return (
    <button className={`${styles.buttonGhost} ${className}`} {...rest}>
      {children}
    </button>
  );
}

interface LinkButtonProps extends React.ComponentProps<typeof Link> {
  children?: React.ReactNode;
  className?: string;
}

export function LinkButtonPrimary({
  children,
  className,
  ...rest
}: LinkButtonProps) {
  return (
    <Link className={`${styles.button} ${className}`} {...rest}>
      {children}
    </Link>
  );
}
