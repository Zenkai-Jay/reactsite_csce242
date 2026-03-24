import "../css/About.css";
import "../css/Hero2.css";  
import Header from "../components/Header";
import Hero2 from "../components/Hero2";
import Mission from "../components/Mission";
import TeamCards from "../components/TeamCards"; 
import Footer from "../components/Footer";   


const About = () => {
    return (
        <div id="main-content">
            <Header />

      <section>
        <Hero2 />
        
        <Mission />

       

        <TeamCards />

        <Footer />
      </section>
      </div>
    );

}
export default About;