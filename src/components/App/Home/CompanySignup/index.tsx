import { DefaultModal, Input, Textarea } from "components/ui";

const CompanySignup = ({
  toggleModal,
  isOpen,
}: {
  toggleModal: Function;
  isOpen: boolean;
}) => {
  return (
    <DefaultModal
      //   hideButton={}
      isOpen={isOpen}
      onClose={toggleModal}
      title="Get A Discount From Us"
      buttonText="Register"
      onButtonClick={toggleModal}
    >
      <h2>Hi, Get A Discount From Us</h2>
      <p>Kindly fill the form below and we will get in touch.</p>
      <Input name="" label="Organization Name" />
      <Input name="" label="Organization Email" />
      <Input name="" label="Organization Email" />
      <Input name="" label="Contact Person Name" />
      <Textarea name="" label="Organization Address" />
    </DefaultModal>
  );
};

export default CompanySignup;
