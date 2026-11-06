# microsoft-graph-devx-content
Content used by the DevX API to enhance clients and tooling. At the moment it has:
- Permissions
- Samples

This will also be used by the localization team to add translation files, and by feature teams to modify, add, or update samples.

See [CONTRIBUTING.md](CONTRIBUTING.md) for setup, build, test, and usage instructions.

## Contributing
## Adding Sample Queries

### Pre-requisites:
1. Download and Install Git to your machine https://git-scm.com/downloads
1. Download and Install VS Code to your machine https://code.visualstudio.com/download

To add sample queries follow these steps:
1. - If you have write access to this repo (*microsoft-graph-devx-content*), clone the repo to your local machine. You can do so using this command:

            git clone https://github.com/microsoftgraph/microsoft-graph-devx-content.git microsoft-graph-devx-content
            cd microsoft-graph-devx-content/sample-queries

   - If you don't have write access or you are a new contributor, fork your copy of the repo by clicking on the **Fork** button at the top right of this page.
   ![Image of the Fork Button](https://user-images.githubusercontent.com/40403681/213385808-b5716824-e76a-4549-9d96-cacfa2a4168d.png)
1. Navigate to the file *sample-queries.json* in the *sample-queries* folder.
1. Open the file *sample-queries.json* on your favourite editor (e.g VS Code)
1. If you are adding a new category (workload) sample (e.g. Teams, Excel), add the queries at the end of the list right before the closing square bracket **]** in the following format. However, if you are adding a sample query to an existing category, find it on the document and add the query next to the other queries in that category. <br>
GET example <br>
>      {
>       "id": "76ecc500-897d-4a5e-a15c-0f6702a43d32",
>       "category": "Extensions",
>       "method": "GET",
>       "humanName": "get available schema extensions",
>       "requestUrl": "/v1.0/schemaExtensions",
>       "docLink": "https://developer.microsoft.com/en-us/graph/docs/api-reference/v1.0/api/schemaextension_post_schemaextensions",
>        "skipTest": false
>       },

- id - generate a GUID here: https://guidgenerator.com/ <br>
- category - the workload category the sample query falls under e.g. Teams, Outlook, Extensions etc <br>
- method - request option, e.g GET, POST, PUT, PATCH, DELETE <br>
- humanName - the name users will see on Graph Explorer UI describing what the sample query does <br>
- requestUrl - the url to query the sample query on Graph API, but dont put the https://graph.microsoft.com bit of the url <br>
- docLink - link to the sample query documentation. <br>
- skipTest - this is always false for all sample queries <br>

POST Example includes headers, post body and a tip <br>
>    `{`<br>
>        `"id": "9b937d40-885d-4eb1-a36d-9b001ce63d1d",`<br>
       `"category": "OneNote",`<br>
        `"method": "POST",`<br>
        `"humanName": "create section",`<br>
        `"requestUrl": "/v1.0/me/onenote/notebooks/{notebook-id}/sections",`<br>
        `"docLink": "https://developer.microsoft.com/en-us/graph/docs/api-reference/v1.0/api/notebook_post_sections",`<br>
        `"headers": [`<br>
            `{`<br>
                `"name": "Content-type",`<br>
                `"value": "application/json"`<br>
            `}`<br>
        `],`<br>
        `"postBody": "{\r\n  \"displayName\": \"Section 1\"\r\n}",`<br>
        `"tip": "This query requires a notebook id.  To find the ID, you can run: GET https://graph.microsoft.com/v1.0/me/onenote/notebooks. ",`<br>
        `"skipTest": false<br>`
   ` },`<br>
- headers - add the headers required to run the POST query
- postBody - add the post body required to run the query
- tip - include a tip giving more information to the user on things like permissions required, and how to get an id if needed.

When done making the changes on the document,
1. Save the document on your machine
1. Create a Git branch on this repo and name it using your initials + describe the changes ie. bn/add-xyz-samples
1. Run `npm run test` to test your changes locally
1. Commit the changes to your branch
1. Create a PR (the PR is automatically updated with the relevant reviewers).

Once the PR is reviewed and merged, the changes will appear on Graph Explorer in 2 working days.

### Please note that:
1. The order of properties is as outlined below (where applicable for your sample) <br>
      ` "id": `<br>
       `"category": `<br>
      ` "method": `<br>
       `"humanName":`<br>
       `"requestUrl":`<br>
       `"docLink": `<br>
       `"headers": `<br>
      ` "postBody": `<br>
       `"tip": `<br>
       `"skipTest": `<br>
1. The `humanName` value should be in **small caps** only.
1. The `requestUrl` value should be a relative url, starting from the version, i.e. `"requestUrl": "/v1.0/me/onenote/notebooks/{notebook-id}/sections"` leave out the `https://graph.microsoft.com` part of the url.
### Using Command Line or PowerShell (After Fork/Clone):
### 1. Open the sample-queries.json file
To open the sample-queries.json file, paste in this command: <br/>
`code -n sample-queries.json
` <br/>

