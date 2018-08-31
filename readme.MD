## Setup
For now only VS code instructions.
### VS code
#### Plugins
- ESLint // Shows errors before "compiling"
- Prettier Now // Formats document to style guide

Optional:
- vscode-js-import // Auto import
- Auto Rename Tag // Renames opening and closing tag at same time
#### Settings
Because ESlint is setup to run prettier we disable prettier on save
```json
    "editor.tabSize": 2,
    "editor.formatOnSave": true,
    "[javascriptreact]": {
        "editor.formatOnSave": false
    },
    "[javascript]": {
        "editor.formatOnSave": false
    },
    "eslint.autoFixOnSave": true,
    "eslint.alwaysShowStatus": true,
```