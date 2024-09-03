/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "./GridArea.module.scss";
const GridArea = () => {
  return (
    <section className={styles.gridArea}>
      <div className={styles["gridArea-container"]}>
        <img
          src="/grid1.jpg"
          className={styles["gridArea-container-photo1"]}
          alt={"photo1"}
        />
        <img src="/grid2.jpg" alt={"photo2"} />
        <img src="/grid3.jpg" alt={"photo3"} />
        <img src="/grid4.jpg" alt={"photo4"} />
        <img src="/grid5.jpg" alt={"photo5"} />
      </div>
      <button className={styles["gridArea-btn"]}>View More</button>
    </section>
  );
};

export default GridArea;
