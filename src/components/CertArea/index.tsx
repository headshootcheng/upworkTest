/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "./CertArea.module.scss";
const certs = [
  { url: "cert1.jpg", title: "cert1" },
  { url: "cert2.jpg", title: "cert2" },
  { url: "cert3.png", title: "cert3" },
];
const CertArea = () => {
  return (
    <section className={styles.certArea}>
      <div className={styles["certArea-container"]}>
        {/* Title */}
        <span className={styles["certArea-title"]}>
          ​Fully Insured & Licensed EPA Lead Paint Certified
        </span>
        {/* List of cert */}
        <div className={styles["certArea-certs"]}>
          {certs.map((cert) => (
            <div key={cert.title} className={styles["certArea-certs-cert"]}>
              <img
                src={cert.url}
                alt={cert.title}
                className={styles["certArea-certs-cert"]}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertArea;
