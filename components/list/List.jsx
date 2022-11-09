import React, {useState} from "react";
import Head from "next/head";
import PropTypes from "prop-types";
import Link from "next/link";
import Results from "../results/Results";

import { useRouter } from "next/router";

export default function List({ data }) {
  const [responseToDisplay] = useState(data);

  const router = useRouter();
  const resource  = router.query.resources;

  return (
    <div>
      <Head>
        <title>Starwars challenge</title>
        <meta name="description" content="SWAPI front-end proyect" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="h-screen w-screen bg-blue-300">
        <h1 className="title">Starwars api challenge</h1>
        {resource && <h2 className="subtitle">Resource: {resource}</h2>}
        <div className="resourcesOptions">
          <ul>
            <li>
              <Link href="/list/people/1">people</Link>
            </li>
            <li>
              <Link href="/list/films/1">films</Link>
            </li>
            <li>
              <Link href="/list/starships/1">starships</Link>
            </li>
            <li>
              <Link href="/list/vehicles/1">vehicles</Link>
            </li>
            <li>
              <Link href="/list/species/1">species</Link>
            </li>
            <li>
              <Link href="/list/planets/1">planets</Link>
            </li>
            <li>vehicles</li>
            <li>starships</li>
          </ul>
        </div>

        <label htmlFor="search">Search for a character</label>
        <input type="text" id="search" name="search" />
        <button>Search</button>
      </main>

      <section className="h-full w-screen bg-red-300">
        <Results data={responseToDisplay} />
      </section>
    </div>
  );
}

List.propTypes = {
  data: PropTypes.object,
  resource: PropTypes.string,
};
