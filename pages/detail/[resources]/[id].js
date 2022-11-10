import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";

import { fetchSwapi } from "../../../scripts/fetchSwapi";
import iconsNames from "../../../utils/starwars-glyphicons/iconsNames";

export async function getServerSideProps(context) {
  const { resources, id } = context.query;

  const data = await fetchSwapi("detail", resources, id);

  return {
    props: {
      data,
      resources,
    },
  };
}

/**
 * Page to show specific info of a resource
 * @param {Object} data - Data to render fetched from the API
 */
export default function Detail({ data, resources }) {
  // pass data to component specific of each resource
  console.log(data);

  function firstLetterToUpperCase(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <div className="flex bg-gray-800">
      <div className="flex flex-col m-auto max-w-md overflow-scroll">
        <Head>
          <title>{data.name ? data.name : ""}</title>
          <meta
            name="description"
            content={`Detailed description of: ${data.name}`}
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className="main bg-white min-h-max">
          <div className="icon">
            <i
              className={`swg ${iconsNames[resources]} swg-6x text-greentxt`}
            ></i>
          </div>
          <div className="main-info flex flex-col text-greentxt">
            <h1 className="title">{data.name}</h1>
            <h2 className="sub-title">
              Belongs to category: {firstLetterToUpperCase(resources)}
            </h2>
          </div>
          <div className="specific-info">
            {
              //component
            }
          </div>
        </main>
      </div>
    </div>
  );
}

Detail.propTypes = {
  data: PropTypes.object,
  resources: PropTypes.string,
};
