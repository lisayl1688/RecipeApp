import { useEffect, useState } from "react";
import supabaseClient from "../lib/supabaseClient";


type recipe = { id: string; name: string; description: string; servings: Number; instructions: string; imageURL: string; rating: Number ;created_at: Date}

const Recipes = () => {
    const [recipes, setRecipes] = useState<recipe[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>('');

    useEffect(()=> {
        const fetchRecipes = async () => {
            let selectQuery = supabaseClient.from('recipes').select('*');

            if(searchTerm){
                selectQuery = selectQuery.ilike('name', `%${searchTerm}%`)
            }
            const result = await selectQuery;
            
            if(result.error){
                console.log(result.error);
                setRecipes([]); 
            }else {
                
                setRecipes(result.data)
                
            }
        };
        fetchRecipes();
    },[searchTerm])

    return ( 
        
        <div className="recipes-container">
            <label>
                <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Suche nach Titel"
                />
            </label>

            <main className="recipe-list-container">
                <ul className="recipe-list">
                {!recipes && <p>Loading...</p>}
                {recipes &&
                    recipes.length > 0 &&
                    recipes.map((recipe) => (
                    <li key={recipe.id} className={`recipe-list-item`}>
                        <img src={recipe.imageURL} alt="" />
                        <p>{recipe.name}</p>
                        {/* <strong>{recipe.description}</strong> */}
                        <p>{recipe.instructions}</p>
                        <p>{Number(recipe.rating)}</p>
                        {/* <p>{new Date(recipe.created_at).toLocaleDateString()}</p> */}
                    </li>
                    ))}
                </ul>
            </main>

        </div>
     );
}
 
export default Recipes;