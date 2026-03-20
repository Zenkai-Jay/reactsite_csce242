import "../css/Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>Welcome To My Food Wrld!</h1>
        <p>Browse my collection of carefully curated recipes from my personal cookbook!</p>
        <h2 id="btn">
          <a href="/recipes">Browse Recipes!</a>
        </h2>
      </div>
    </section>
  )
}

export default Hero;