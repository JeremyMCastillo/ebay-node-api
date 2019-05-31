/**
 * This method is used to build the url based on
 * the type of request.
 */

const buildURL = {
  /**
   * Builds the findings(search)  URL.
   *
   * @param {Object} options
   * @param {String} data
   * @return {String} build url
   * @private
   */
  buildSearchUrl(options) {
    let baseUrl = `https://${options.baseSvcUrl}/services/search/FindingService/v1?`;
    baseUrl += `SECURITY-APPNAME=${options.clientID}`;
    baseUrl += `&OPERATION-NAME=${options.operationName}`;
    baseUrl += '&SERVICE-VERSION=1.0.0&RESPONSE-DATA-FORMAT=JSON';
    if (options.keywords) {
      baseUrl += `&keywords=${options.keywords}`;
    }
    if (options.categoryId) {
      baseUrl += `&categoryId=${options.categoryId}`;
    }
    if (options.itemFilters) {
      let i = 0;
      Object.keys(options.itemFilters).forEach((prop) => {
        baseUrl += `&itemFilter(${i}).name=${prop}`;
        baseUrl += `&itemFilter(${i}).value=${options.itemFilters[prop]}`;
        i += 1;
      });
    }
    baseUrl += options.limit ? `&paginationInput.entriesPerPage=${options.limit}` : '';
    baseUrl += options.sortOrder ? `&sortOrder=${options.sortOrder}` : '';
    baseUrl += options.globalID ? `&GLOBAL-ID=${options.globalID}` : '';
    baseUrl += options.pageNumber ? `&paginationInput.pageNumber=${options.pageNumber}` : '';
    return baseUrl;
  },

  /**
   * Builds the Shopping(open api)  URL.
   *
   * @param {Object} options
   * @return {String} url
   * @private
   */
  buildShoppingUrl(options) {
    let baseUrl = `https://${options.baseUrl}/Shopping?`;
    baseUrl += `appid=${options.clientID}`;
    baseUrl += `&callname=${options.operationName}`;
    baseUrl += '&version=967&siteid=0&responseencoding=JSON&';
    baseUrl += `${options.param}=${options.name}`;
    baseUrl += options.includeSelector ? `&IncludeSelector=${options.includeSelector}` : '';
    // base_url += "&GLOBAL-ID=" + oglobalID;
    return baseUrl;
  }
};

module.exports = buildURL;
