"use client";

import styles from "./Form.module.scss";

const Form = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.header}>Заполните форму</h2>
      <form className={styles.form} onSubmit={() => console.log("submit")}>
        <textarea
          className={styles.question}
          placeholder="Напишите свой вопрос"
        ></textarea>
        <input
          className={styles.input}
          placeholder="Введите e-mail"
          type="email"
        />
        <p className={styles.error}></p>
        <input className={styles.checkbox} type="checkbox" />
        <label className={styles.label}>
          Я ознакомлен(а) с <a>политикой конфиденциальности</a> и согласен(на)
          на обработку <a>персональных данных</a>.
        </label>
        <button className={styles.button} type="submit">
          Заказать звонок
        </button>
      </form>
    </section>
  );
};

export default Form;
