# Poco-sample-frontend

This is a tutorial service to showcase making a FE with poco.

## Contents

1 - [Running the app](#running-the-app)

---

### Running the app

In order to run this application you first need to run `yarn install` this will install of the dependencies for the project. Once this is installed you should run `yarn start` which is a proxy command pointing to the the `serve` script which you can see in the `package.json` file. This command makes use of the [`gi-webapp-build-tools`](https://github.com/globality-corp/gi-webapp-build-tools) Globality package which is the generic package we use to handle build and run processes for all of our Front-end applications. Please refer to the documentation for that repo in order to learn more about it.

Once the application has started up, you will be able to view and use the application by visiting `http://localhost:5000`. The application will enter a loading state until the "main app" has loaded, at which point it will appear. This is so we don't have a blank page until the initial app and state is ready to be consumed by the user.
