"use client";

import { useState } from "react";
import styles from "./About.module.scss";
import Image from "next/image";
import bgImage from "../../assets/about-background.png";

const additionText = {
  operators:
    "Найдите идеальный баланс выручки и удовлетворённости пользователей с платформой рекламной монетизации",
  services:
    "Дополнительные возможности обогащения данных об аудитории и монетизации",
};

const About = () => {
  const [isOperators, setIsOperators] = useState(true);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h1 className={styles.header}>
          Монетизируйте клиентскую базу, не снижая NPS
        </h1>
        <p className={styles.description}>
          Найдите идеальный баланс выручки
          <br />
          и удовлетворённости пользователей с платформой
          <br />
          рекламной монетизации
        </p>
        <button
          className={styles.callButton}
          onClick={() => alert("Call button pressed")}
        >
          Заказать звонок
        </button>
        <div className={styles.addition}>
          <h2 className={styles.additionHeader}>
            Дополнительные источники выручки для разных компаний
          </h2>
          <div className={styles.additionDetails}>
            <div className={styles.additionButtons}>
              <button
                className={
                  isOperators
                    ? `${styles.additionButton} ${styles.additionButton_active}`
                    : styles.additionButton
                }
                onClick={() => setIsOperators(true)}
              >
                Операторам
              </button>
              <button
                className={
                  isOperators
                    ? styles.additionButton
                    : `${styles.additionButton} ${styles.additionButton_active}`
                }
                onClick={() => setIsOperators(false)}
              >
                ОТТ сервисам
              </button>
            </div>
            <p className={styles.additionParagraph}>
              {isOperators ? additionText.operators : additionText.services}
            </p>
          </div>
        </div>
      </div>
      <Image
        className={styles.image}
        src={bgImage}
        alt="background-image"
        priority={true}
      />
    </section>
  );
};

export default About;
