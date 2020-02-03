# MoiTweets - Extract all public Tweets for a given Twitter screen name

## Table of Contents

* [Overview](#overview)
* [Running MoiTweets](#running-moitweets)
* [Dependencies](#dependencies)
* [Change Log](#change-log)
* [Contributing](#contributing)
* [Authors](#authors)
* [License](#license)

## Overview

Given a Twitter user name MoiTweets generates a local file containing a JSON
representation of all available public Tweets for that individual. More 
information about the contents of this file can be found on the 
[Twitter Developer site](https://developer.twitter.com/en/docs/tweets/timelines/api-reference/get-statuses-home_timeline). 

## Running MoiTweets

Since MoiTweets has both a frontend and a server component, both must be 
started in order for the application to operate correctly.

### Starting the Client Locally

From a command line run the following:
```
cd client
npm run start
```

The client can be accessed from your browser at `https://localhost:3000`

### Starting the Server Locally

From a command line run the following:
```
cd server
npm run start
```

The server listens at `https://localhost:3001`

### Environment Variables

Environment variables are used to guard application secrets like the Twitter
API keys. These are stored in the `.env` file in `/server` and are accessed
using the `dotenv` library.

Environment variables are made available to the
application code via `process.env.<variable-name>`. For example, the
Twitter API key is accessed in the code by referencing
`process.env.TWITTER_API_KEY`.

Remember that even though this keeps secure tokens like client id's and secrets
out of application code it does not make them secure.

| Environment Variable | Description       | Example Setting |
|:---------------------|:------------------|:----------------|
| TWITTER_API_KEY      | API key from the Twitter App dashboard | `TWITTER_API_KEY=fG#Saa^&vWW1SLOpuuj0uX2G`
| TWITTER_API_SECRET   | API secret from the Twitter App dashboard | `TWITTER_API_SECRET=A8H3RNL.35UAJD26JEOKJMNDAD0.UDNLADMEMCI2UCNH5UF48KDMB3DD5NW` |

## Dependencies

MoiTweets is built on top of the following libraries. For a complete list of 
dependencies consult the `package.json` file in the `client` and `server`
directories in the app repo.

| App Component | Dependency | Usage |
|:--------------|:-----------|:------|
| client        | @material-ui           | Material UI UI/UX|
|               | file-saver             | HTML5 saveAs() FileSaver implementation |
|               | react                  | Frontend Library |
|               | react-scripts          | React app setup (Create-React-App) |
| server        | dotenv                 | Load environment variables from `.env` file | 
|               | express                | HTTP server |
|               | netlify-lambda         | Netlify deployement |
|               | request                | Simplified HTTP request client |
|               | request-promise-native | Shell supporting ES6 promises for `request` |

## Change Log

For more information see [Change Log](https://github.com/chingu-x/moitweets/blob/development/docs/CHANGELOG.md)

## Contributing

See [Contributing](https://github.com/chingu-x/moitweets/blob/development/docs/CONTRIBUTING.md)
and our [Collaborator Guide](https://github.com/chingu-x/moitweets/blob/development/docs/COLLABORATOR_GUIDE.md).

## Authors

Developers on this project can be found on the [Contributors](https://github.com/chingu-x/moitweets/graphs/contributors) page of this repo.

## License

[GPL-3.0](https://tldrlegal.com/license/gnu-general-public-license-v3-(gpl-3))
