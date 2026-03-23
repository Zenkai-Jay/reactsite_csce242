import "../css/RecipeCards.css";
import Pizza from "../images/Fresh Margherita pizza on display.png";
import GreekSalad from "../images/Fresh Greek salad in focus.png";
import LemonHerbChicken from "../images/Lemon herb chicken with fresh garnishes.png";
import BurgerSliders from "../images/Burger Sliders.png";
import GarlicBread from "../images/Garlic Bread.png";
import PizzaSliders from "../images/Pizza Sliders.png";


const RecipeCards = () => {
    return (

        <section className="links">
                <article class="card">
                    <img src={Pizza} alt="Fresh Margherita pizza on display" />
                    <div className="food-cards">
                    <h3><a href="pizza.html">Classic Pizza</a></h3>
                    <p>A simple yet delicious Italian pizza with fresh mozzarella, tomatoes, and basil.</p>
                    </div>
                </article>

                <article className="card">
                    <img src={GreekSalad} alt="Fresh Greek salad in focus" />
                    <div className="food-cards">
                    <h3><a href="#">Geek Salad</a></h3>
                    <p>A refreshing Mediterranean salad made with crisp cucumbers, 
                    juicy tomatoes, Kalamata olives, red onion, and feta cheese.</p>
                    </div>
                </article>


                <article className="card">
                    <img src={LemonHerbChicken} alt="Lemon Herb Chicken" />
                    <div className="food-cards">
                    <h3><a href="#">Lemon Herb Chicken</a></h3>
                    <p>Juicy chicken breasts marinated in lemon juice, garlic, 
                        and fresh herbs, then pan-seared until golden and tender.</p>
                    </div>
                </article>


                    <article className="card">
                    <img src={BurgerSliders}/>
                    <div className="food-cards">
                    <h3><a href="#">Jay's Burger Sliders</a></h3>
                    <p>
                        Soft, sweet Hawaiian rolls filled with juicy, seasoned ground beef patties and melted cheese, 
                        baked together into a warm, pull-apart tray of sliders. 
                        The buttery tops turn golden in the oven while the savory beef stays tender and flavorful. 
                        Perfect for parties, game nights, or an easy crowd-pleasing dinner.
                    </p>
                    </div>
                </article>

                <article className="card">
                    <img src={GarlicBread}/>
                    <div className="food-cards">
                   <h3><a href="#">Jay's Chicken Alfredo Garlic Bread</a></h3>
                    <p>
                        Crispy, buttery garlic bread topped with tender, seasoned chicken and rich, creamy Alfredo sauce, then finished with melted mozzarella and Parmesan cheese. 
                        Baked until golden and bubbly, 
                        this comforting dish combines bold garlic flavor with smooth, cheesy goodness in every bite. 
                        Perfect for family dinners, parties, or whenever you want a satisfying twist on classic Alfredo.
                    </p>
                    </div>
                </article>

                <article className="card">
                    <img src={PizzaSliders}/>
                    <div className="food-cards">
                    <h3><a href="#">Emily's Pizza Sliders</a></h3>
                    <p>
                        Soft, sweet Hawaiian rolls stuffed with melted mozzarella cheese and savory pepperoni, 
                        then brushed with a buttery garlic topping and baked until golden and bubbly. 
                        These pull-apart sliders are cheesy, flavorful, and perfect for parties, quick dinners, 
                        or an easy crowd-pleasing snack.
                    </p>
                    </div>
                </article>

                </section>


               
    );
}

export default RecipeCards;