import Hero3 from '../components/Hero3';
import Header from '../components/Header';
import RecipeCards from '../components/RecipeCards';
import Footer from '../components/Footer';

const Recipes = () => {
    return(
        <div id="main-content">
            <Header />
            <Hero3 />

            <section>
                <RecipeCards />

                <Footer />
            </section>
        </div>
        
    );
}

export default Recipes;