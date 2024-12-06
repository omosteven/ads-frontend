import assets from "assets";
import { Button } from "components/ui";

const ProductsCard = ({
  toggleModal,
  productDetails,
}: {
  toggleModal: () => void;
  productDetails?: any;
}) => {
  // id, handle, 
  const { image, title, variants } = productDetails || {};
  const firstPrice = variants?.[0]?.price;
  return (
    <div className="products__card">
      <img src={image?.src || assets.images.dummyImage1} alt="Product" />
      <h4>{title}</h4>
      <p>From ${firstPrice}</p>
      <Button text="View Product" onClick={toggleModal} />
    </div>
  );
};

export default ProductsCard;
