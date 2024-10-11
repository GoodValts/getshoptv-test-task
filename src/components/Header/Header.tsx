"use client";

import { useEffect, useState } from "react";
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

  const changeBurgerStatus = () => {
    if (isOpen) {
      setIsOpen(false);
      return;
    }
    setIsOpen(true);
  };

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "scroll";
  }, [isOpen]);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>Logo</div>
        <nav className={styles.nav}>
          <ul
            className={
              isOpen
                ? `${styles.navList} ${styles.navList_visible}`
                : styles.navList
            }
          >
            {navArr.map((el) => (
              <li key={el.link}>
                <a className={styles.navItem} href={`#${el.link}`}>
                  {el.name}
                </a>
              </li>
            ))}
          </ul>
          <button className={styles.burger} onClick={changeBurgerStatus}>
            {Array.from({ length: 3 }).map((_, i) => (
              <span
                key={i}
                className={
                  isOpen
                    ? i === 0
                      ? `${styles.burgerLine} ${styles.burgerLineRotate}`
                      : i === 2
                        ? `${styles.burgerLine} ${styles.burgerLineRotateReverse}`
                        : styles.burgerLineHidden
                    : styles.burgerLine
                }
              ></span>
            ))}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
