import assets from "assets";
import { Button } from "components/ui";

const ProductsCard = ({
  productDetails,
  handleViewProduct,
}: {
  productDetails?: any;
  handleViewProduct?: (product: any) => void;
}) => {
  // id, handle,
  const { image, title, variants, vendor } = productDetails || {};
  const firstPrice = variants?.[0]?.price;
  return (
    <div className="products__card">
      <img src={image?.src || assets.images.dummyImage1} alt="Product" />
      <h4>{title}</h4>
      {firstPrice && <p>From ${firstPrice}</p>}
      {vendor && !firstPrice && <p>{vendor}</p>}
      <Button
        text="View Product"
        onClick={() => handleViewProduct?.(productDetails)}
      />
    </div>
  );
};

export default ProductsCard;
