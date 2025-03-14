import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Foteer';
import RecipeDetail from './components/RecipeDetail';
import About from './components/About';
import FetchData from './components/FetchData';
import recipesData from './data/recipes';
import './styles.css';




const App = () => {
  const [recipes] = useState(recipesData);

  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<FetchData recipes={recipes} />} />
        <Route path="/about" element={<About />} />
        <Route path="/recipes/:id" element={<RecipeDetail recipes={recipes} />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;