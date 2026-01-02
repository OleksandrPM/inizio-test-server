const apiKey = process.env.GOOGLE_API_KEY;
const searchEngineId = process.env.SEARCH_ENGINE_ID;

if (!apiKey || !searchEngineId) {
  throw new Error(
    "Google API key and Search Engine ID must be set in environment variables."
  );
}

// Google sets pages from 0, 10 results per page by default, param is "start"
const pageIndex = 0;
// Google sets the count of results by param "num"
const resultsCount = 10;

const params = new URLSearchParams({
  key: apiKey,
  cx: searchEngineId,
  num: resultsCount, // number of results
  start: pageIndex,
});

async function getSearchResults(searchString) {
  params.set("q", searchString);

  const url = `https://www.googleapis.com/customsearch/v1?${params.toString()}`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Google API error: ${response.status}`);
  }

  return response.json();
}

export { getSearchResults };
