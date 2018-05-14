# React Tutorial

The purpose of this class is to get familiar with with React library and build a simple Pokedex - web application displaying pokemons that allows to perform search and filter. You’ll learn how to fetch data from external API, about the idea of building UI with independent components, using state and props to update the view and pass data.
### Get the project’s boilerplate
Clone the repository and switch to branch `step-1`.
```bash
git clone https://github.com/tomaszgil/react-tutorial.git
git checkout step-1
```
###Starting the project
Once you clone the repository install modules and run using npm.
```bash
npm install
npm start
```
Alternatively, use yarn.
```bash
npm install -g yarn
yarn
yarn start
```
You should have a development server started at localhost:3000 which has auto reload. Open the code in your preferred editor (we recommend Visual Studio Code or Webstorm).
### Got lost? Need help?
If you cannot figure out a solution at certain point, you can always go back to see the main version of the code on `master` branch or change the branch to next step (name of the branch corresponds to number of the step e.g. branch `step-4` contains completed steps 1, 2 and 3).

## 1. Create main App component
First, we need to say, where we want our main App component to render in the html. In public/index.html file we can see, that there is an element with an id of root - we want to render our entire application inside that element. Go to `src/index.js`. 

1.1. Import `App` component from `src/App/App.js`.

1.2. Render `App` inside the element with an id of `root`.

Go to `src/App/App.js` file. We need to write this component as a class component, since it will utilize React state. This component will fetch data from external API and pass it down to Search component, which we will create later.

1.3. Import React.

1.4. Create App class that extends React's Component class. Remember to export the component class after declaring it to be able to import it and use it in other files (use `export default App`).

1.5. Component should have a field to store the data fetched from API.

1.6. Initialize the state of the component to have a single variable that indicates whether the data has been already fetched or not.

1.7. Create a function that will fetch a pokemon array from this URL:
`https://api.mlab.com/api/1/databases/pokedex/collections/pokemons?apiKey=RZxUI6ohr3E8hmBGY6HDPlRWpXmVhzgh`

