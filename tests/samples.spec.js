const samples = require('../sample-queries/sample-queries.json');

describe('sample query should', function () {
  it('have more than one sample', function () {
    const sampleQueries = samples.SampleQueries;
    expect(sampleQueries.length).toBeGreaterThan(1);
  });
});

const sampleQueries = samples.SampleQueries;
for (const query of sampleQueries) {
  describe(`${query.humanName}:`, function () {
    it('doclink should exist', function () {
      const docLinkExists = !!query.docLink;
      expect(docLinkExists).toEqual(true);
    });

    it('humanName first word should be lower cased', function () {
      const firstWord = query.humanName.split(' ')[0];
      const lowerCasedHumanName = firstWord.toLowerCase();
      expect(lowerCasedHumanName).toEqual(firstWord);
    });

    if (query.postBody) {
      it(`postbody should be a valid json string`, function () {
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
}