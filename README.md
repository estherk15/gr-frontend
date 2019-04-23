# Good Reader: The Front End

This React web app was built to help readers organize their books into three categories. Books can be found searching through Google Books API, allowing for more controlled data. Enjoy your read!

## Contents

- [Libraries & Middleware](#libraries--middleware)
- [Installation](#installation)
- [Future Development](#future-development)

## Libraries & Middleware

Good Reader was built using [create-react-app](https://github.com/facebook/create-react-app) and comes with the dependencies therein.

## Installation

To get started with Good Reader, fork this repository and clone it to your hard drive. CD into the folder and run ```npm install```. Once the dependencies have been installed, you can run ```npm start``` to get your app running. Your locally-hosted version of the app, like the live version, will receive information from a Ruby on Rails backend hosted on Github. For more information about how the back-end is structured, visit [this](https://github.com/estherk15/gr-backend) repository.

## Future Development

Some ideas for features to add in the future:

### Global Store

This project was a hard lesson learned on the pitfalls of prop drilling. Props were passed down multiple levels and I will have to refactor the code with Context API or Redux in order to maintain a global store.

### Pagination of Search Results

At the moment, entering a search term only results in the first 10 books. I'd like to add pagination features so that a user can see the next 10 results in the search.
