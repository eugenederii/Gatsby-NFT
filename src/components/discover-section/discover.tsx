import React from "react";
import { StaticImage } from "gatsby-plugin-image";
// components
import { Container, Button, StatsContainer } from "components";
// style
import * as styles from "./discover.module.scss";

export const Discover = () => {
  const statsData = [
    { number: "430K+", label: "Art Works" },
    { number: "159K+", label: "Creators" },
    { number: "87K+", label: "Collections" },
  ];

  return (
    <div className={styles.discover}>
      <Container>
        <div className={styles.line}></div>
        <div className={styles.body}>
          <div className={styles.info}>
            <div className={styles.title}>Discover And Create NFT</div>
            <div className={styles.subTitle}>
              Discover, Create and Sell NFTs On Our NFT Marketplace With Over
              Thousands Of NFTs And Get a <span>$20 bonus</span>.
            </div>
            <div className={styles.buttons}>
              <Button
                fontFamily="Poppins"
                variant="primary"
                text="Explore More"
              />
              <Button
                fontFamily="Poppins"
                variant="secondary"
                text="Create NFT"
              />
            </div>
            <StatsContainer stats={statsData} />
          </div>
        </div>
      </Container>
    </div>
  );
};
