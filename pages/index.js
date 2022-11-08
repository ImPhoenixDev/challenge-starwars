import React from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import PropTypes from "prop-types";
import { fetchSwapi } from "../scripts/fetchSwapi";

export async function getServerSideProps() {
  const data = await fetchSwapi("list", "people", "1");

  return {
    props: {
      data,
    },
  };
}

export default function Home({ data }) {
  console.log(data);
  return (
    <div className={styles.container}>
      <Head>
        <title>Starwars challenge</title>
        <meta name="description" content="SWAPI front-end proyect" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {
          data?.results.map((item) => {
            return (
              <div key={item.name}>
                <h1>{item.name}</h1>
              </div>
            );
          })}
      </main>
    </div>
  );
}

Home.propTypes = {
  data: PropTypes.object,
};
