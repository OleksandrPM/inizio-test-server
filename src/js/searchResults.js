import google from "buscar.io";

// Google sets pages from 0, 10 results per page by default, param is "start"
const pageIndex = 0;
// Google sets the count of results by param "num"
const resultsCount = 10;

const options = {
  page: pageIndex,
  safe: false,
  parse_ads: false,
  additional_params: {
    num: resultsCount,
  },
};

async function getSearchResults(searchString) {
  try {
    const response = await google.search(searchString, options);
    return response;
  } catch (error) {
    return error;
  }
}

export { getSearchResults };
