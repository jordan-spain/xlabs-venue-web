# Venue Web

The front end portion of the tech test. Displays venues based on the Leeds beer quest. 

**Note: this expects the appropriate API to be running at https://localhost:5001**

## Running the application

### Dependencies

This application requires node and yarn for you to build and run it.

### How to start the application

Navigate to the root of the project directory and run `yarn`. This will install all client dependencies. 
Once all client dependencies are installed, run `yarn start`. This will start a local development server and the website can be accessed at `localhost:3000`.

## Running the tests

This application uses Cypress as the testing tool. It requires the application to be running locally. Once the above steps have been completed, you can run `yarn cy:open` to open Cypress in interactive mode and run the `home.spec.ts` file. Alternatively, if you just wish to run the tests in the terminal, you can run `yarn cy:run`.
