import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Starwars challenge</title>
        <meta name="description" content="SWAPI front-end proyect" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className="text-3xl font-bold underline">Hello world</h1>
      </main>
    </div>
  );
}
