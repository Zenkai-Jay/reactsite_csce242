import Hero3 from '../components/Hero3';
import Header from '../components/Header';
import Foods from '../components/Foods';
import Footer from '../components/Footer';
import axios from "axios";
import {useState, useEffect} from "react";

const Recipes = () => {
    const [recipes, setRecipes] = useState([]);
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

            <section>
                {recipes.map(recipe => (
                   <Foods
                    key={recipe._id}
                     _id={recipe._id}
                      title={recipe.title}
                     img_name={recipe.img_name}
                     category={recipe.category}
                     prep_time={recipe.prep_time}
                     servings={recipe.servings}
                     description={recipe.description}
                     />
                ))}
                <Footer />
            </section>
        </div>
        
    );
}

export default Recipes;