import React from "react";
import { StatsContainerProps } from "./stats.interface";
import * as styles from "./stats.module.scss";

export const StatsContainer: React.FC<StatsContainerProps> = ({ stats }) => {
  return (
    <div className={styles.statsContainer}>
      {stats.map((stat, index) => (
        <div key={index} className={styles.statsBlock}>
          <span className={styles.statNumber}>{stat.number}</span>
          <span className={styles.statLabel}>{stat.label}</span>
        </div>
      ))}
    </div>
  );
};
