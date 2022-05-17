import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Docusaurus",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>此 Documentation 網站是使用 Docusaurus 製作的~ 特別感謝 Docusaurus!</>
    )
  },
  {
    title: "教學",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>這個網站會有很多關於 Renpy 的教學 - 請進入教學頁面 查看教學</>
    )
  },
  {
    title: "資源",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: <>關於 Renpy 或是存翠視覺小說的資源也會收錄進來的!</>
  }
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
