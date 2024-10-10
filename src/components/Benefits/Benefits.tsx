import styles from "./Benefits.module.scss";
import Image from "next/image";
import benefitsImage from "../../assets/benefits-image.svg";
import BenefitElement from "./BenefitElement/BenefitElement";

const Benefits = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.header}>
          Баланс между выручкой и удовлетворённостью пользователей
        </h2>
        <div className={styles.content}>
          <BenefitElement
            header={`Частотность под${"\u00A0"}контролем`}
            text={`Чтобы не ронять NPS\nи не увеличивать отток пользователей`}
          />
          <div className={styles.imageBlock}>
            <div className={styles.imagePoint}></div>
            <div className={styles.benefitsImageBlock}>
              <Image
                className={styles.benefitsImage}
                src={benefitsImage}
                alt="benefits-img"
              />
            </div>
            <div className={styles.imagePoint}></div>
            <div className={styles.imageLine}></div>
          </div>
          <BenefitElement
            header="Максимальная выручка"
            text="За счёт заполенения всех рекламных мест по высокой цене"
          />
        </div>
      </div>
    </section>
  );
};

export default Benefits;