Alternatively, you can open the directory where the file is located by pasting in this command: <br/>
`start .
`

### 2. Open the Git command utility
If your machine's OS/CPU is x64, paste in this command: <br/>
`start "%PROGRAMFILES%\Git\bin\sh.exe" --login
`
else, if x86, paste in this command: <br/>
`start "%SYSTEMDRIVE%\Program Files (x86)\Git\bin\sh.exe"
`

### 3. Create your local branch
Your branch name has to be of the format: {your-intial}/{purpose-of-change}.
Replace the text within the curly braces (inclusive of the curly braces). <br/>
Then in the new Git command line window, paste in this command to create and checkout your branch: <br/>
`git checkout -b {your-branch-name}
`

### 4. Update your sample query
Now you can add, update or delete your sample query in the `sample-queries.json` file that opened up in VS Code earlier.

### 5. Test your changes locally
Run `npm run test` to test your changes locally before committing.

### 6. Add, commit and push your changes back to the remote repo with the following commands
- Add the changes to you local repo: `git add sample-queries.json`
- Commit your changes: `git commit -m "{add-reason-for-update}"`
- Push your changes to the remote repo: `git push origin {your-branch-name}`

### 7. Login to GitHub
Follow the instructions to login to GitHub using your credentials.

### 8. If you get error 403
Follow the instructions specified, then run this command again:<br/>
`git push origin {your-branch-name}`

## Testing of Sample Queries
Use **Custom samples** in [Graph Explorer](https://developer.microsoft.com/en-us/graph/graph-explorer) to preview sample queries and permissions from your branch or fork. The action is available only to signed-in users whose active account username ends exactly in `@microsoft.com`, case-insensitively. The account display name and profile email do not determine eligibility.

1. Commit and push your sample-query changes to your branch.
1. Open Graph Explorer and sign in with an eligible Microsoft account.
1. Open the profile menu in the header and select **Custom samples**.
1. Enter **Organization**: `microsoftgraph` for a branch in this repository, or your GitHub username or organization for a fork.
1. Enter **Branch**: the full name of your pushed branch, including any slashes, for example `gb/update-sample`.
1. Leave **DevX API URL** at the prefilled default unless you need a different trusted DevX service. A blank value uses the configured default, which falls back to `https://graph-devx-api.microsoft.com` when no valid build-time service URL is configured.
1. Select **Apply**. The settings activate only after the samples and resource trees for both Graph API versions load successfully. A loading failure leaves default samples active and displays an error in the dialog.

After a successful apply, the profile action changes to **Reset samples**. Select it to restore defaults immediately, without confirmation. Custom settings are kept in memory only; reloading the page, signing out, or changing the active account also restores defaults. Applying or resetting settings does not reload the page or change your current Graph request.

The selected service supplies samples, permissions, resource trees, code snippets, autocomplete, and collection permissions. Organization and branch values apply only to samples and permissions, including collection permissions. Service URLs must use HTTPS and must not contain credentials, a query string, or a fragment. Redirects are rejected, so use the service's final HTTPS URL.

Use only a trusted service: generating code snippets may send your current Graph request headers and body to the selected service. The Microsoft-domain menu restriction is a client-side workflow guard, not server-side authorization or protection against browser tampering. DevX caches are separated by source; saved collections and query history are preserved.

Legacy preview links using the page URL parameters `devx-api`, `org`, and `branchName` no longer select a custom source. Use the profile dialog instead.

## Adding Permissions
Contributions to permissions are limited to contributors with write access. However, issues on missing permissions can be raised as issue requests on the [issues tab](https://github.com/microsoftgraph/microsoft-graph-devx-content/issues).

### Please Note:
If applying custom samples fails, check the organization, pushed branch name, and service URL, then select **Apply** again. Default samples remain active while the dialog shows the error. Selecting **Cancel**, using the title's **Close** button, or pressing Escape dismisses the dialog without applying pending settings.

If you run into any issues, reach out to @MaggieKimani1, @irvinesunday or @thewahome.

## Documentation

| Document | Description |
|----------|-------------|
| [Repository Context](repo-context.md) | Repository structure, content areas, configuration, dependencies, integrations, and conventions. |
| [Contributing Guide](CONTRIBUTING.md) | Setup, validation, and contribution workflow. |
| [Agent Guidance](AGENTS.md) | Repository-wide guidance and safety rules for AI agents. |
| [Code of Conduct](CODE_OF_CONDUCT.md) | Community standards and conduct resources. |
| [Pull Request Template](.github/pull_request_template.md) | Required pull request description, testing details, and checklist. |
| [CI Workflow Instructions](.github/instructions/ci-workflows.instructions.md) | Scoped guidance for GitHub Actions workflow changes. |
| [Content Catalog Instructions](.github/instructions/content.instructions.md) | Scoped guidance for content catalog changes. |
| [Test Instructions](.github/instructions/tests.instructions.md) | Scoped guidance for validation and test changes. |
