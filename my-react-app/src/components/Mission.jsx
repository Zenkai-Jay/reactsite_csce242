import "../css/Mission.css"
import Fork from "../images/Fork embracing Earth with green leaves.png"

const Mission = () => {
  return (
    <section className="mission-section">
      <div className="mission-text">
        <h1>Our Mission</h1>
        <h2>
          At Jay’s Food Wrld, our mission is to make home cooking approachable,
          inspiring, and enjoyable for everyone. We curate recipes from around
          the world and break them down into simple, easy-to-follow steps so
          anyone can cook with confidence.
        </h2>
      </div>

      <div className="mission-image">
        <img
          src={Fork}
          alt="Mission"
        />
      </div>
    </section>
  );
}

export default Mission;