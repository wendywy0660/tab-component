This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br>

### `yarn run lint`

Runs the lint tests to identify and report on patterns found in ECMAScript/JavaScript code


### `yarn run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

### Solution

* Standard Node and React project using `create-react-app` startup kit
* Datagrid using `react-table` package
* Application consists following main things:
  * App
  * Components
    * Reusable component for tabs
    * Warrants component and Options Component with table view
    * Dropdown menu to filter data by issue type
  * Utils: basic date formatting function and util function to filter data by type
  * Styles: scss files for individual component with BEM naming
  * Test cases for each component
* I have extracted data fetch into a seperate mockFetchData file. This can be easily replaced by actual data source to get live data feed via API

### Enhancement:

* Explore another datagrid packages
* Add more tests
