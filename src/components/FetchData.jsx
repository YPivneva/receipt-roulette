import React, {useState, useEffect, useCallback} from 'react';
import RecipeCard from './RecipeCard';
import FilterPanel from './FilterPanel';

function FetchData({ recipes }){
    const [filteredItems, setFilteredItems] = useState(recipes || []);
    const [category, setCategory] = useState("");
    const [maxTime, setMaxTime] = useState(""); 

    useEffect(()=>{
        const filtered = recipes.filter((recipe)=>{
            return( 
                (!category || recipe.category === category) && 
                (!maxTime || recipe.time <= maxTime)
            );
         });
        setFilteredItems(filtered);
    }, [category, maxTime, recipes]);
    
    const categories = Array.from(
        new Set(recipes.map((recipe)=> recipe.category))
    )
    const clearAllFilters = useCallback(() => {
        setCategory("");
        setMaxTime("");
    }, []);

    return (
        <div className="container">
            <h2>Список рецептов</h2>
            <FilterPanel 
                categories={categories} 
                category={category} 
                setCategory={setCategory} 
                maxTime={maxTime} 
                setMaxTime={setMaxTime} 
                clearAllFilters={clearAllFilters} 
            />
            <div className="row row-cols-3">
                {filteredItems.map((recipe) => { 
                    return <RecipeCard recipe={recipe} key={recipe.id} />
                })}
                {filteredItems.length === 0 && (
                    <div>
                        <p>По заданным критериям нет рецептов</p>
                    </div>
                )}
		    </div>
        </div>
    );
}

export default FetchData;