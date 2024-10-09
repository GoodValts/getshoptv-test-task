import styles from "./Services.module.scss";
import arrowIcon from "../../assets/arrow-icon.svg";
import Image from "next/image";

const servicesArr = [
  "Выручка, CTR, показы и другие показатели в реальном времени",
  "Инструменты контроля качества трафика",
  "Ежемесячные автоматические отчёты для каждого правообладателя",
];

const Services = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.header}>
        Подробные отчёты для вас и правообладателей
      </h2>
      {servicesArr.map((service) => (
        <div className={styles.serviceBlock} key={service}>
          <Image
            className={styles.arrowIcon}
            src={arrowIcon}
            alt="service-icon"
          />
          <p className={styles.serviceText}>{service}</p>
        </div>
      ))}
      <button className={styles.button}>Заказать звонок</button>
    </section>
  );
};

export default Services;
