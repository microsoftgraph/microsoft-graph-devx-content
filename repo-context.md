# microsoft-graph-devx-content Repository Context

> **Microsoft Graph DevX content**
>
> This repository stores content consumed by the DevX API and Graph Explorer, including sample queries, permission metadata, localized messages, and guided-tour content. Validation runs in Node.js, while GitHub Actions and Azure Pipelines validate and distribute selected content.

## Repository at a Glance

| Attribute | Value |
|-----------|-------|
| Languages | JSON content, JavaScript validation code, YAML pipeline definitions, and Markdown documentation |
| Frameworks | Jest test runner and JSON Schema validation |
| Build system | npm scripts, with `npm run test` as the validation entry point |
| Test framework | Jest, plus the `dsanders11/json-schema-validate-action` GitHub Action |
| Source control | GitHub repository `microsoftgraph/microsoft-graph-devx-content`, default branch `master` |
| Package management | npm with `package.json` and `package-lock.json` |
| Scale | A content repository organized into several independently maintained data areas, validation scripts, and CI/CD definitions |

---

## Top-Level Directory Map

```text
microsoft-graph-devx-content/
|-- .github/             # Code ownership, branch policy, and GitHub Actions workflows
|-- azure-pipelines/     # Production content publication pipeline
|-- ge-tour/             # Graph Explorer guided-tour steps
|-- messages/            # Base and localized Graph Explorer message dictionaries
|-- permissions/         # Permission descriptions and newer permission/provisioning models
|-- sample-queries/      # Base and localized Graph Explorer sample query catalogs
|-- scripts/             # Node.js test launcher
`-- tests/               # Jest specifications, validators, and sample-query JSON Schema
```

---

## Source Code Structure

### Feature Areas

| Directory | Description |
|-----------|-------------|
| `sample-queries/` | Stores the base `sample-queries.json` catalog and locale-suffixed translations used for Graph Explorer samples. |
| `permissions/` | Stores the permission description catalog and localized variants. The `permissions/new/` subtree contains permission path mappings and deployment metadata in a different model. |
| `messages/` | Stores the base `GE.json` message dictionary and locale-suffixed translations handed to Graph Explorer. |
| `ge-tour/` | Stores the structured guided-tour steps shown by Graph Explorer. |

### Other Source Directories

| Directory | Purpose |
|-----------|---------|
| `scripts/` | Starts Jest with repository-aware watch behavior and test environment variables. |
| `tests/` | Validates sample-query structure, identifiers, URLs, document links, request bodies, and permission-description formatting. |
| `.github/workflows/` | Validates changes and transfers translated messages to the Graph Explorer repository. |
| `azure-pipelines/` | Copies sample-query and permission artifacts and uploads them to production Azure Blob Storage. |

---

## Key Directory Disambiguations

- `sample-queries/` vs `messages/` - sample query records describe executable Microsoft Graph requests, while message files are UI localization dictionaries.
- `permissions/permissions-descriptions.json` vs `permissions/new/permissions.json` - the former is a list of display and consent descriptions; the latter maps permission schemes to Microsoft Graph paths and methods.
- `permissions/new/permissions.json` vs `permissions/new/provisioningInfo.json` - permission definitions and path sets are separate from environment-specific permission deployment metadata.
- `.github/workflows/validate.yml` vs `.github/workflows/validate-patch.yml` - the first performs validation for relevant changes; the second supplies successful required checks when a pull request does not touch validation-scoped paths.

---

## Component Layering Conventions

The repository follows a content pipeline rather than an application service layering model:

1. Authors update canonical or localized JSON content under the feature directories.
2. `tests/samples.schema.json` and the Jest specifications under `tests/` validate the sample-query and permission content through `scripts/test-initiator.js`.
3. `.github/workflows/validate.yml` runs schema validation and the npm test suite for relevant pull requests and pushes.
4. `azure-pipelines/publishSamples.yml` packages sample-query and permission files and uploads them to Azure Blob Storage from `master`.
5. The DevX API and Graph Explorer consume the published content, as described in `README.md`.

---

## File Naming Conventions

- The unsuffixed JSON file is the base content file, such as `GE.json`, `sample-queries.json`, or `permissions-descriptions.json`.
- Localized files append an underscore and locale code before `.json`, such as `_de-DE`, `_fr-FR`, or `_zh-CN`.
- Jest test files use the `.spec.js` suffix.
- GitHub workflow file names describe their action, such as `validate.yml` and `validate-patch.yml`.

---

## Configuration Systems

| System | Type | Key Files | Notes |
|--------|------|-----------|-------|
| Content catalogs | JSON documents | `sample-queries/sample-queries.json`, `permissions/permissions-descriptions.json`, `permissions/new/permissions.json`, `permissions/new/provisioningInfo.json`, `messages/GE.json`, `ge-tour/tour-steps.json` | Canonical and localized data consumed outside this repository. |
| Validation configuration | npm script and JSON Schema | `package.json`, `tests/samples.schema.json`, `scripts/test-initiator.js` | `npm run test` starts Jest; GitHub Actions separately validates the sample catalog against its schema. |
| GitHub automation | GitHub Actions YAML | `.github/workflows/validate.yml`, `.github/workflows/validate-patch.yml` | Path filters select validation behavior. |
| Publication automation | Azure Pipelines YAML | `azure-pipelines/publishSamples.yml` | Packages sample-query and permission content and publishes it to Azure Blob Storage. |
| Branch governance | Repository policy YAML and CODEOWNERS | `.github/policies/microsoft-graph-devx-content-branch-protection.yml`, `.github/CODEOWNERS` | Protects `master` and `dev` and assigns repository-wide ownership. |

### Config Disambiguation

- `package.json` defines the local test command and development dependencies; `tests/samples.schema.json` defines the allowed shape of sample-query content.
- GitHub Actions validate pull requests; `azure-pipelines/publishSamples.yml` handles production artifact publication.

---

## Key Entry Points

- `package.json` - maps `npm run test` to `scripts/test-initiator.js`.
- `scripts/test-initiator.js` - sets the test environment and starts Jest.
- `tests/samples.spec.js` - exercises each entry in the canonical sample-query catalog.
- `tests/permissions-descriptions.spec.js` - checks display-name formatting in the canonical permission descriptions.
- `.github/workflows/validate.yml` - CI entry point for schema and Jest validation.
- `azure-pipelines/publishSamples.yml` - production publication entry point for sample-query and permission files.

---

## Dependencies and Integrations

### Internal Dependencies

| Package/Library | Purpose | Owner |
|----------------|---------|-------|
| Jest | Runs the JavaScript validation specifications. | Declared in `package.json` `devDependencies`. |
| `node-fetch` | Sends HEAD requests when validating sample documentation links. | Declared in `package.json` `devDependencies`. |
| `tests/samples.schema.json` | Defines the structural contract for `sample-queries/sample-queries.json`. | `@microsoftgraph/msgraph-devx-api-write` |

### External Services

| Service | Purpose | Owner |
|---------|---------|-------|
| Microsoft Graph Explorer | Presents repository samples, permissions, messages, and tour content to users. | Not declared in this repository |
| DevX API | Serves repository content to clients and tooling. | Not declared in this repository |
| Azure Blob Storage | Receives published sample-query and permission artifacts from the production pipeline. | Not declared in this repository |
| Microsoft Graph documentation endpoints | Supply the `docLink` targets checked by the sample validation suite. | Not declared in this repository |

---

## Team Ownership

| Team | Primary Code Areas |
|------|--------------------|
| `@microsoftgraph/msgraph-devx-api-write` | The repository-wide `*` rule in `.github/CODEOWNERS` assigns all paths to this team. |

---

## Key Conventions for Agents

1. Preserve the sample-query property order and field rules documented in `README.md`.
2. Keep sample `humanName` values in small caps only (all lowercase), per the canonical rule in `README.md`, and use relative `/v1.0` or `/beta` request URLs matching the Jest validations.
3. Add locale-specific content by following the existing `<base-name>_<locale>.json` naming pattern.
4. Run `npm run test` for changes covered by the JavaScript validation suite; sample-query changes are also schema-validated in GitHub Actions.
5. Do not bypass pull requests for `master` or `dev`; both branches require a pull request and one approving review according to the branch policy.
6. Treat `permissions/new/` as a distinct data model from the localized permission-description files at the parent directory level.
