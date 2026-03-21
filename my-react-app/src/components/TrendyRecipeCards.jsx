import "../css/RecipeCards.css";
import BurgerSliders from "../images/Burger Sliders.png";
import GarlicBread from "../images/Garlic Bread.png";
import PizzaSliders from "../images/Pizza Sliders.png";

const RecipeCards = () => {
    return (
        <>
                    <h1>Trending Recipes</h1>

                    <section className="links">
                    <article className="card">
                    <img src={BurgerSliders} alt="Burger Sliders" />
                    <div className="card-body">
                    <h3>Jay's Burger Sliders</h3>
                    <p>
                        Soft, sweet Hawaiian rolls filled with juicy, seasoned ground beef patties and melted cheese, 
                        baked together into a warm, pull-apart tray of sliders. 
                        The buttery tops turn golden in the oven while the savory beef stays tender and flavorful. 
                        Perfect for parties, game nights, or an easy crowd-pleasing dinner.
                    </p>
                    </div>
                </article>

                <article className="card">
                    <img src={GarlicBread} alt="Garlic Bread" />
                    <div className="card-body">
                    <h3>Jay's Chicken Alfredo Garlic Bread</h3>
                    <p>
                        Crispy, buttery garlic bread topped with tender, seasoned chicken and rich, creamy Alfredo sauce, then finished with melted mozzarella and Parmesan cheese. 
                        Baked until golden and bubbly, 
                        this comforting dish combines bold garlic flavor with smooth, cheesy goodness in every bite. 
                        Perfect for family dinners, parties, or whenever you want a satisfying twist on classic Alfredo.
                    </p>
                    </div>
                </article>

                <article className="card">
                    <img src={PizzaSliders} alt="Pizza Sliders" />
                    <div className="card-body">
                    <h3>Emily's Pizza Sliders</h3>
                    <p>
                        Soft, sweet Hawaiian rolls stuffed with melted mozzarella cheese and savory pepperoni, <br />
                        then brushed with a buttery garlic topping and baked until golden and bubbly. <br />
                        These pull-apart sliders are cheesy, flavorful, and perfect for parties, quick dinners, <br />
                        or an easy crowd-pleasing snack.
                    </p>
                    </div>
                </article>
                </section>
        </>
    );
};

export default RecipeCards;