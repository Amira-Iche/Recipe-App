import React from 'react';
import './App.css';
import { useEffect,useState } from 'react';
import Recipe from './Recipe';

function App () {
  const APP_ID = 'b7c63cff';
  const APP_KEY = 'c78ff176401d711a6081345f59a71083	';  

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState('chicken')


  useEffect(() => {
    getRecipes();
   
  }, [query]);

  const getRecipes = async () =>{
      const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
      const data = await response.json();
      setRecipes(data.hits);
    }

    const onchange = e => {
      setSearch (e.target.value)
    }
    const getSearch = e => {
      e.preventDefault();
      setQuery(search);
      setSearch('');
    }


  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text" value={search} onChange={onchange} />
        <button className="search-button btn btn-info"  type="submit" >
          Search 
        </button>
      </form>
      <div className="recipes">
      {recipes.map(recipe => (
        <Recipe 
        key={recipe.recipe.label}
        title={recipe.recipe.label} 
        calories={recipe.recipe.calories}
        image={recipe.recipe.image}
        ingredients={recipe.recipe.ingredients}
        />
      ))}
      </div>
    </div>
  )
}

export default App

