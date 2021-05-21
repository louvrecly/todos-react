# Getting Started with Todo List

Welcome to the repository of the Todo List! This is a web application built with [React](https://reactjs.org/).
It allows you to create, edit or delete your todo items.

## Cloning the Project

You can clone the project to your local by the following command:

`git clone https://github.com/louvrecly/todos-react.git`

## Initial Set Up

### Install Required Packages

Navigate to the project folder with the command:

`cd todos-react/`

In order to start the app locally, you'll need to install `node`, `npm` and `yarn` first.

Install `node` and `npm` altogether from [here](https://www.npmjs.com/get-npm).


Install `yarn` using the following command:

`npm install --global yarn`

After that, run the following command to install all necessary node packages:

`yarn install`

You will see a `node_modules` folder and a `yarn.lock` file are created.

### Set Up Environment Variable

Open the `.env.local.example` from the root directory of the project, you'll see a list of variable to be set up.

e.g. `REACT_APP_JSON_PLACEHOLDER_API`

Create a `.env.local` file in the root directory with the following command:

`touch .env.local`

Open the `.env.local` file and add the following line to set the environment variable. Remember to save the file:

`REACT_APP_JSON_PLACEHOLDER_API=https://jsonplaceholder.typicode.com`

## Start the App Locally

Run the following command in your local terminal to start the app locally.

`yarn start`

After the app is built, it will be hosted at http://localhost:3000/todos-react.

Navigate to http://localhost:3000/todos-react in a browser to view the app.

## Terminate the App Hosting

In your terminal, press `ctrl` + `C` simultaneously to terminate the hosting of the app.

## Play with the Deployed Version on GitHub Pages

A stable version has been deployed to github pages at https://louvrecly.github.io/todos-react/.

Feel free to play with it.
