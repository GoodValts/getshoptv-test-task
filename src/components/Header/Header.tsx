"use client";

import { useState } from "react";
import styles from "./Header.module.scss";

export const navArr: {
  name: string;
  link: string;
}[] = [
  { name: "Преимущества", link: "advantages" },
  { name: "Как работаем", link: "process" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>Logo</div>
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            {navArr.map((el) => (
              <li className={styles.navItem} key={el.link}>
                <a href={`#${el.link}`}>{el.name}</a>
              </li>
            ))}
          </ul>
          <button
            className={styles.burger}
            onClick={() => (isOpen ? setIsOpen(false) : setIsOpen(true))}
          >
            {Array.from({ length: 3 }).map((_, i) => (
              <span key={i} className={`${styles.burgerLine}`}></span>
            ))}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
