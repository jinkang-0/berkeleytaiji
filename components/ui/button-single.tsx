"use client";

import { MouseEvent as ReactMouseEvent, useCallback, useState } from "react";
import styles from "./button.module.scss";

export function ButtonPrimarySingle({
  children,
  className,
  onClick,
  disabled,
  ...rest
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
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
      {children}
    </button>
  );
}
