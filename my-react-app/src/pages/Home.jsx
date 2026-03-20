import "../css/Home.css";
import Header from '../components/Header';
import Hero from '../components/Hero';
import FeatureCards from '../components/FeatureCards';


const Home = () => {
  return (
    <main id="home" className="main-content">

      <Header />
      <Hero />
      <FeatureCards />

    </main>
  );
}

export default Home;
