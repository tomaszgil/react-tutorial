import './App.css';

// TODO Step 1:
// TODO 1.1. Import React.
// TODO 1.2. Create App class that extends React's Component class.
// TODO 1.3. Component should have a field to store the data fetched from API.
// TODO 1.4. Initialize the state of the component to have a single variable that indicates whether the data has been already fetched or not.
// TODO 1.5. Create a function that will fetch a pokemon array from this URL:
// TODO      https://api.mlab.com/api/1/databases/pokedex/collections/pokemons?apiKey=RZxUI6ohr3E8hmBGY6HDPlRWpXmVhzgh
// TODO      Remember to bind this function properly, if you plan to use any component’s properties.

// Hint. You can use the new fetch API. This is how you do that:
//   fetch(dataURL)
//     .then(blob => blob.json())
//     .then(data => {
//       // data can be processed here
//     })
//     .catch(err => console.error(err));

// TODO 1.6. Invoke this function as soon as the component is mounted onto the page.
// TODO 1.7. We want this component to render a div with a class of app, inside of which we want to have Logo component and Search component.
// TODO      Remember to import these components.
