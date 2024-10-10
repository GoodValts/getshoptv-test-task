import styles from "./BenefitElement.module.scss";
import Image from "next/image";
import arrowIcon from "../../../assets/arrow-icon.svg";

const BenefitElement = ({
  header: header,
  text: text,
}: {
  header: string;
  text: string;
}) => {
  return (
    <div className={styles.element}>
      <div className={styles.arrow}>
        <Image
          className={styles.arrowIcon}
          src={arrowIcon}
          alt="benefit-icon"
        />
      </div>
      <h3 className={styles.header}>{header}</h3>
      <p className={styles.text}>{text}</p>
    </div>
  );
};

export default BenefitElement;
