import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";

import { fetchSwapi } from "../../../scripts/fetchSwapi";
import iconsNames from "../../../utils/starwars-glyphicons/iconsNames";
import DetailInfo from "../../../components/detailInfo/DetailInfo";
import { useRouter } from "next/router";

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
  const router = useRouter();

  function firstLetterToUpperCase(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  let title = "";
  if (resources !== "films") {
    title = data.name;
  } else {
    title = data.title;
  }

  return (
    <div className="flex bg-gray-800">
      <div className="flex flex-col m-auto max-w-md overflow-scroll">
        <Head>
          <title>{title}</title>
          <meta
            name="description"
            content={`Detailed description of: ${title}`}
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className="main flex flex-col bg-white min-h-max w-screen lg:max-w-md">
          <div className="main__icon m-auto mt-16 border-solid border-2 border-greentxt p-4 shadow-lg rounded-br-lg">
            <i
              className={`swg ${iconsNames[resources]} swg-6x text-greentxt hover:rotate-180 transition-all duration-500`}
            ></i>
          </div>
          <div className="main-info flex flex-col text-greentxt mb-16">
            <h1 className="main-info__title m-auto mt-16 py-8 w-2/3 text-center border-y-4 border-solid border-greentxt">
              {title}
            </h1>
            <h2 className="main-info__sub-title m-auto mt-2  text-center text-sm">
              Belongs to category: {firstLetterToUpperCase(resources)}
            </h2>
          </div>
          <div className="specific-info">
            <DetailInfo data={data} resource={resources} />
          </div>
        </main>
        <footer className="flex py-8">
          <button
            type="button"
            className="px-8 py-4 m-auto text-lime border-solid border border-lime rounded-lg hover:bg-lime hover:text-greentxt transition-all transition-500"
            onClick={() => router.back()}
          >
            Go back to category list
          </button>
        </footer>
      </div>
    </div>
  );
}

Detail.propTypes = {
  data: PropTypes.object,
  resources: PropTypes.string,
};
