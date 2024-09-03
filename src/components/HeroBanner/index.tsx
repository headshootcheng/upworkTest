import React from "react";
import styles from "./HeroBanner.module.scss";
const HeroBanner = () => {
  return (
    <section className={styles.herobanner}>
      <div className={styles["herobanner-overlay"]}></div>

      <h1 className={styles["herobanner-header"]}>Remake Your Dream Home</h1>
      <span className={styles["herobanner-intro"]}>
        Commercial and residential services for over 39 years. Family owned
        business. Servicing New York City, and surrounding areas.Residential or
        Commercial, you want to be confident that the contractor you hire is
        qualified, experienced and reliable with in both residential and
        commercial jobs.
      </span>
      <button className={styles["herobanner-btn"]}>Explore More</button>
    </section>
  );
};

export default HeroBanner;
