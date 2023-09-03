import React from "react";
import { useRef, type FC } from "react";
// hooks
import { useRipple } from "hooks/use-ripple";

import { ButtonProps } from "./button.interface";
// style
import * as styles from "./button.module.scss";
import "@fontsource/inter";

export const Button: FC<ButtonProps> = ({ text, variant, fontFamily }) => {
  // refs
  const rootRef = useRef<HTMLButtonElement>(null);
  useRipple(rootRef);

  const buttonClasses = `${styles.btn} ${
    variant === "secondary" ? styles.secondary : ""
  }`;

  const buttonStyles: React.CSSProperties = {
    fontFamily: fontFamily === "Inter" ? "Inter" : "Poppins",
  };

  return (
    <button ref={rootRef} className={buttonClasses} style={buttonStyles}>
      {text}
    </button>
  );
};
