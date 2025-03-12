import React from 'react';

const DetailRecipe = ({ recipes }) => {
  return (
    <div className="container">
{recipes.map((recipe) => (
    <div key={recipe.id}>
        <h2>{recipe.title}</h2>
        <img className="img-detail" src={recipe.imgDish} alt="noname"/>
        <p><b>Ингредиенты:</b> {recipe.ingredients.join(', ')}</p>
        <p><b>Приготовление:</b> {recipe.instructions}</p>
    </div>
 ))}
    </div>
  );
};
export default DetailRecipe;