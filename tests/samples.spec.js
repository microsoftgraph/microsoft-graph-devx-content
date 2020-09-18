const samples = require('../sample-queries/sample-queries.json');

describe('sample query should', function () {
  it('have more than one sample', function () {
    const sampleQueries = samples.SampleQueries;
    expect(sampleQueries.length).toBeGreaterThan(1);
  });
});

describe('sample queries postbody', function () {
  const sampleQueries = samples.SampleQueries;
  const queries = sampleQueries.filter(sample => sample.postBody);
  for (const query of queries) {
    it(`${query.humanName}: should be a valid json string`, function () {
      let isValidJson = true;
      if (query.headers) {
        const contentTypeHeaders = query.headers.find(header => header.name.toLowerCase().includes('content-type'));
        // xml content will not pass test
        if (contentTypeHeaders && !contentTypeHeaders.value.includes('xml')) {
          try {
            JSON.parse(query.postBody);
          } catch (error) {
            isValidJson = false;
          }
        }
      }
      expect(isValidJson).toEqual(true);
    });
  }
});