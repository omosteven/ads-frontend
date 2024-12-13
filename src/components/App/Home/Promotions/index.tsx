import { ErrorView, Loader } from "components/ui";
import { useEffect, useState } from "react";
import API from "utils/api/API";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { dataQueryStatus } from "utils/dataQueryStatus";
import ProductsCard from "../Products/ProductsCard";
import "./Promotions.scss";

const { LOADING, ERROR, SUCCESS } = dataQueryStatus;

const Promotions = ({
  handleViewProduct,
}: {
  handleViewProduct: (product: any) => void;
}) => {
  const [products, setProducts] = useState([]);
  const [status, setStatus] = useState(LOADING);

  const getProducts = async () => {
    setStatus(LOADING);
    try {
      const result = await API.get(
        "https://ramified-backend.onrender.com/api/v1/shopify-products"
      );
      setProducts(result.data);
      console.log(result.data);
      setStatus(SUCCESS);
    } catch (e) {
      setStatus(ERROR);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  const renderBasedOnStatus = () => {
    switch (status) {
      case ERROR:
        return <ErrorView />;
      case LOADING:
        return <Loader />;
      case SUCCESS:
        const settings = {
          dots: false,
          infinite: true,
          speed: 2000,
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 0,
          cssEase: "linear",
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
              },
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
              },
            },
          ],
        };
        return (
          <Slider className="promotions__listing" {...settings}>
            {products?.map?.((productDetails, key) => (
              <ProductsCard
                key={key}
                handleViewProduct={handleViewProduct}
                productDetails={productDetails}
              />
            ))}
          </Slider>
        );
      default:
        return "";
    }
  };

  return (
    <section className="promotions">
      <h3>Promoted Listing</h3>
      {renderBasedOnStatus()}
    </section>
  );
};

export default Promotions;
