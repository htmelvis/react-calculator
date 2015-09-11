# React-calculator
A basic order calculator component for ReactJS & Foxy Cart
- Install all deps by running ```npm install```
- To serve the app use ```npm start``` and navigate to 127.0.0.1:8080/webpack-dev-server/

## Change Log
- Added babel-loader and setup the sass/scss workflow
- Extracted  input type hidden into a FCInput for FoxyCart hidden values
- Added webpack-dev-server script to the package file

### Project Needs
- Validation on Secure Inputs
- Tooltips
~~- Definitive Calculator Style~~
    - Calc with features
    - Calc with table
    - Calc with both
    - Calc with none.
    - Single line Calc
- Processing Functionality (POST, GET and AJAX Request Details)
- Calculation Functionality (including tier pricing model)
~~- Provide Data for the PriceModifier Select box~~
- Hand off to the FC server
- InputList and SecureInput need to be able to validate and broadcast if they are indeed square footage or linear footage calcs
- LivePrice needs to be filtered to only show a max of 2 dec. places
- LivePrice needs to be managed to avoid duplication of amounts

