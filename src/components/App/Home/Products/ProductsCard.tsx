import assets from "assets";
import { Button } from "components/ui";

const ProductsCard = ({ toggleModal }: { toggleModal: () => void }) => {
  return (
    <div className="products__card">
      <img src={assets.images.dummyImage1} alt="Product" />
      <h4>Flower Vase</h4>
      <p>$20,000 | London, England</p>
      <Button text="View Product" onClick={toggleModal} />
    </div>
  );
};

export default ProductsCard;
