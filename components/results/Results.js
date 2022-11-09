import React from 'react';
import PropTypes from 'prop-types';

export default function Results({ data }) {
  return (
    <div>
      {data?.results.map((item) => {
        return (
          <div key={item.title}>
            <h1>{item.title}</h1>
          </div>
        );
      })}
    </div>

  );
}

Results.propTypes = {
  data: PropTypes.object,
};
