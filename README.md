# Jac AI (Front-end)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.2.


## First time

After cloning this repo locally run the following commands to make sure all the packages required for this app have been installed.

Run `npm --version` to check for the npm version. The acceptable version is `10.5.0`

Run `npm install` to install all the required packages. In the event when you run into some errors, remove `package-lock.json` file and the existing `node_modules` folder and then run `npm install --legacy-peer-deps`.


## Development server

Run `nx serve` or `npm run start` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `npm run test` to execute the unit tests via [Karma](https://karma-runner.github.io).

<!-- ## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities. -->

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


## Creating Libraries

Utilising the capabilities of Nx, we can create libraries or journeys to be used throughout our application under `src/libs` folder. Libraries created under libs can be of the following types:

- Journeys : The set of components/pages related to a major feature. Each journey consists of `feature` and `shell` folders. `feature` contains all the ui components and services necessary to provide the view and `shell` contains all the child routes to be used for inner navigations within the journey.

-- To create journey run the following commands :

`npx nx g @nx/angular:library  --name <name-of-journey>-shell  --directory src/libs/<name-of-journey>/shell  --importPath @ja/<name-of-journey>/shell  --standalone false  --style scss  --projectNameAndRootFormat as-provided`

`npx nx g @nx/angular:library  --name <name-of-journey>-feature  --directory src/libs/<name-of-journey>/feature  --importPath @ja/<name-of-journey>/feature  --standalone false --style scss  --projectNameAndRootFormat as-provided`

** Replace the `<name-of-journey>` with your journey name.
Eg:

npx nx g @nx/angular:library  --name expense-journey-shell  --directory src/libs/expense-journey/shell  --importPath @ja/expense-journey/shell  --standalone false  --style scss  --projectNameAndRootFormat as-provided



- Shared : The set of commponents/pages that are used throughout the application, including the journeys. Eg: UI Components

-- To create shared libraries run the following command :

`npx nx g @nx/angular:library --name <name-of-journey>  --directory src/libs/shared/<name-of-journey> --importPath @ja/<name-of-journey> --standalone false --style scss`

** Replace the `<name-of-journey>` with your journey name.
Eg:

npx nx g @nx/angular:library --name ja-ui  --directory src/libs/shared/ja-ui --importPath @ja/ja-ui --standalone false --style scss




## Styling and Theming

Refer these resources: 

https://www.youtube.com/watch?v=ZHYifGWG1Lo

https://primeng.org/configuration