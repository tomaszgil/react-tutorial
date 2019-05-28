import './App.css';

// TODO 1.3. Import React.
// TODO 1.4. Create App class that extends React's Component class. Remember to export the component class
// TODO      after declaring it in order to be able to import it and use it in other files (use export default App).
// TODO 1.5. Component should have a field to store the data fetched from API.
// TODO 1.6. Initialize the state of the component to have a single variable that indicates whether the data has been already fetched or not.
// TODO 1.7. Create a method that will fetch a pokemon array from this URL:
// TODO      https://api.mlab.com/api/1/databases/pokedex/collections/pokemons?apiKey=RZxUI6ohr3E8hmBGY6HDPlRWpXmVhzgh

// Hint. You can use the new fetch API. This is how you do that:
//   fetch(dataURL)
//     .then(blob => blob.json())
//     .then(data => {
//       // data can be processed here
//     })
//     .catch(err => console.error(err));

// TODO      Single pokemon should have id, name, image link, type (take the first one from array with pokemon's types)
// TODO      and boolean information whether it is collected or not (initialize it with false, we will deal with it later).
// TODO 1.8. Invoke this method as soon as the component is mounted onto the page.
// TODO 1.9. We want this component to render a div with a class of app, inside of which we want to have Logo.
// TODO      You can import that component from src/Logo/Logo.js file.
