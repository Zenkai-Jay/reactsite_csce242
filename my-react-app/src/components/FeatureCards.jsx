import "../css/FeatureCards.css";
import Browse from "../images/Browse.png";
import Create from "../images/Create.png";


const FeatureCards = () => {
  return (
    <section className="links">
      <article className="card">
        <img src={Browse} alt="Browse" />
        <div className="card-body">
          <h3>Browse</h3>
          <p>Find something you'll like.</p>
        </div>
      </article>

      <article className="card">
        <img src={Create} alt="Create" />
        <div className="card-body">
          <h3>Create</h3>
          <p>Once you find one, create it!</p>
        </div>
      </article>

      <article className="card">
        <img src={Browse} alt="Share" />
        <div className="card-body">
          <h3>Share</h3>
          <p>If you have a recipe you'd like to be featured, contact us!</p>
        </div>
      </article>
    </section>
  );
}

export default FeatureCards;
