import Icon from "components/ui/Icon";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="layout-footer">
      <p>Copyright {new Date().getFullYear()}</p>
      <div>
        <span>Follow Us On</span>
        <Link to="https://x.com/Combuythus" target="__blank">
          <Icon icon="twitter" />
        </Link>
        <Link to="https://instagram.com/Combuythus" target="__blank">
          <Icon icon="instagram" />
        </Link>
        <Link to="https://tiktok.com/Combuythus" target="__blank">
          <Icon icon="tiktok" />
        </Link>
      </div>
      <strong>
        Contact Us Via Email <a href="mailto:info@buythus.com">Here</a>
      </strong>
    </footer>
  );
};

export default Footer;
