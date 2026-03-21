import "../css/About.css";
import "../css/Hero2.css";  
import Header2 from "../components/Header2";
import Hero2 from "../components/Hero2";
import Mission from "../components/Mission";


const About = () => {
    return (
        <div id="main-content">
            <Header2 />

      <section>
        <Hero2 />
        
        <Mission />
      </section>
      </div>
    );

}
export default About;