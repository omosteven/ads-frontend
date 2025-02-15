import { Button } from "components/ui";
import "./Hero.scss";

const Hero = () => {
  const goToProducts = () => {
    document.getElementById("products")?.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <section className="hero">
      <div className="hero__content">
        <h1>Browse Across Multiple Stores & Purchase Your Items Here.</h1>
        <Button text="Check Our Products" onClick={goToProducts} />
      </div>
      <div className="hero__image">
        <div>
          <video src={"video/ads-video.mp4"} autoPlay controls muted />
          {/* <img src={assets.images.dummyImage2} alt="Hero" /> */}
          <div className="hero__image__button">
            <Button
              text="Learn More >>"
              onClick={() => window.open("https://nftylogslabs.com/", "_blank")}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
