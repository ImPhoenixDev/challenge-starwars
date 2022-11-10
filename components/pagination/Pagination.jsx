import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import { useRouter } from "next/router";

/**
 * Pagination renders the pagination buttons
 * pass the
 */
export default function Pagination({ next, prev }) {
  const router = useRouter();

  if (next) {
    next = next.split("?page=")[1];
    next = `${router.asPath.split(/\/([0-9])/)[0]}/${next}`;
  }

  if (prev) {
    prev = prev.split("?page=")[1];
    prev = `${router.asPath.split(/\/([0-9])/)[0]}/${prev}`;
  }

  return (
    <div className="pagination flex justify-evenly h-16">
      {prev && (
        <div className="patination__prev flex">
          <Link href={prev} className="h-4 m-auto">
            <i className="swg swg-decals-4 swg-1x rotate-180"></i>
            <span className="ml-2">Previous</span>
          </Link>
        </div>
      )}

      {next && (
        <div className="pagination__next flex">
          <Link href={next} className="h-4 m-auto">
            <span className="mr-2">Next</span>
            <i className="swg swg-decals-4 swg-1x"></i>
          </Link>
        </div>
      )}
    </div>
  );
}

Pagination.propTypes = {
  next: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  prev: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
};
