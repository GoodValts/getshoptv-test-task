import styles from "./Benefits.module.scss";
import Image from "next/image";
import arrowIcon from "../../assets/arrow-icon.svg";
import benefitsImage from "../../assets/benefits-image.svg";

const BenefitElement = ({
  header: header,
  text: text,
}: {
  header: string;
  text: string;
}) => {
  return (
    <div className={styles.element}>
      <Image className={styles.arrowIcon} src={arrowIcon} alt="benefit-icon" />
      <h3 className={styles.header}>{header}</h3>
      <p className={styles.text}>{text}</p>
    </div>
  );
};

const Benefits = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.header}>
        Баланс между выручкой и удовлетворённостью пользователей
      </h2>
      <div className={styles.content}>
        <BenefitElement
          header="Частотность под контролем"
          text="Чтобы не ронять NPS и не увеличивать отток пользователей"
        />
        <div className={styles.imageBlock}>
          <div className={styles.imagePoint}></div>
          <Image
            className={styles.benefitsImage}
            src={benefitsImage}
            alt="benefits-img"
          />
          <div className={styles.imagePoint}></div>
          <div className={styles.imageLine}></div>
        </div>
        <BenefitElement
          header="Максимальная выручка"
          text="За счёт заполенения всех рекламных мест по высокой цене"
        />
      </div>
    </section>
  );
};

export default Benefits;