Hint. You can use the new Fetch API. This is how you do that:
```javascript
fetch(dataURL)
  .then(blob => blob.json()) 
  .then(data => { 
    // data can be processed here    
  }) 
  .catch(err => console.error(err));
```
Single pokemon should have id, name, image link, type (take the first one from array with pokemon's types) and boolean information whether it is collected or not (initialize it with false, we will deal with it later).

1.8. Invoke this function as soon as the component is mounted onto the page.

1.9. We want this component to render a div with a class of app, inside of which we want to have Logo component. You can import that component from `src/Logo/Logo.js` file.

## 2. Create Search component with search results
Search component will be responsible for receiving search criteria, narrowing down pokemons array according to these criteria and passing it down to another component, which will render them. First, we will implement displaying pokemons. Go to src/App/App.js.

2.1. Import Search component and render it after Logo.

2.2. Pass the variable from state and the pokemons array as props in Search component.

Go to `src/Search/Search.js`.

2.3. Let’s store pokemons array received through props in class field, as it will later serve as a starting point to any search performed. Also, we want to have pokemons array in state - here we will have results narrowed down by search criteria.

2.4. Make sure the class field that stores all pokemons is updated after pokemon data is fetched (which lifecycle method can be used here?).

2.5. For now, we need to have this component rendering a single div with SearchResults component inside of it. Let’s pass pokemons array from  Search’s state and the information, whether data has been fetched already or not to SearchResults.

Go to `src/SearchResults/SearchResults.js`.

2.6. Let’s write SearchResults component as a function, as it doesn’t need to have its own state.

2.7. From each element of pokemons array received from we need to create an actual Pokemon component.

#### Hint.
You can map over pokemon object received through props, returning Pokemon component to which you will pass all pokemon object’s fields as separate props. React will know how to deal with rendering an array of components. Remember to add a unique key property to the component, when you create lists of element.

2.8. When data is not fetched, let’s have the component return:
```html
<div className="pokemon-container-loading">
  <div className="pokemon" />
</div>
```
2.9. Otherwise, let’s return a list with a class of pokemon-container with created Pokemon components.
## 3. Create Pokemon component and handle changing collected property
First we will implement a function that will handle changing pokemon object collected property. Go to src/Search/Search.js.

3.1. Add a function taking pokemon id as a parameter and toggles the collected field of pokemon with given id.

3.2. Pass this function to SearchResults component adding next prop.

3.3. For now, change the pokemon array in component’s state after the data is fetched.

We need to pass that function down to Pokemon itself. Go to src/SearchResults/SearchResults.js.

3.4. When creating a Pokemon component add a new prop and pass the function received thought props from the parent.

Now we can focus on Pokemon component itself.

3.5. It should have a state with a variable indicating whether it’s collected or not (as we will make some styling changes based upon that).

3.6. Add a method to handle click event on the pokemon. It should toggle the collected value from the state and finally invoke the function passed thought props - pass it pokemon’s id.

3.7. Add a render method with html structure shown below:
```html
<li className="pokemon"> 
  <div className="wrapper"> 
    <div className="img-background" /> 
    <img src="https://coollink.com/" /> 
  </div> 
  <div className="information">
    <a href="#" className="pokeball" /> 
    <span className="name">Pikachu</span>
    <span>
      <span className="type">electric</span> 
      <span className="id">23</span>
    </span> 
  </div> 
</li>
```
3.8. If pokemon is collected, add an extra class of collected to the top li element.

3.9. Add a background color to .img-background element. You can use color map pokemonTypesToColors defined in _utils/Pokemon.js.

3.10. Change static strings to data received in props and attach method that handles clicking on a pokemon to a.pokeball element.
## 4. Implement search input
Go to `src/Search/Search.js`. 

4.1. Add a new class property that will store our search criteria. For now it can be a JavaScript object with a single property which will store a query string from search input.

4.2. Create a function, which will take an array of pokemons as a parameter and return a new array of pokemons, but only those which id, name or type matches the value of string query created in 1.1 (you can use filter function).

4.3. Create a function, which will take care of updating the results. For now, it should take array of all pokemons, call the function from 1.2. on it and write the result from it into the pokemon array in the state.

4.4. Last function we need to create will be responsible for updating search query in criteria and calling function updating the results. This function has to be passed to SearchInput component as a prop.

4.5. Add SearchInput component above SearchResults in render function. Remeber to pass it aformentioned function as a prop.

Now, let’s go to `src/SearchInput/SearchInput.js`. 

4.6. We want the render function to generate html of this structure:
```html
<form className="search">
  <div className="search-box"> 
    <input type="text" placeholder="Search" /> 
    <div className="icon" /> 
    <a href="#" className="clear" /> 
  </div> 
</form>
```
4.7. Implement this component according to “Single Source of Truth” idea. You can read about it here (https://reactjs.org/docs/forms.html#controlled-components). 

4.8. In the change event handler of the input remember to call passed through props with current input value.

4.9. Add a class of visible to link with clear class when value of the input is not an empty string. Also, add a click handler to that element that clear the input value and updates the results.

So far, we covered all basic ideas of React library. We prepared another two components for you to implement, so feel free to proceed further into the tutorial to repeat these ideas. We will give just a brief description of components you are about to implement, they use the concepts you should be already familiar with.
## 5. Add Menu with filtering and sorting options
5.1. Add new fields in search criteria, storing the information about sort key, direction and and filter based upon whether a pokemon is collected (you can implement filter constants from `_utils/Filters.js`).

5.2. Add functions that will handle updating new search criteria and updating search results.

5.3. Add functions that will handle filtering and sorting given array according to current search criteria. Update function responsible for updating search results. You might also add initial sorting with default criteria after fetching pokemons.

5.4. Implement Menu component to render html structure shown below:
```html
<div className="menu"> 
  <form className="categories"> 
    { customCheckboxes } 
  </form> 
  <div className="sort-by"> 
    <div className="sorting-title">Sort by</div> 
    <select className="sorting-category"> 
      <option value="id">id</option> 
      <option value="name">name</option> 
      <option value="type">type</option> 
    </select> 
    <select className="sorting-direction"> 
      <option value="ascending">low to high</option> 
      <option value="descending">high to low</option> 
    </select> 
  </div> 
</div>
```
Make sure `customCheckboxes` is an array of CustomCheckbox components based off of the array of filters from `_utils`, that we already implemented it for you. Look at the implementation, to see which props you need to pass it to display it properly.

5.5. Implement change event handler for select and click event handler for `CustomCheckbox`.
## 6. Add Filter component
6.1. To Search component add a new field in search criteria which will store array of currently chosen pokemon types. You can import types from `_utils/Filters.js` file. 

6.2. Add a function that will take care of updating this field. 

6.3. Add or modify a function to filter given array upon selected types. 

6.4. Implement Filter component to render html structure:
```html
<div className="filter">
  <div className="toggle-filter">
    <span className="filter-icon" /> 
    <span className="filter-text">Filter Pokedex</span> 
  </div>
``` 
Underneath that, show this part only is a user has clicked on the `.toggle-filter` element:
```html
  <div className="filter-menu">
    <div className="types">
      <span className="category-title">Pokemon Type</span>
      <span className="category-items"> 
      { 
        pokemonTypes.map(type => <div key={type} data-name={type} style={{backgroundColor: pokemonTypesToColors[type], border: `2px solid ${pokemonTypesToColors[type]}`}}>{type}</div>) 
      } 
      </span> 
    </div> 
  </div>
</div>
```
6.5. Add a function that will handle opening and closing the menu with filters. 

6.6. Add a click event handler to each type pill, which will add or remove corresponding type from the search criteria object and update the results.
