import "../css/TeamCards.css";
import Jesurun from "../images/AboutMePhoto.jpg";
import Emily from "../images/EmilyStack.JPG";
import David from "../images/Confident smile in a modern setting.png";


const TeamCards = () => {
    return (
         <main id="content2">
                    <h1>Meet the Team</h1>

                    

                    <section class="links">
                <article class="card">
                    <img src={Jesurun} alt="Jesurun 'Jay' Marshall"/>
                    <div class="card-body">
                    <h3>Jesurun "Jay" Marshall</h3>
                    <p>
                        Founder
                    </p>
                    </div>
                </article>

                <article class="card">
                    <img src={Emily} alt="Emily Stack"/>
                    <div class="card-body">
                    <h3>Emily Stack</h3>
                    <p>
                        Photographer & Styling
                    </p>
                    </div>
                </article>

                <article class="card">
                    <img src={David} alt="David Taylor"/>
                    <div class="card-body">
                    <h3>David Taylor</h3>
                    <p>
                        Community & Product 
                    </p>
                    </div>
                </article>
                </section>

                </main>

    );
}

export default TeamCards; 