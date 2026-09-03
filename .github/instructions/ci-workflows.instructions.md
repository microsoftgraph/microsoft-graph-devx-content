---
applyTo: '.github/workflows/*.yml'
---
# GitHub Actions Instructions

**When to read:** Editing GitHub Actions workflows.

- When changing validation scope, update the same path set in `validate.yml` `paths` and `validate-patch.yml` `paths-ignore`: the canonical sample catalog, `scripts/**`, `tests/**`, and both npm manifest files.
- Preserve the `validate-json-schema` and `test` job names in both validation workflows because the patch workflow supplies their stand-in results.
- Keep the Jest `test` job dependent on `validate-json-schema` in `.github/workflows/validate.yml`.
- Get explicit approval before changing triggers, required-check behavior, permissions, secrets, or cross-repository handoff destinations.
