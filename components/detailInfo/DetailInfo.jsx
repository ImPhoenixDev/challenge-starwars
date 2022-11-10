import React from "react";
import PropTypes from "prop-types";

/**
 * Component to show specific info of a resource
 * for each resource there is a specific structure
 *
 * @param {Object} data - Data to render fetched from the API
 * @param {String} resources - Name of the resource
 */
export default function DetailInfo({ data, resource }) {
  // select a data structure to render depending on the resource
  return detailStructures[resource](data);
}

const unk = "Unknown";

/**
 * Here your can define the structure of the data to render
 * for each resource type and pass it to the component
 */
const detailStructures = {
  people: (data) => (
    <div className="detail-info text-greentxt w-2/3 m-auto flex flex-col">
      <div className="detail-info__value my-4">
        Height: {data.height ?? unk} cm
      </div>
      <div className="detail-info__value my-4">
        Weight: {data.mass ?? unk} kg
      </div>
      <div className="detail-info__value my-4">
        Gender: {data.gender ?? unk}
      </div>
    </div>
  ),
  films: (data) => (
    <div className="detail-info text-greentxt w-2/3 m-auto flex flex-col">
    <div className="detail-info__value my-4">Director: {data.director ?? unk}</div>
    <div className="detail-info__value my-4">Producer: {data.producer ?? unk}</div>
    <div className="detail-info__value my-4">Release date: {data.release_date ?? unk}</div>
    <div className="detail-info__value my-4">Opening crawl: {data.opening_crawl ?? unk}</div>
    </div>
  ),
  starships: (data) => (
    <div className="detail-info text-greentxt w-2/3 m-auto flex flex-col">
    <div className="detail-info__value my-4">Model: {data.model ?? unk}</div>
    <div className="detail-info__value my-4">Manufacturer: {data.manufacturer ?? unk}</div>
    <div className="detail-info__value my-4">Passengers: {data.passengers ?? unk}</div>
    </div>
  ),
  vehicles: (data) => (
    <div className="detail-info text-greentxt w-2/3 m-auto flex flex-col">
    <div className="detail-info__value my-4">Model: {data.model ?? unk}</div>
    <div className="detail-info__value my-4">Manufacturer: {data.manufacturer ?? unk}</div>
    <div className="detail-info__value my-4">Passengers: {data.passengers ?? unk}</div>
    <div className="detail-info__value my-4">Class: {data.vehicle_class ?? unk}</div>
    </div>
  ),
  species: (data) => (
    <div className="detail-info text-greentxt w-2/3 m-auto flex flex-col">
    <div className="detail-info__value my-4">Classification: {data.classification ?? unk}</div>
    <div className="detail-info__value my-4">Designation: {data.designation ?? unk}</div>
    <div className="detail-info__value my-4">Average height: {data.average_height ?? unk}</div>
    <div className="detail-info__value my-4">Language: {data.language ?? unk}</div>
    </div>
  ),
  planets: (data) => (
    <div className="detail-info text-greentxt w-2/3 m-auto flex flex-col">
    <div className="detail-info__value my-4">Diameter: {data.classification ?? unk}</div>
    <div className="detail-info__value my-4">Rotation period: {data.rotation_period ?? unk}</div>
    <div className="detail-info__value my-4">Terrain: {data.terrain ?? unk}</div>
    <div className="detail-info__value my-4">Gravity: {data.gravity ?? unk}</div>
    </div>
  ),
};

DetailInfo.propTypes = {
  data: PropTypes.object.isRequired,
  resource: PropTypes.string.isRequired,
};
