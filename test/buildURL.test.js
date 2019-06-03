const { expect } = require('chai');
require('chai').should();
require('../src/index');
const buildURL = require('../src/buildURL');

describe('test building url methods', () => {
  it('test search url', () => {
    const expectedSearchUrl = 'https://svcs.ebay.com/services/search/FindingService/v1?SECURITY-APPNAME=testID&OPERATION-NAME=findItemsByKeywords&SERVICE-VERSION=1.0.0&RESPONSE-DATA-FORMAT=JSON&keywords=iphone&paginationInput.entriesPerPage=6&GLOBAL-ID=EBAY-US';
    const options = {
      keywords: 'iphone',
      operationName: 'findItemsByKeywords',
      clientID: 'testID',
      limit: 6,
      globalID: 'EBAY-US',
      baseSvcUrl: 'svcs.ebay.com'
    };
    expect(buildURL.buildSearchUrl(options)).to.be.equal(expectedSearchUrl);
  });

  it('test Shopping url without selector', () => {
    const expectedSearchUrl = 'https://open.api.ebay.com/Shopping?appid=testID&callname=demoShoppingName&version=967&siteid=0&responseencoding=JSON&keywords=iphone';
    const options = {
      name: 'iphone',
      operationName: 'demoShoppingName',
      param: 'keywords',
      clientID: 'testID',
      baseUrl: 'open.api.ebay.com'
    };
    expect(buildURL.buildShoppingUrl(options)).to.be.equal(expectedSearchUrl);
  });

  it('test Shopping url including selector', () => {
    const expectedSearchUrl = 'https://open.api.ebay.com/Shopping?appid=testID&callname=demoShoppingName&version=967&siteid=0&responseencoding=JSON&keywords=iphone&IncludeSelector=true';
    const options = {
      name: 'iphone',
      operationName: 'demoShoppingName',
      param: 'keywords',
      clientID: 'testID',
      includeSelector: true,
      baseUrl: 'open.api.ebay.com'
    };
    expect(buildURL.buildShoppingUrl(options)).to.be.equal(expectedSearchUrl);
  });
});
