import Header from "@/components/Header/Header";
import styles from "./page.module.scss";
import About from "@/components/About/About";
import Benefits from "@/components/Benefits/Benefits";
import Partners from "@/components/Partners/Partners";
import Services from "@/components/Services/Services";
import Form from "@/components/Form/Form";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <About />
        <Benefits />
        <Partners />
        <Services />
        <Form />
      </main>
    </div>
  );
}
