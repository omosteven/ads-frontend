import { DefaultModal } from "components/ui";
import "./ViewProduct.scss";
import assets from "assets";

const ViewProduct = ({
  toggleModal,
  selectedProduct,
}: {
  toggleModal: () => void;
  selectedProduct: any;
}) => {
  console.log({ selectedProduct });
  const {
    // image,
    title,
    variants,
    images,
    product_type,
    tags,
    vendor,
    body_html,
    storeUrl,
  } = selectedProduct || {};
  // const firstPrice = variants?.[0]?.price;
  return (
    <DefaultModal
      hideButton={storeUrl ? false : true}
      isOpen
      onClose={toggleModal}
      buttonText="View On Our Store"
      onButtonClick={() => storeUrl && window.open(storeUrl, "_blank")}
    >
      <div className="view-product">
        {/* <img
          src={image?.src || assets.images.dummyImage1}
          className="main-img"
          alt="Product"
        /> */}
        <h4>{title}</h4>
        {/* <h5>Other Product Images</h5> */}
        <div className="other-img__container">
          {variants?.map?.(
            ({ title, price, product_id }: any, index: number) => {
              const currentImage = images?.find(
                (image: any) => image?.product_id === product_id
              );
              return (
                <div key={index}>
                  <img
                    className="other-img"
                    src={currentImage?.src || assets.images.dummyImage1}
                    alt={title}
                  />
                  {price && <b>${price}</b>}
                  <h6>{title}</h6>
                </div>
              );
            }
          )}
        </div>
        <h4>Product Details</h4>
        <p>
          #{product_type}
          {tags ? `, ${tags}` : ""}
        </p>
        <p>
          <b>Sold By</b>: {vendor}
        </p>
        {body_html && (
          <>
            <b>Description</b>
            <p dangerouslySetInnerHTML={{ __html: body_html }} />
          </>
        )}
      </div>
    </DefaultModal>
  );
};

export default ViewProduct;
