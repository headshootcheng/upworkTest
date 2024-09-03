import React from "react";
import styles from "./Footer.module.scss";
import { navItems } from "@/data/navItems";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      {/* Nav Items */}
      <div className={styles["footer-container"]}>
        <nav className={styles["footer-content"]}>
          {navItems.map((item, i) => (
            <a key={i} href={"/"} className={styles["footer-content-item"]}>
              {item.name}
            </a>
          ))}
        </nav>
        {/* CopyRight */}
        <span className={styles["footer-copyright"]}>© 2024 Copyright</span>
      </div>
    </footer>
  );
};

export default Footer;
