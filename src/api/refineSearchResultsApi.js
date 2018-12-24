import delay from "./delay";

class RefineSearchResultsApi {
  static refine(refinementCriteria, unrefinedSearchResults) {
    let refinedSearchResults = unrefinedSearchResults.filter(result => result.parentArticle[refinementCriteria.field] === refinementCriteria.value);

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], refinedSearchResults));
      }, 0);
    });
  }
}
export default RefineSearchResultsApi;
