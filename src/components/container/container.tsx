import React from "react";
import type { ContainerProps } from "./container.interface";
import * as styles from "./container.module.scss";

export const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};
