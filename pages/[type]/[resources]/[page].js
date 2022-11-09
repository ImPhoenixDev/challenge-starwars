import React from "react";
import PropTypes from "prop-types";
import List from "../../../components/list/List";
import {fetchSwapi} from "../../../scripts/fetchSwapi";

export async function getServerSideProps(context) {
  const type = context.query.type;
  const resource = context.query.resources;
  const page = context.query.page;

  const data = await fetchSwapi(type, resource, page);
  return {
    props: {
      data,
    },
  };
}

export default function Index({ data }) {

  return (
      <List data={data} />
  );
}

Index.propTypes = {
  data: PropTypes.object,
  resource: PropTypes.string,
};
