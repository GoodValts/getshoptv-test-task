"use client";

import styles from "./Services.module.scss";
import arrowIcon from "../../assets/arrow-icon.svg";
import backgroundImage from "../../assets/services-background.png";
import Image from "next/image";
import { useEffect, useRef } from "react";

const servicesArr = [
  "Выручка, CTR, показы и другие показатели в реальном времени",
  "Инструменты контроля качества трафика",
  "Ежемесячные автоматические отчёты для каждого правообладателя",
];

const Services = ({
  observer: observer,
}: {
  observer: IntersectionObserver | null;
}) => {
  const servicesRef = useRef(null);

  useEffect(() => {
    const ref = servicesRef.current;
    if (observer && ref) observer.observe(ref);

    return () => {
      if (observer && ref) observer.unobserve(ref);
    };
  });

  return (
    <section className={styles.section} id="process" ref={servicesRef}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.header}>
            Подробные отчёты{"\u00A0"}для{"\u00A0"}вас{"\u00A0"}и
            правообладателей
          </h2>
          {servicesArr.map((service) => (
            <div className={styles.serviceBlock} key={service}>
              <div className={styles.arrow}>
                <Image
                  className={styles.arrowIcon}
                  src={arrowIcon}
                  alt="service-icon"
                />
              </div>
              <p className={styles.serviceText}>{service}.</p>
            </div>
          ))}
          <button
            className={styles.button}
            onClick={() => alert("Call button pressed")}
          >
            Заказать звонок
          </button>
        </div>
        <Image
          src={backgroundImage}
          alt="background-image"
          className={styles.backgroundImage}
          priority={false}
        ></Image>
      </div>
    </section>
  );
};

export default Services;
