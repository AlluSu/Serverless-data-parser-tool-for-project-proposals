| /api              | Description of the serverless backend file structure.                                                                                                                                     |
|-------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| /application      | Contains business/application logic regarding Slack messages, conversations, threads, parsing messages, parsing words, categorizing etc.                                                  |
| /controllers      | Contains two controller "classes", one for Slack and one for HubSpot. Controllers then call "service" classes which are calling the API's.                                                |
| /node_modules     | Contains node_modules.                                                                                                                                                                    |
| /routes           | Contains functions that gets called by the handlerfunction in the index.js-file. The names of the route-files correspond to the route-parameter in the url used to call the lambda-function. The equivalent of endpoints in a server-app like e.g. Express.                                  |
| /services         | Contains client and service classes for HubSpot and Slack. Client classes are used for creating a client object and setting API keys. Service classes handle the logic and calling of API's. |
| /tests            | Contains integration, service and unit tests for the whole project with some test data.                                                                                                   |
| /utils            | Contains helper functions for parsing Slack API responses and data with company names and technologies.                                                                                   |
| .eslintignore     | Files and directories which ESLint should ignore.                                                                                                                                         |
| .eslintrc.js      | ESLint configuration file for ESLint rules.                                                                                                                                               |
| index.js          | File which contains all the events which the AWS Lambda reacts to, the AWS-handler function. The function contains a switch that depending on the route-parameter in the url calls different functions from the route folder.                                                                                                                       |
| package-lock.json | Describes dependency tree                                                                                                                                                                 |
| package.json      | Contains important metadata and functional attributes.                                                                                                                                    |