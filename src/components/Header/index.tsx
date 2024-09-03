/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "./header.module.scss";
import MenuButton from "../MenuButton";
import { navItems } from "@/data/navItems";

const Header = () => {
  return (
    <header className={styles.header}>
      {/* Left Icon */}
      <a className={styles["header-icon"]} href="/">
        <img
          src={"/icon.png"}
          alt="Lexington Painting"
          className={styles["header-icon"]}
        />
      </a>
      {/* Nav Items (Desktop) */}
      <nav className={styles["header-nav"]}>
        {navItems.map((item, i) => (
          <a key={i} className={styles["header-nav-item"]} href="/">
            {item.name}
          </a>
        ))}
      </nav>
      {/* Menu Button (Mobile) */}
      <nav className={styles["header-mobile-nav"]}>
        <MenuButton />
      </nav>
    </header>
  );
};

export default Header;
