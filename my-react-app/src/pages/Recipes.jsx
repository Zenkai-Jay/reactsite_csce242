import Hero3 from '../components/Hero3';
import Header from '../components/Header';
import AddFood from '../components/AddFood';
import Footer from '../components/Footer';
import "../css/Foods.css";
import axios from "axios";
import {useState, useEffect} from "react";
import RecipeCard from '../components/RecipeCard';

const Recipes = () => {
    const [recipes, setRecipes] = useState([]);
    const [showDialog, setShowDialog] = useState(false);

    const openFoodDialog = () => {
        setShowDialog(true);
    };

    const showFoodDetails = () => {
        setShowDialog(true);
        console.log("here");
    };

    const closeFoodsDialog = () => {
        setShowDialog(false);
        console.log("closed");
    };

    const addFoodToList = (food) => {
        setRecipes((recipes) => [...recipes, food]);
    };

    useEffect(() => {
        const loadRecipes = async () => {
            const response = await axios.get("https://demo-backend-niit.onrender.com/api/foods");
            setRecipes(response.data);
        };
        loadRecipes();
    }, []);

    return(
        <div id="main-content">
            <Header />
            <Hero3 />
           <>
         <button id="btn-add-food" onClick={openFoodDialog}>+</button>
        {showDialog?(<AddFood
            closeAddDialog={closeFoodsDialog}
            addFoodToList={addFoodToList}
            />):("")}


      <div id="foods" className="columns">
  {recipes.map((recipe) => (
   <RecipeCard
    key={recipe._id}
     _id={recipe._id}
     title={recipe.title}
     img_name={recipe.img_name}
     category={recipe.category}
     prep_time={recipe.prep_time}
     servings={recipe.servings}
     description={recipe.description}
     showFoodDetails={showFoodDetails}
   />
  ))}
</div>
        </>
                <Footer />
        
        </div>
        
    );
}

export default Recipes;