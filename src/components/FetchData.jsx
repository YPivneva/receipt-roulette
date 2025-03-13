import React, {useState, useEffect} from 'react';

function FetchData({ recipes }){
    const [filteredItems, setFilteredItems] = useState(recipes);
    const [category, setСategories] = useState();
    const [time, setTime] = useState();

    const filterByTime = (category) =>{
        setFilteredItems(
            recipes.filter((recipe)=>{
                return recipe.category === category;
            })
        )
    }
    const filterByCategory = (selectedCategory) => {
        setCategories(selectedCategory);
    };
    useEffect(()=>{
        setFilteredItems(
            recipes.filter((recipe)=>{
                return( 
                    (!category || recipe.category === category) && 
                    (!recipe || 
                        (time === "TIME_30" ? recipe.time < 30 : recipe.time >= 30))
                );
             })
        )
    }, [category, time, recipes])
    const categorys = Array.from(
        new Set(recipes.map((recipe)=> recipe.category))
    )

    return (
        <div className="container">
            <h2>Список рецептов</h2>
            <select onChange={e=>filterByTime(e.target.value)} name="" id="">
                <option value="" disabled selected>
                    Тип категории
                </option>
                {categorys.map(category => {
                    return <option key={category}>{category}</option>
                })}
            </select>
            <div>
                <button 
                    className={`${time === "TIME_30"?"selected" : ""}`} 
                    onClick={()=> setTime("TIME_30")}>
                        Приготовление 30 мин
                </button>
                <button onClick={()=> setTime("TIME_30_PLUS")}>Приготовление 30+ мин</button>
            </div>
            <div className="row row-cols-3">
                {filteredItems.map((recipe) => (
                    
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
}

export default FetchData;