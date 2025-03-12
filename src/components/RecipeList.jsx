import React from 'react';

const RecipeList = ({ recipes }) => {
  return (
    <div className="container">
      <h2>Список рецептов</h2>
      <div className="row row-cols-3">
        {recipes.map((recipe) => (
            <div className="card col" key={recipe.id}>
                <img className="card-img-top" src={recipe.imgDish} alt="noname"/>
                <h3>{recipe.title}</h3>
                <div className="card-body">
                    <p><b>Категория:</b> {recipe.category}</p>
                    <p><b>Время приготовления:</b> {recipe.time} мин.</p>
                    <p><b>Ингредиенты:</b> {recipe.ingredients.join(', ')}</p>
                </div>
            </div>
        ))}
      </div>
    </div>
  );
};
export default RecipeList;