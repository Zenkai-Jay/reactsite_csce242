import Hero3 from '../components/Hero3';
import Header from '../components/Header';
import AddFood from '../components/AddFood';
import Footer from '../components/Footer';
import "../css/Foods.css";
import axios from "axios";
import { useState, useEffect } from "react";
import RecipeCard from '../components/RecipeCard';

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [showDialog, setShowDialog] = useState(false);

  const openFoodDialog = () => {
    setShowDialog(true);
  };

  const closeFoodsDialog = () => {
    setShowDialog(false);
  };

  const addFoodToList = (food) => {
    setRecipes((prevRecipes) => [...prevRecipes, food]);
  };

  const handleDelete = (id) => {
    setRecipes((prevRecipes) => prevRecipes.filter((recipe) => recipe._id !== id));
  };

  const handleEdit = (updatedFood) => {
    setRecipes((prevRecipes) =>
      prevRecipes.map((recipe) =>
        recipe._id === updatedFood._id ? updatedFood : recipe
      )
    );
  };

  useEffect(() => {
    const loadRecipes = async () => {
      const response = await axios.get("http://localhost:3001/api/foods");
      setRecipes(response.data);
    };

    loadRecipes();
  }, []);

  return (
    <div id="main-content">
      <Header />
      <Hero3 />

      <>
        <button id="btn-add-food" onClick={openFoodDialog}>+</button>

        {showDialog ? (
          <AddFood
            closeAddDialog={closeFoodsDialog}
            addFoodToList={addFoodToList}
          />
        ) : null}

        <div id="foods" className="columns">
          {recipes.map((recipe) => (
            <RecipeCard
              key={recipe._id}
              {...recipe}
              onDelete={handleDelete}
              onEdit={handleEdit}
            />
          ))}
        </div>
      </>

      <Footer />
    </div>
  );
};

export default Recipes;