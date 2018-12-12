import { apiBaseUrl } from "./apiConstants";

class SearchResultsApi {
  static search(searchTerm) {
    const request = new Request(apiBaseUrl + `documents?searchPhrase=${searchTerm}`, {
    //   headers: {
    //     "Authorization": "Bearer 1234"
    // },
    method: "GET"
  });
  return fetch(request)
  .then (response => response.json())
  .then(data => data.searchResults);
  }
}
export default SearchResultsApi;  