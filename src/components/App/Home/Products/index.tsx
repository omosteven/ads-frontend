import { useEffect, useState } from "react";

import ProductsCard from "./ProductsCard";

import "./Products.scss";
import API from "utils/api/API";
import { dataQueryStatus } from "utils/dataQueryStatus";
import { ErrorView, Loader, Search } from "components/ui";

const { LOADING, ERROR, SUCCESS } = dataQueryStatus;

const Products = ({
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
        return (
          <div className="products__listing">
            {products?.map?.((productDetails, key) => (
              <ProductsCard
                key={key}
                handleViewProduct={handleViewProduct}
                productDetails={productDetails}
              />
            ))}
          </div>
        );
      default:
        return "";
    }
  };

  return (
    <>
      <section className="products" id="products">
        <div className="products__header">
          <div>
            <h3>Our Recent Listing</h3>
            <p>Go through our recent listing and place your order.</p>
          </div>
          <Search placeholder="Search through our listing." />
        </div>
        {renderBasedOnStatus()}
      </section>
    </>
  );
};

export default Products;
