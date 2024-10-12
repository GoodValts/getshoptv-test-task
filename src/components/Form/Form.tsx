"use client";

import Image from "next/image";
import styles from "./Form.module.scss";
import tickMarkIcon from "../../assets/tickmark-icon.svg";
import { useState } from "react";

const MockNavigation = (
  e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  pageName: string,
) => {
  e.preventDefault();
  alert(`${pageName} page link`);
};

const Form = () => {
  const [error, setError] = useState("");

  const validateInput = (string: string) => {
    if (!string.trim().length) {
      setError("Пустой адрес почты");
      return;
    }

    if (string.split("@").length !== 2) {
      setError("Адрес почты должен содержать 1 символ '@'");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(string)) {
      setError("Неправильно указана почта");
      return;
    }

    setError("");
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.header}>Заполните форму</h2>
        <form className={styles.form} onSubmit={() => console.log("submit")}>
          <textarea
            className={styles.question}
            placeholder="Напишите свой вопрос"
            required={true}
          ></textarea>
          <input
            className={
              error ? `${styles.input} ${styles.input_error}` : styles.input
            }
            placeholder="Введите e-mail"
            type="email"
            required={true}
            onChange={(event) => validateInput(event.target.value)}
          />
          <p className={styles.error}>{error}</p>
          <div className={styles.checkboxBlock}>
            <input
              className={styles.checkboxInput}
              type="checkbox"
              id="policy"
            />
            <label className={styles.checkbox} htmlFor="policy">
              <Image
                className={styles.checkbox_tick}
                src={tickMarkIcon}
                alt="tickmark-icon"
              />
            </label>
            <label className={styles.label} htmlFor="policy">
              Я ознакомлен(а) с{" "}
              <a
                className={styles.label_link}
                onClick={(e) => MockNavigation(e, "Private policy")}
              >
                политикой конфиденциальности
              </a>{" "}
              и согласен(на) на обработку{" "}
              <a
                className={styles.label_link}
                onClick={(e) => MockNavigation(e, "Personal data processing")}
              >
                персональных данных
              </a>
              .
            </label>
          </div>
          <button className={styles.button} type="submit">
            Отправить
          </button>
        </form>
      </div>
    </section>
  );
};

export default Form;
