---
applyTo: 'tests/**'
---
# Test Instructions

**When to read:** Editing validation specifications, validators, or schemas under `tests/`.

- Jest specifications use the `.spec.js` suffix and load canonical catalogs from `sample-queries/sample-queries.json` or `permissions/permissions-descriptions.json`.
- Keep sample structure rules aligned between `tests/samples.schema.json` and `tests/samples.spec.js`.
- `tests/samples.spec.js` validates documentation links with network HEAD requests through `tests/validator.js`; distinguish endpoint failures from assertion failures.
- Run `npm run test` after test or validator changes.
- Do not weaken GUID, URL, request-body, display-name, or documentation-link checks merely to accept invalid content.
