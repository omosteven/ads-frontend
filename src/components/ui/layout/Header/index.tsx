// import Button from "components/ui/Button";
import { Link } from "react-router-dom";

const Header = () => {
  const goToProducts = () => {
    document.getElementById("products")?.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <header className="layout-header">
      {/* <div> */}
      <li>
        <Link to={"/"}>Home</Link>
      </li>
      <li>
        <Link to={"/about-us"}>About Us</Link>
      </li>
      <li>
        <Link to={"/"} onClick={goToProducts}>
          Our Products
        </Link>
      </li>
      {/* </div> */}
      {/* <div>
        <Button text="My Cart" />
      </div> */}
    </header>
  );
};

export default Header;
