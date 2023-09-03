import React from "react";
import { StaticImage } from "gatsby-plugin-image";
// components
import { Container, Button } from "components";
// style
import * as styles from "./discover.module.scss";

export const Discover = () => {
  return (
    <div className={styles.discover}>
      <Container>
        <div className={styles.line}></div>
        <div className={styles.container}>
          <div className={styles.info}>
            <div className={styles.title}>
              Discover And Create NFTsDiscover And Create NFTs
            </div>
            <div className={styles.subTitle}>
              Discover, Create and Sell NFTs On Our NFT Marketplace With Over
              Thousands Of NFTs And Get a <span>$20 bonus</span>.
            </div>
            <div className={styles.buttons}>
              <Button text="Explore More" />
              <Button variant="secondary" text="Create NFT" />
            </div>
            <div className={styles.statsBlock}>
              <div>
                <span className={styles.statNumber}>430K+</span>
                <span className={styles.statLabel}>Art Works</span>
              </div>
              <div>
                <span className={styles.statNumber}>159K+</span>
                <span className={styles.statLabel}>Creators</span>
              </div>
              <div>
                <span className={styles.statNumber}>87K+</span>
                <span className={styles.statLabel}>Collections</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
