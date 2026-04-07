
import "../css/RecipeCard.css";

const RecipeCard = (props) => {
    return(
            <section className="food">
                <img src={`https://demo-backend-niit.onrender.com//${props.img_name}`} alt="recipe" />
                <div className="food-description">
                    <h3>{props.title}</h3>
                </div>
            </section>
    )
};

export default RecipeCard;