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
    body_html: `
    Corporate Cutting-Edge Innovation Avoiding Costly Shut-down: We Innovate With Broken Conductor Protection Systems.
    <br/>
    <br/>
    At Nftylogs, we aspire to synergize "Whatever We Do"  with GHG emissions to morph into a culture.  Our focus is directed towards enhancing the connection between human activities and climate change, while also addressing urgently the needs of climate crisis survivors worldwide.
<br/>
<br/>
In our collaborative framework, we aim to amplify the nexus of "Whatever We Do" for a reliable outcome in mitigating climate change.  Presenting a digital mode of generating awareness and historical asset class collectibles.
<br/>
<br/>
We shall move forward with a dynamic strategy that fosters cooperation among governments, corporations, and various stakeholders. While engaged in different geographical locations at any particular time T, we must recognize that some areas are experiencing the devastating consequences of greenhouse gas emissions, such as flash floods, heat waves, and extreme weather events. These phenomena are exacerbated by the prolonged trapping of infrared radiation from carbon dioxide in the atmosphere.
<br/>
<br/>
This scenario serves as a precursor to the actions required to achieve global decarbonization. Within this dynamic context, it is crucial to foster a deep sense of concern that evolves into a carbon footprint culture capable of facilitating climate change mitigation and providing relief to those impacted by climate crises globally.
<br/>
<br/>
We offer the opportunity to log and authenticate your innovations through a blockchain-based messaging system for your organization, government policies, individual accomplishments, and all sports events celebrating significant moments, as well as gifting options. Purchase your digital collectible classes, all in support of the environment.
<br/>
<br/>
What will drive our initiative? The introduction of the “While prompt…”! This concept serves as a gateway to digital categories related to innovations and “Whatever We Do,” all of which can be documented and authenticated as collectibles available on platforms, or through requests for customized NFTs. These items are showcased for purchase at:
<br/>
<a href="www.rarible.com" target="__blank">www.rarible.com</a>
<br/>
<a href="www.opensea.io" target="__blank">www.opensea.io<a/>
<br/>
<a href="www.nftylogslabs.com" target="__blank">www.nftylogslabs.com</a>
`,
  },
  {
    storeUrl: "https://nftylogslabs.com/",
    image: {
      src: assets.images.product4,
    },
    title: "COUCHED DIGITAL ASSET",
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
        title: "Digital Couch",
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
