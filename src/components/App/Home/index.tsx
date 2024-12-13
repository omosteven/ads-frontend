import Hero from "./Hero";
import Products from "./Products";

import "./Home.scss";
import Promotions from "./Promotions";
import { useState } from "react";
import ViewProduct from "./Products/ViewProduct";

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, selectProduct] = useState<any>();

  const toggleModal = () => setShowModal((prev) => !prev);

  const handleViewProduct = (product: any) => {
    if (showModal) {
      selectProduct(null);
      setShowModal(false);
    } else {
      setShowModal(true);
      selectProduct(product);
    }
  };

  return (
    <div className="home">
      <Hero />
      <Promotions handleViewProduct={handleViewProduct} />
      <Products handleViewProduct={handleViewProduct} />

      {showModal && (
        <ViewProduct
          toggleModal={toggleModal}
          selectedProduct={selectedProduct}
        />
      )}
    </div>
  );
};

export default Home;
