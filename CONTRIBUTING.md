# Contributing

The repository already documents its content-authoring rules in `README.md`. Use those instructions as the canonical source rather than duplicating them here:

- [Adding Sample Queries](README.md#adding-sample-queries)
- [Testing of Sample Queries](README.md#testing-of-sample-queries)
- [Adding Permissions](README.md#adding-permissions)

## Quick Start

1. Complete the prerequisites and fork or clone steps in [Adding Sample Queries](README.md#adding-sample-queries).
2. Install the npm dependencies. The validation workflow uses `npm install`.
3. Make the content change using the field, naming, and ordering rules in `README.md`.
4. Run `npm run test` before opening a pull request.

Permission contributions are limited to contributors with write access. Other contributors can report missing permissions through the repository issue tracker linked from [Adding Permissions](README.md#adding-permissions).

## Returning Developer Fast Path

Pull the latest `master`, install dependencies if `package.json` or `package-lock.json` changed, make the content update, and run `npm run test`. For sample-query changes, also use the branch-specific Graph Explorer URL described in [Testing of Sample Queries](README.md#testing-of-sample-queries).

## Common Pitfalls

- Editing a localized file when the intended change belongs in the unsuffixed canonical JSON file.
- Treating `permissions/new/` as interchangeable with `permissions/permissions-descriptions.json`; they use different data models.
- Omitting the sample-query property order, lowercase `humanName` rule, relative request URL, or required documentation link described in `README.md` and checked by validation.
- Assuming no CI check is required when a change falls outside the paths watched by `validate.yml`; `validate-patch.yml` supplies the required successful status for those pull requests.
- Forgetting that sample documentation links are checked with network requests, so local test results can depend on endpoint availability.

## Contribution Workflow

1. Create a branch using the initials-and-purpose format documented in `README.md`.
2. Keep changes scoped to the relevant content area and update canonical and localized files only when the change requires both.
3. Run the applicable local validation and inspect the changed JSON for accidental formatting or unrelated content changes.
4. Push the branch and open a pull request against the appropriate protected branch.
5. Wait for validation and review. The branch policy requires pull requests, one approving review, and strict status checks for `master` and `dev`.
6. Address review feedback with additional commits. New commits dismiss stale approvals on `master`.

Repository-wide code ownership is assigned to `@microsoftgraph/msgraph-devx-api-write` through `.github/CODEOWNERS`.

## Who to Ask

Use the repository issue tracker for content gaps and questions that should be publicly tracked. For review routing, use the repository-wide CODEOWNERS team. The existing contact list for contribution issues remains in the final paragraph of `README.md`.

## Building

This is a static content repository, so it does not produce a compiled application or a separate build artifact. The Jest validation suite is the build check. The `test` script is defined in `package.json` and launches `scripts/test-initiator.js`.

For a validation run that terminates instead of entering local watch mode, run `npm run test -- --no-watch`. The `--no-watch` behavior is implemented in `scripts/test-initiator.js`. This command was validated in the current checkout with Node.js v24.14.1 and npm 11.11.0; it completed successfully with exit code 0.

In CI mode, set `CI=true` and run `npm run test`. For PowerShell, the validated form is `$env:CI='true'; npm run test`. The CI condition is defined in `scripts/test-initiator.js`, and the repository workflow runs `npm run test` in `.github/workflows/validate.yml`. The PowerShell form completed successfully with exit code 0 in the current checkout.

## Running

There is no local application service to start. Exercise a content change by running the terminating validation command in [Building](#building). For sample-query changes, use the branch-specific Graph Explorer workflow in [Testing of Sample Queries](README.md#testing-of-sample-queries) after local validation passes.
