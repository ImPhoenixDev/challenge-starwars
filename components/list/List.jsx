import React, { useEffect, useState } from "react";
import Head from "next/head";
import PropTypes from "prop-types";
import Link from "next/link";
import Results from "../results/Results";

import { useRouter } from "next/router";
import { fetchSwapi } from "../../scripts/fetchSwapi";

/**
  * This is the component for the list page
  * here you can select a category and 
  * see the results as a list
  *
  * @param {string} data - The current selected resource data
  */
export default function List({ data }) {
  const [responseToDisplay, setResponseToDisplay] = useState(data);
  const [searchValue, setSearchValue] = useState("");

  const router = useRouter();
  const resource = router.query.resources;

  useEffect(() => {
    // If the user is searching for something
    if (searchValue !== "") {
      const type = router.query.type;
      const resource = router.query.resources;

      const fetchSearch = async () => {
        const swapiResponse = await fetchSwapi(
          type,
          resource,
          null,
          searchValue
        );
        setResponseToDisplay(swapiResponse);
      };

      fetchSearch().catch((err) => console.log(err));
    }

    // If the user changes the resource refresh the state data
    setResponseToDisplay(data);
  }, [searchValue, data]);

  const link = "w-full h-full flex flex-col items-center justify-center p-4";
  const listItemSelected = "cursor-pointer border-solid border-2 border-greentxt shadow-sm shadow-greentxt rounded-md";
  const listItem = "cursor-pointer border-solid border-2 border-lime  text-lime rounded-md";

  return (
    <div className="flex bg-gray-800 h-screen">
      <div className="m-auto max-w-md overflow-scroll">
        <Head>
          <title>Starwars challenge</title>
          <meta name="description" content="SWAPI front-end proyect" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className="main bg-white h-screen">
          <div className="main__info text-greentxt p-2">
            <h1 className="text-3xl">Welcome to starwars api challenge</h1>

            <p className="text-2xl">
              Here you can search information from the universe of starwars
            </p>
            <p className="text-2xl">
              Use the filters to select a category to search
            </p>
          </div>

          <div className="resourcesOptions text-greentxt">
            <ul className="grid grid-cols-3 grid-rows-3 gap-3 px-2">
              <li className={resource ==="people" ? listItemSelected : listItem}>
                <Link
                  href="/list/people/1"
                  className={link}
                >
                  <i className="swg swg-darthvader"></i>
                  people
                </Link>
              </li>
              <li className={resource ==="films" ? listItemSelected : listItem}>
                <Link
                  href="/list/films/1"
                  className={link}
                >
                  films
                </Link>
              </li>
              <li className={resource ==="starships" ? listItemSelected : listItem}>
                <Link
                  href="/list/starships/1"
                  className={link}
                >
                  starships
                </Link>
              </li>
              <li className={resource ==="vehicles" ? listItemSelected : listItem}>
                <Link
                  href="/list/vehicles/1"
                  className={link}
                >
                  vehicles
                </Link>
              </li>
              <li className={resource ==="species" ? listItemSelected : listItem}>
                <Link
                  href="/list/species/1"
                  className={link}
                >
                  species
                </Link>
              </li>
              <li className={resource ==="planets" ? listItemSelected : listItem}>
                <Link
                  href="/list/planets/1"
                  className={link}
                >
                  planets
                </Link>
              </li>
            </ul>
          </div>
          <label htmlFor="search">Search for a character</label>
          <input
            type="text"
            id="search"
            name="search"
            onChange={(e) => {
              setSearchValue(e.target.value);
            }}
          />
          <button>Search</button>
        </main>

        <Results data={responseToDisplay} />
      </div>
    </div>
  );
}

List.propTypes = {
  data: PropTypes.object,
  resource: PropTypes.string,
};
