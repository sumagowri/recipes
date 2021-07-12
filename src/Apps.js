import react,{useState} from "react";
import RecipeWindow from "./components/RecipeWindow";
import "./Apps.css";

export const Apps = () => {
    const [ingredient,setIngre] = useState("");
    const [recipes,setRecipe] = useState([]);

    const YOUR_APP_ID = '656d6cce';
    const YOUR_APP_KEY = '41e5178d595cfa27cc22dc636c7cd985';

    const urll = `https://api.edamam.com/search?q=${ingredient}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`;

    const getRecipes = async () => {
        const response = await fetch(urll);
        const data = await response.json();
        // console.log(data.hits);
        setRecipe(data.hits);
    }

    const handleSubmint = (e)=>{
        e.preventDefault();
        getRecipes();
    }
    
    return(
        <div className="App">
            <h1>Search Your Recipe</h1>
            <form onSubmit={handleSubmint} className="form-control">
                <input className="input-search" 
                placeholder="Search your main ingredient" 
                type="text" value={ingredient} 
                onChange={(e) => setIngre(e.target.value)}/>
                <input type="submit" value="Search" className="btn-submit"/>
            </form>
            
            <RecipeWindow recipes = {recipes}/>
        </div>
    )
}