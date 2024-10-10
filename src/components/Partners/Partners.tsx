import styles from "./Partners.module.scss";
import clickWaveLogo from "../../assets/clickwave-logo.svg";
import novasphereLogo from "../../assets/novasphere-logo.svg";
import zyphronixLogo from "../../assets/zyphronix-logo.svg";
import Image from "next/image";

const partnersArr = [clickWaveLogo, zyphronixLogo, novasphereLogo];

const Partners = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.header}>Наши партнёры по монетизации</h2>
        <div className={styles.partnersBlock}>
          {partnersArr.map((partnerLogo, index) => (
            <Image
              className={`${styles.partner} ${index}`}
              src={partnerLogo}
              alt={"partner-logo"}
              key={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
