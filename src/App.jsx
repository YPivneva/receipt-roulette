import React, { useState } from 'react';
import RecipeList from './components/RecipeList';
// import RecipeForm from './components/RecipeForm';
import recipesData from './data/recipes';
import './styles.css';

const App = () => {
  const [recipes] = useState(recipesData);

  // const addRecipe = (newRecipe) => {
  //   setRecipes([...recipes, newRecipe]);
  // };

  return (
    <div>
      <h1>Кулинарная книга</h1>
      {/* <RecipeForm addRecipe={addRecipe} /> */}
      <RecipeList recipes={recipes} />
    </div>
  );
};

export default App;