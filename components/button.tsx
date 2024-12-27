import styles from "./button.module.scss";
import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  className?: string;
}

export function Button({ children, className, ...rest }: ButtonProps) {
  return (
    <button className={`${styles.button} ${className}`} {...rest}>
      {children}
    </button>
  );
}

interface LinkButtonProps extends React.ComponentProps<typeof Link> {
  children?: React.ReactNode;
  className?: string;
}

export function LinkButton({ children, className, ...rest }: LinkButtonProps) {
  return (
    <Link className={`${styles.button} ${className}`} {...rest}>
      {children}
    </Link>
  );
}
