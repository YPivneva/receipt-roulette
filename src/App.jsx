import React, { useState } from 'react';
import RecipeList from './components/RecipeList';
// import RecipeForm from './components/RecipeForm';
import recipesData from './data/recipes';
import './styles.css';
import Footer from './components/Foteer';
import Header from './components/Header';
import FetchData from './components/FetchData';

const App = () => {
  const [recipes] = useState(recipesData);

  // const addRecipe = (newRecipe) => {
  //   setRecipes([...recipes, newRecipe]);
  // };

  return (
    <div>
      <Header />
      {/* <RecipeForm addRecipe={addRecipe} /> */}
      {/* <RecipeList recipes={recipes} /> */}
      <FetchData recipes={recipes} />
      <Footer />
    </div>
  );
};

export default App;