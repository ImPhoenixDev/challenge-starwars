import React, { useEffect, useState } from "react";
import Head from "next/head";
import PropTypes from "prop-types";
import Results from "../results/Results";

import { useRouter } from "next/router";
import { fetchSwapi } from "../../scripts/fetchSwapi";
import ResourceSelector from "../resourceSelector/ResourceSelector";
import Pagination from "../pagination/Pagination";

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

  return (
    <div className="flex bg-gray-800">
      <div className="flex flex-col m-auto max-w-md overflow-scroll">
        <Head>
          <title>List of {resource}</title>
          <meta name="description" content={`List of ${resource}`} />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className="main bg-white min-h-max px-8">
          <div className="main__info flex flex-col text-greentxt p-2">
            <h1 className="text-4xl text-center mt-16">
              Welcome to starwars api challenge
            </h1>
            <small className="text-center text-lime m-auto mt-4 mb-16">May the force be with you</small>

            <p className="text-2xl my-4">
              Here you can search information from the universe of starwars
            </p>
            <p className="text-2xl my-4 font-semibold">
              Use the filters to select a category to search
            </p>
          </div>

          <ResourceSelector resource={resource} />

          <div className="main__search flex flex-col mb-16">
            <label htmlFor="search" className="text-greentxt m-auto">
              Search for a name
            </label>
            <input
              type="text"
              id="search"
              name="search"
              className="m-auto bg-white border-solid border-2 border-greentxt text-greentxt rounded-md p-2"
              onChange={(e) => {
                setSearchValue(e.target.value);
              }}
            />
          </div>
        </main>

        <Results data={responseToDisplay} />

        <Pagination
          prev={
            responseToDisplay?.previous ? responseToDisplay?.previous : false
          }
          next={responseToDisplay?.next ? responseToDisplay?.next : false}
        />
      </div>
    </div>
  );
}

List.propTypes = {
  data: PropTypes.object,
  resource: PropTypes.string,
};
