/**
 * Returns the data provided by the SWAPI API
 *
 * type: 'list' or 'detail' for pagination or detail view
 * resource: people, planets, films, species, vehicles, starships
 * idOrPage: If you want to get a specific resource, you can pass the id
 * searchValue(optional): If you want to search for a specific resource, you can pass the search value
 *
 * @param {string} type - detail or list
 * @param {string} resource - The name of the resource to fetch
 * @param {string} idOrPage - The id of the resource to fetch
 * @param {string} [searchValue] - The search value to fetch
  *
 * @returns {object} data
 */
export async function fetchSwapi(type, resource, idOrPage, searchValue) {
  if (searchValue) {
    if (!(type || resource || searchValue)) {
      console.error("You must provide a type, resource and idOrPage");
      return false;
    }
  } else {
    if (!(type || resource || idOrPage)) {
      console.error("You must provide a type, resource and searchValue");
      return false;
    }
  }

  //define data to fetch
  const urlBase = `https://swapi.py4e.com/api/`;
  let urlDetail = ``;

  if (searchValue) {
    urlDetail = `${resource}/?search=${searchValue}`;
  } else if (type === "list") {
    urlDetail = `${resource}/?page=${idOrPage}`;
  } else if (type === "detail") {
    urlDetail = `${resource}/${idOrPage}`;
  }

  //process data
  const response = await fetch(urlBase + urlDetail);
  const data = await response.json();

  return data;
}
