import React from "react";
import PropTypes from "prop-types";
import { useRouter } from "next/router";
import Card from "../card/Card";

/**
 * Results component render the given response from the api
 * pass the data to render the results.
 *
 * The component automatically identify the type of the resource
 * and will select the right title.
 *
 * @param {Object} apiResponse - The response from the api call
 */
export default function Results({ data }) {
  const router = useRouter();
  const name = router.query.resources;

  // List of posible resources
  // and the name in the response to retrieve the title
  const resourceOptions = {
    people: { title: "name" },
    films: { title: "title" },
    starships: { title: "name" },
    vehicles: { title: "name" },
    species: { title: "name" },
    planets: { title: "name" },
  };

  function getIdFromUrl(url) {
    url = url.match(/\d+/)[0];
    return url;
  }

  return (
    <div className="grid grid-cols-2 gap-4 p-6 bg-graybg">
      {data?.results.map((item) => {
        return (
          <Card
            title={item[resourceOptions[name].title]}
            icon={name}
            url={`/detail/${name}/${getIdFromUrl(item.url)}`}
            key={item[resourceOptions[name].title]}
          />
        );
      })}
    </div>
  );
}

Results.propTypes = {
  data: PropTypes.object,
};
