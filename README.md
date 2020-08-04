# microsoft-graph-devx-content
Content used by the DevX API to enhance clients and tooling. At the moment it has: 
- Permissions
- Samples

This will also be used by the localization team to add translation files, and by feature teams to modify, add, or update samples. 

## Contributing
### 1. Sample Queries

### Pre-requisites:
1. Download and Install Git to your machine https://git-scm.com/downloads
1. Download and Install VS Code to your machine https://code.visualstudio.com/download

To add sample queries follow these steps:
1. Clone this repo (*microsoft-graph-devx-content*) in your local machine.
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
1. Commit the changes to your branch 
1. Create a PR and add Bettirose Ngugi and/or Irvine Sunday as the reviewer(s).

Once the PR is reviewed and merged, the changes will appear on Graph Explorer in 2 working days.

### Using Command Line or PowerShell:

### 1. Clone the repo
In your command line or shell, paste this command to clone this repo: <br/>
`git clone https://github.com/microsoftgraph/microsoft-graph-devx-content.git microsoft-graph-devx-content
cd microsoft-graph-devx-content/sample-queries
`

### 2. Open the sample-queries.json file
To open the sample-queries.json file, paste in this command: <br/>
`code -n sample-queries.json
` <br/>

Alternatively, you can open the directory where the file is located by pasting in this command: <br/>
`start .
`

### 3. Open the Git command utility
If your machine's OS/CPU is x64, paste in this command: <br/>
`start "" "%PROGRAMFILES%\Git\bin\sh.exe" --login
`
else, if x86, paste in this command: <br/>
`start "" "%SYSTEMDRIVE%\Program Files (x86)\Git\bin\sh.exe"
`

### 4. Create your local branch
Your branch name has to be of the format: {your-intial}/{purpose-of-change}.
Replace the text within the curly braces (inclusive of the curly braces). <br/>
Then in the new Git command line window, paste in this command to create and checkout your branch: <br/>
`git checkout -b {your-branch-name}
`

### 5. Update your sample query
Now you can add, update or delete your sample query in the `sample-queries.json` file that opened up in VS Code earlier.

### 6. Add, commit and push your changes back to the remote repo with the following commands
- Add the changes to you local repo: `git add sample-queries.json`
- Commit your changes: `git commit -m "{add-reason-for-update}"`
- Push your changes to the remote repo: `git push origin {your-branch-name}`

### 7. Login to GitHub
Follow the instructions to login to GitHub using your credentials.

### 8. If you get error 403
Follow the instructions specified, then run this command again:<br/>
`git push origin {your-branch-name}`

If you run into any issues, reach out to @BettiroseNgugi 
