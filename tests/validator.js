const fetch = require('node-fetch');

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

async function validateLink (linkUrl) {
  try {
    const response = await fetch(linkUrl, { method: 'HEAD' });
    return response.ok;
  } catch (error) {
    console.error(JSON.stringify(error, null, 2));
    return false;
  }
}

function hasWhiteSpace( sampleUrl ){
  if(!sampleUrl) { return false }
  const requestUrl = sampleUrl.split('?');
  const whiteSpace = (requestUrl && requestUrl.length > 0) ? requestUrl[0].trim().indexOf(' ') : -1;
  return whiteSpace === 1;
}

exports.validateJson = validateJson;
exports.includesAllowedVersions = includesAllowedVersions;
exports.validateLink = validateLink;
exports.hasWhiteSpace = hasWhiteSpace;
