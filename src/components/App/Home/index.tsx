import Hero from "./Hero";
import Products from "./Products";

import "./Home.scss";
import Promotions from "./Promotions";
import { useEffect, useState } from "react";
import ViewProduct from "./Products/ViewProduct";
import CompanySignup from "./CompanySignup";

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const [open, setOpen] = useState(false);

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

  useEffect(() => {
    setTimeout(() => {
      setOpen(true);
    },3000);
  }, []);

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

      <CompanySignup toggleModal={() => setOpen(false)} isOpen={open} />
    </div>
  );
};

export default Home;
