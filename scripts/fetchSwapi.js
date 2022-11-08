/**
 * Returns the data provided by the SWAPI API
 * type: 'list' or 'detail' for pagination or detail view
 * resource: people, planets, films, species, vehicles, starships
 * id (optional): If you want to get a specific resource, you can pass the id
 * page (optional): For paginated resources, pass the page number
 *
 * @param {string} type - detail or list
 * @param {string} resource - The name of the resource to fetch
 * @param {string} idOrPage - The id of the resource to fetch
 * @returns {object} data
 */
export async function fetchSwapi(type, resource, idOrPage) {
  if (!(type || resource || idOrPage)) {
    console.error("You must provide a type, resource and idOrPage");
    return false;
  }

  //define data to fetch
  const urlBase = `https://swapi.dev/api/`;
  let urlDetail = ``;

  if (type === "detail") {
    urlDetail = `${resource}/${idOrPage}`;
  } else if (type === "list") {
    urlDetail = `${resource}/?page=${idOrPage}`;
  }

  //process data
  const response = await fetch(urlBase + urlDetail);
  const data = await response.json();

  return data;
}
