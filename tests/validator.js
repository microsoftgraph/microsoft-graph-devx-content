function includesAllowedVersions (versions, request) {
  return versions.some(version => {
    return request.toLowerCase().includes(version.toLowerCase());
  });
}
function validateJson (query, isValidJson) {
  const contentTypeHeaders = query.headers.find(header => header.name.toLowerCase().includes('content-type'));
  // xml content will not pass test
  if (contentTypeHeaders && !contentTypeHeaders.value.includes('xml')) {
    try {
      JSON.parse(query.postBody);
    } catch (error) {
      isValidJson = false;
    }
  }
  return isValidJson;
}

exports.validateJson = validateJson;
exports.includesAllowedVersions = includesAllowedVersions;
