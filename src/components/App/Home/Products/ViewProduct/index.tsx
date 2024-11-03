import { DefaultModal } from "components/ui";
import "./ViewProduct.scss";

const ViewProduct = ({ toggleModal }: { toggleModal: () => void }) => {
  return (
    <DefaultModal isOpen onClose={toggleModal}>
      <div className="view-product">
        <p>Hello World</p>
      </div>
    </DefaultModal>
  );
};

export default ViewProduct;
