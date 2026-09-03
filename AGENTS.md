# AGENTS.md

## Build & Test

See `CONTRIBUTING.md` for setup, test, and verification commands.

## Environment Constraints

See `CONTRIBUTING.md` for toolchain and runtime requirements.

## Operational Context

Before answering questions or making changes, read:

- `repo-context.md` - Repository structure, content flow, configuration, dependencies, and ownership.
- `CONTRIBUTING.md` - Setup, validation, contribution workflow, and common pitfalls.
- `README.md` - Canonical sample-query and permission authoring requirements.

This repository publishes content rather than running an application service. Validation and publication are separate: `.github/workflows/validate.yml` runs schema and Jest checks, while `azure-pipelines/publishSamples.yml` publishes selected content from `master`.

## Safety Guardrails

> **WARNING:** Production publication and cross-repository handoff are destructive or externally visible operations. Always get explicit user approval before:
> - Running or changing the production publication behavior in `azure-pipelines/publishSamples.yml`.
> - Changing protected-branch, required-check, credential, or secret handling.

### Rules

- Never force push, run `git reset --hard`, or rewrite shared branch history.
- Never deploy or publish content without explicit user approval.
- Never weaken validation, branch protection, review, or security controls to make a change pass.
- Keep edits scoped to the requested content area; avoid unrelated reformatting of large JSON catalogs.
- Treat `permissions/new/` as a separate data model from `permissions/permissions-descriptions.json`.

## Secrets Management

### Rules for AI Agents

- Never inline secrets, tokens, passwords, connection strings, certificate material, or secret values.
- Never commit `.env`, credential, key, certificate, or token files.
- Preserve the existing `${{ secrets.NAME }}` reference pattern in GitHub Actions.
- Do not print, retrieve, rotate, or replace repository secrets without explicit user approval.

## PR Workflow

When creating pull requests, read and follow `.github/pull_request_template.md`. Complete the description, testing, and checklist sections. Mark a section N/A when it does not apply rather than removing it.

## Test Selection

Jest 29.3.1 is the test framework declared in `package.json`. Keep `--no-watch` in local targeted commands so the repository test launcher terminates.

- Run one test file by path: `npm run test -- --no-watch --runTestsByPath tests/permissions-descriptions.spec.js`
- Run one named test in that file: `npm run test -- --no-watch --runTestsByPath tests/permissions-descriptions.spec.js --testNamePattern "^Permissions descriptions consistency TenantGovernance-Invitation[.]ReadWrite[.]All: adminConsentDisplayName should not have trailing spaces$"`
- For another test, replace the quoted regular expression with its full Jest test name. Include the enclosing `describe` names when they are needed to select exactly one generated test.
