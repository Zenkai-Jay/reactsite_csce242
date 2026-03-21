import "../css/Home.css";
import Header from '../components/Header';
import Hero from '../components/Hero';
import FeatureCards from '../components/FeatureCards';
import TrendyRecipeCards from '../components/TrendyRecipeCards';
import Footer from '../components/Footer'; 


const Home = () => {
  return (
    <div id="home" className="main-content">

      <Header />
      <Hero />
      <FeatureCards />

      <main id="content">

        <TrendyRecipeCards />


         <main id="content">

      <Footer />

    </main>

      </main>
    </div>

   
  );
}

export default Home;
