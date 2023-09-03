import React from "react";
import { StaticImage } from "gatsby-plugin-image";
// components
import { Container, Button } from "components";
// style
import * as styles from "./header.module.scss";

export const Header = () => {
  return (
    <div className={styles.header}>
      <Container>
        <div className={styles.body}>
          <div className={styles.logo}>
            <StaticImage src="../../assets/icons/logo.svg" alt="logo" />
          </div>
          <div className={styles.menu}>
            <nav className={styles.body}>
              <ul className={styles.list}>
                <li className={styles.item}>
                  <a className={styles.link} href="#">
                    Discover
                  </a>
                </li>
                <li className={styles.item}>
                  <a className={styles.link} href="#">
                    Creators
                  </a>
                </li>
                <li className={styles.item}>
                  <a className={styles.link} href="#">
                    Sell
                  </a>
                </li>
                <li className={styles.item}>
                  <a className={styles.link} href="#">
                    Stats
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className={styles.searchContainer}>
            <form className={styles.form} action="#">
              <button className={styles.formButton} type="submit">
                <StaticImage src="../../assets/icons/search.svg" alt="search" />
              </button>
              <input
                className={styles.input}
                autoComplete="off"
                name="form[]"
                type="text"
                placeholder="Search Art Work / Creator"
              />
            </form>
            <Button
              fontFamily="Inter"
              variant="primary"
              text="Connect Wallet"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};
