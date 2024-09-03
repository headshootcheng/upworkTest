import React from "react";
import styles from "./ContactArea.module.scss";
const ContactUsArea = () => {
  return (
    <section className={styles.contactArea}>
      <div className={styles["contactArea-overlay"]}></div>
      {/* Title */}
      <h1 className={styles["contactArea-header"]}>
        Call us today for your Free Estimate!
      </h1>
      {/* Button */}
      <button className={styles["contactArea-btn"]}>Contact Us</button>
    </section>
  );
};

export default ContactUsArea;
