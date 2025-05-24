"use client";

import { MouseEvent as ReactMouseEvent, useCallback, useState } from "react";
import styles from "./button.module.scss";
import LoadingIcon from "@/icons/loading";

interface ButtonSingleProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactNode;
}

interface ButtonSingleInternalProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ReactNode | null;
}

function ButtonSingle({
  icon,
  children,
  className,
  onClick,
  disabled,
  ...rest
}: ButtonSingleInternalProps) {
  const [isDisabled, setDisabled] = useState(disabled);

  const clickFunction = useCallback(
    (args: ReactMouseEvent<HTMLButtonElement, MouseEvent>) => {
      if (isDisabled) return;

      onClick?.(args);
      setDisabled(true);
    },
    [onClick, isDisabled]
  );

  return (
    <button
      className={`${styles.button} ${className}`}
      onClick={clickFunction}
      disabled={disabled || isDisabled}
      {...rest}
    >
      {isDisabled ? <LoadingIcon /> : icon}
      {children}
    </button>
  );
}

export function ButtonSinglePrimary({
  icon,
  children,
  className,
  onClick,
  disabled,
  ...rest
}: ButtonSingleProps) {
  return (
    <ButtonSingle
      className={`${styles.buttonPrimary} ${className}`}
      onClick={onClick}
      disabled={disabled}
      icon={icon ?? null}
      {...rest}
    >
      {children}
    </ButtonSingle>
  );
}

export function ButtonSingleSecondary({
  icon,
  children,
  className,
  onClick,
  disabled,
  ...rest
}: ButtonSingleProps) {
  return (
    <ButtonSingle
      className={`${styles.buttonSecondary} ${className}`}
      onClick={onClick}
      disabled={disabled}
      icon={icon ?? null}
      {...rest}
    >
      {children}
    </ButtonSingle>
  );
}
