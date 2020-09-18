const samples = require('../sample-queries/sample-queries.json');

describe('sample query should', function () {
  it('have more than one sample', function () {
    const sampleQueries = samples.SampleQueries;
    expect(sampleQueries.length).toBeGreaterThan(1);
  });
});
