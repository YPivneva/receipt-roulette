import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import RecipeDetail from './components/RecipeDetail';
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
    // <div>
    //   <Header />
      // <RecipeForm addRecipe={addRecipe} /> 
      // <RecipeList recipes={recipes} /> 
    //   <FetchData recipes={recipes} />
    //   <Footer />
    // </div>
    <div>
       <Header />
    <Router>
      <Routes>
        <Route path="/" element={<RecipeList recipes={recipes} />} />
        <Route path="/recipes/:id" element={<RecipeDetail recipes={recipes} />} />
      </Routes>
    </Router>
    <Footer />
     </div>
  );
};

export default App;