import { Button } from "components/ui";
import "./Hero.scss";
import assets from "assets";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__content">
        <h1>Browse Across Multiple Stores & Purchase Your Items Here.</h1>
        <Button text="Check Our Products" />
      </div>
      <div className="hero__image">
        <img src={assets.images.dummyImage2} alt="Hero" />
      </div>
    </section>
  );
};

export default Hero;
