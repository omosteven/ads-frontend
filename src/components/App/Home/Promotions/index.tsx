import { ErrorView, Loader } from "components/ui";
import { useState } from "react";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { dataQueryStatus } from "utils/dataQueryStatus";
import ProductsCard from "../Products/ProductsCard";
import "./Promotions.scss";
import assets from "assets";

const { LOADING, ERROR, SUCCESS } = dataQueryStatus;

const promotedProducts = [
  {
    storeUrl: "https://nftylogslabs.com/",
    image: {
      src: assets.images.product1,
    },
    title: "COUCHED DIGITAL ASSET",
    images: [
      {
        product_id: "1",
        src: assets.images.product1,
      },
      {
        product_id: "2",
        src: assets.images.product2,
      },
      {
        product_id: "3",
        src: assets.images.product3,
      },
    ],
    variants: [
      {
        title: "Couched Digital Asset",
        price: "",
        product_id: "1",
      },
      {
        title: "Couched Digital Asset",
        price: "",
        product_id: "2",
      },
      {
        title: "Couched Digital Asset",
        price: "",
        product_id: "3",
      },
    ],
    product_type: "Digital Asset",
    tags: [],
    vendor: "NFTLogsLab",
    body_html: `Corporate Cutting-Edge Innovation Avoiding Costly Shut-down: We Innovate With Broken Conductor Protection Systems.`,
  },
  {
    storeUrl: "https://nftylogslabs.com/",
    image: {
      src: assets.images.product4,
    },
    title: "SHIRT DIGITAL ASSET",
    images: [
      {
        src: assets.images.product4,
        product_id: "1",
      },
      {
        src: assets.images.product5,
        product_id: "2",
      },
    ],
    variants: [
      {
        title: "Digital Shirt",
        price: "",
        product_id: "1",
      },
      {
        title: "Happy Birthday To You",
        price: "",
        product_id: "2",
      },
    ],
    product_type: "Digital Asset",
    tags: [],
    vendor: "NFTLogsLab",
    body_html: `Climate Crisis due to negative effects of GHG! Spread the “While Prompt…” A Positive Effect With A Digital Gifting`,
  },

  {
    storeUrl: "https://nftylogslabs.com/",
    image: {
      src: assets.images.product6,
    },
    title: "DIGITAL GIFT ASSET",
    images: [
      {
        src: assets.images.product6,
        product_id: "1",
      },
    ],
    variants: [
      {
        title: "Digital Cup",
        price: "",
        product_id: "1",
      },
    ],
    product_type: "Digital Asset",
    tags: [],
    vendor: "NFTLogsLab",
    body_html: `Shout Out To Everyone, CEO's and Teams, Governments Worldwide Speeding-Up Renewable Energy Transition NFTY Digital Gift Is Primed To Keep The Deep Concern For Climate Change Mirroed in Whateer We Do.`,
  },
];

const Promotions = ({
  handleViewProduct,
}: {
  handleViewProduct: (product: any) => void;
}) => {
  // const [products, setProducts] = useState([]);
  const [status, setStatus] = useState(SUCCESS);

  // const getProducts = async () => {
  //   setStatus(LOADING);
  //   try {
  //     const result = await API.get(
  //       "https://ramified-backend.onrender.com/api/v1/shopify-products"
  //     );
  //     setProducts(result.data);
  //     console.log(result.data);
  //     setStatus(SUCCESS);
  //   } catch (e) {
  //     setStatus(ERROR);
  //   }
  // };

  // useEffect(() => {
  //   getProducts();
  // }, []);

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
            {promotedProducts?.map?.((productDetails, key) => (
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
