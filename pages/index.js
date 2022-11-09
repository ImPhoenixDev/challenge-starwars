import React from "react";
import PropTypes from "prop-types";
import List from "../components/list/List";
import {fetchSwapi} from "../scripts/fetchSwapi";

export async function getServerSideProps() {

  const data = await fetchSwapi("list", 'films','1' );
  return {
    props: {
      data,
      resource: 'films',
    },
  };
}

export default function Home({ data, resource }) {
  return (
    <List data={data} resource={resource} />
  );
}

Home.propTypes = {
  data: PropTypes.object,
  resource: PropTypes.string,
};
