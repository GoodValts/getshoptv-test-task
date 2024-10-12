"use client";

import Header from "@/components/Header/Header";
import styles from "./page.module.scss";
import About from "@/components/About/About";
import Benefits from "@/components/Benefits/Benefits";
import Partners from "@/components/Partners/Partners";
import Services from "@/components/Services/Services";
import Form from "@/components/Form/Form";
import { useEffect, useState } from "react";

export default function Home() {
  const [visibleSections, setVisibleSections] = useState<string[]>([]);
  const [observer, setObserver] = useState<IntersectionObserver | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const appObserver = new IntersectionObserver((entries) => {
      entries.forEach((el) => {
        if (el.isIntersecting) {
          if (!visibleSections.includes(el.target.id)) {
            setVisibleSections([...visibleSections, el.target.id].sort());
          }
        } else if (visibleSections.includes(el.target.id)) {
          setVisibleSections(
            visibleSections
              .filter((visibleEl) => visibleEl !== el.target.id)
              .sort()
          );
        }
      });
    });

    setObserver(appObserver);

    return () => {
      if (observer) observer.disconnect();
    };
  }, [visibleSections, observer]);

  return (
    <div className={styles.page}>
      <Header visibleSection={visibleSections[0]} />
      <main className={styles.main}>
        <About />
        <Benefits observer={observer} />
        <Partners />
        <Services observer={observer} />
        <Form />
      </main>
    </div>
  );
}
