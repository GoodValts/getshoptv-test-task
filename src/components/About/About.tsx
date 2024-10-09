import styles from "./About.module.scss";

const About = () => {
  return (
    <section className={styles.container}>
      <h1 className={styles.header}>
        Монетизируйте клиентскую базу, не снижая NPS
      </h1>
      <p className={styles.description}>
        Найдите идеальный баланс выручки и удовлетворённости пользователей
        с платформой рекламной монетизации
      </p>
      <button className={styles.callButton}>Заказать звонок</button>
      <div className={styles.addition}>
        <h2 className={styles.additionHeader}>
          Дополнительные источники выручки для разных компаний
        </h2>
        <div className={styles.additionDetails}>
          <button className={styles.additionButton}>Операторам</button>
          <button className={styles.additionButton}>ОТТ сервисам</button>
          <div className={styles.additionDescription}>
            <p className={styles.additionParagraph}>
              Найдите идеальный баланс выручки и удовлетворённости пользователей
              с платформой рекламной монетизации
            </p>
            <p className={styles.additionParagraph}>
              Дополнительные возможности обогащения данных об аудитории и
              монетизации
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
