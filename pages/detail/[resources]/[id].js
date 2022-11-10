import React from "react";
import PropTypes from "prop-types";
import { fetchSwapi } from "../../../scripts/fetchSwapi";

export async function getServerSideProps(context) {
  const { resources, id } = context.query;

  const data = await fetchSwapi("detail", resources, id);

  return {
    props: {
      data,
    },
  };
}

/**
  * Page to show specific info of a resource 
  * @param {Object} data - Data to render fetched from the API
  */
export default function Detail({ data }) {

  // pass data to component specific of each resource
  console.log(data);
  return (
    <div>
      <div className="icon">icon</div>
      <div className="main-info">
        <h1 className="title">Title</h1>
        <h2 className="sub-title"></h2>
      </div>
      <div className="specific-info">
        {
          //component
        }
      </div>
    </div>
  );
}

Detail.propTypes = {
  data: PropTypes.string.isRequired,
};
