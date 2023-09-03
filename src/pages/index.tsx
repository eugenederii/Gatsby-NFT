import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
// import { StaticImage } from "gatsby-plugin-image";
import { Header, Discover } from "components";
// import { Container } from "components";
import "styles/globals.scss";
// import * as styles from "./index.scss";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <Header />
      <Discover />
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>NFT</title>;
