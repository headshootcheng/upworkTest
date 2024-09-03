import React from "react";
import styles from "./SideNav.module.scss";
import classNames from "classnames";
import { navItems } from "@/data/navItems";
interface Props {
  isOpen: boolean;
  onClose: () => void;
}
const SideNav: React.FC<Props> = ({ isOpen, onClose }) => {
  return (
    <nav
      className={classNames(styles.sidenav, {
        [styles["sidenav--active"]]: isOpen,
      })}
    >
      <div className={styles["sidenav-closebtn"]} onClick={onClose}>
        &times;
      </div>
      <div className={styles["sidenav-list"]}>
        {navItems.map((item, i) => (
          <a key={i} href={"/"}>
            {item.name}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default SideNav;
