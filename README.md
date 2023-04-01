# Restaurant Menu Ordering App

This is a small test project built with React 18, TypeScript, Redux Toolkit, Axios and CSS Modules. Some additional libraries are used for exploration purposes (e.g. MUI). The app utilizes an API to fetch data about a restaurant menu and partially builds an ordering app.

## Features

- Fetches data from a restaurant menu API
- Displays the menu items in a visually appealing way
- Allows the user to add items to their cart
- Calculates the total price of the items in the cart
- [Current design (open & enlarge)](https://user-images.githubusercontent.com/128438624/229262566-1984746c-4f20-45d8-a83d-d3fe3f70d891.png)


## Installation

1. Clone the repository
2. Run `npm install` to install the dependencies
3. Run `npm start` to start the development server

## Usage

1. Navigate to the app in your browser at `http://localhost:3000/`
2. Browse the restaurant menu items
3. Click the "Add to Cart" button for any items you would like to order
4. View your cart by clicking on the cart icon at the header
5. Remove items from your cart by clicking the "Remove" button
6. View the total price of your order at the bottom of the cart

## Technologies Used

- React 18
- TypeScript
- CSS Modules
- Axios (for fetching data from the API)
- Redux Toolkit (for state management)

## Work In Progress
- You'll notice a placeholder for fetching restaurant reviews and some partial styling. You're welcome to ignore it for now as it's still WIP.
- The order mechanism is also WIP. While the UI and state management are in good shape - there's still no checkout and/or connection to a real database. Same regarding routing and other features.

## Credits

This project was created by Hadar Shkolnik as a test of their React skills. The restaurant menu data is provided by Marlen Burger.
