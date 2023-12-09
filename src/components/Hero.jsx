import heroImg from "../assets/hero.svg";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga ipsam
            ipsum inventore tempore necessitatibus repellendus cupiditate
            provident itaque blanditiis ab.
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
