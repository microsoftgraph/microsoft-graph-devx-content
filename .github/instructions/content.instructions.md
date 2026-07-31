---
applyTo: 'sample-queries/**,permissions/**,messages/**,ge-tour/**'
---
# Content Catalog Instructions

**When to read:** Editing Graph Explorer or DevX content catalogs.

- In `sample-queries/sample-queries.json`, keep fields in the order documented in `README.md`: `id`, `category`, `method`, `humanName`, `requestUrl`, `docLink`, `headers`, `postBody`, `tip`, then `skipTest` when applicable.
- A sample with `postBody` must also define `headers`; JSON request bodies are parsed by `tests/validator.js` unless the content type is XML.
- Keep `skipTest` false for sample queries, as required by `README.md`.
- Permission display names in `permissions/permissions-descriptions.json` must not have leading or trailing spaces or end with a period.
- Documentation links are checked with network HEAD requests, so distinguish an unavailable endpoint from a malformed catalog entry.
- Avoid unrelated catalog reformatting or reordering because these files are published for external consumers.
