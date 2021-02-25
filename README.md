# NEXTJS TRAINING - REAL HOME

- From _Feb 17, 2021_ to _Feb 26, 2021_

## DESCRIPTION

- This document provides the requirements for Real Home Web App.

## TIMELINE

- 6 days

## TARGETS

- Build Real Home Web App with React latest version with Next.js

- Apply TypeScript to type checking

## REQUIREMENTS

- Implement UI with [Real Home PSD Template](https://www.google.com/url?q=https://pixelbuddha.net/ui-kits/real-home-psd-template-download&sa=D&source=editors&ust=1613535359358000&usg=AOvVaw3OnGs2pqiRQYVYUnZKdn52)
  - Home page
  - Property page
  - About us page
- Use Prismic for management static content (Static Generation)
- Create REST API with JSON Server (Server Side Rendering)

## ENVIRONMENT

- Linux 18.04
- Visual Studio Code
- GitLab
- Node v14.0.0

## DEPENDENCIES

- TypeScript
- JSON Server
- Prismic
- TailwindCSS

## TECHNOLOGY

- React

## CONFIGURATION

### Create React App with Next.js and TypeScript

#### Step 1: Create React App with TypeScript

- `yarn create react-app real-home --template typescript`

#### Step 2: Manual setup with Next.js

- Install next, react and react-dom in your project: `yarn add next react react-dom`
- Open package.json and add the following scripts:

```
"scripts": {
  "dev": "next dev",
  "build": "next build && next export",
  "start": "next start"
}
```

### Prismic

#### Step 1: Create an account and a repository on Prismic

- Create custom type for page (Hom Page, About Us Page, Properties Page, ...) and save
- Add content for each page
- Save and publish content

#### Step 2: Generating an access token

- Go to your repository's Settings / API & Security
- At the bottom find the section called "Generate an Access Token"
- Add an application name. This doesn't matter much, you can add something like "My Website"
- Click the "Add this application" button

#### Step 3: Set up environment variables

- On .env file add variables as below:

```
- REACT_APP_PRISMIC_TOKEN=... (your access token generated)
- REACT_APP_PRISMIC_API_ENDPOINT=... (https://{your_application_name}.cdn.prismic.io/api/v2)
```

#### Step 4: Configuration on your local

- Install : `yarn add --save @prismicio/client prismic-dom prismic-reactjs`
- Create prismic-configuration.js file
- Use Client method to query documents from the Prismic repo. You can reference to [link](https://prismic.io/docs/technologies/integrating-with-an-existing-project-javascript)

### JSON SERVER

#### Step 1: Install package

- Run command: `yarn add --save json-server`

#### Step 2: Create data

- Create db.json file with your format data
- Example:

```
{
  "posts": [
    { "id": 1, "title": "json-server", "author": "typicode" }
  ],
  "comments": [
    { "id": 1, "body": "some comment", "postId": 1 }
  ],
  "profile": { "name": "typicode" }
}
```

#### Step 3: Add port run server

- Open package.json and add the following scripts: `"server": "json-server --watch --port 8000 src/api/db.json"`
- Now you can see Posts data at http://localhost:8000/posts

## RUN PROJECT

- Clone project at [here](https://github.com/quyenhuynh-agilityio/real-home)
- Run: `yarn install`

```
  Run: `yarn server`
  The server is running at: `http://localhost:8000/`
```

```
  Run: `yarn dev`
  The app is running at: `http://localhost:3000/`
```

## AUTHOR

Quyen Huynh
