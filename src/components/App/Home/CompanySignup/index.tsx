import { Button, DefaultModal, Input, Textarea } from "components/ui";
import { ChangeEvent, FormEvent, useState } from "react";
import API from "utils/api/API";
import toastMessage from "utils/toast";

const CompanySignup = ({
  toggleModal,
  isOpen,
}: {
  toggleModal: Function;
  isOpen: boolean;
}) => {
  const [form, setForm] = useState({});
  const [disableBtn, setDisableBtn] = useState(false);

  const handleChange = (value: string, name: string) => {
    setForm((form) => ({
      ...form,
      [name]: value,
    }));
  };

  // https://ramified-backend.onrender.com/api/v1/joinus
  const submitForm = async () => {
    try {
      setDisableBtn(true);
      const request = await API.post(
        "https://ramified-backend.onrender.com/api/v1/join-as-company",
        form
      );
      setDisableBtn(false);
      toastMessage("Thank you for filling the form!");
      toggleModal();
    } catch (e: any) {
      setDisableBtn(false);
      toastMessage(
        e?.response?.data?.message || "Sorry, an error occurred. Try again",
        true
      );
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    submitForm();
    console.log("submit", form);
  };
  return (
    <DefaultModal
      hideButton
      isOpen={isOpen}
      onClose={toggleModal}
      title="Get A Discount From Us"
      buttonText="Register"
      onButtonClick={toggleModal}
    >
      {/* <h2>Hi, Get A Discount From Us</h2> */}
      <h2>Please Register Your Discount Offering To Customers.</h2>
      {/* <p>Kindly fill the form below and we will get in touch.</p> */}
      <form onSubmit={handleSubmit}>
        <Input
          name="organization"
          label="Organization Name"
          onChange={(e: string) => handleChange(e, "organization")}
          required
        />
        <Input
          name="email"
          label="Organization Email"
          onChange={(e: string) => handleChange(e, "email")}
          required
        />
        <Input
          name="telephone"
          label="Contact Number"
          onChange={(e: string) => handleChange(e, "telephone")}
          required
        />
        <Input
          name="fullName"
          label="Contact Person Name"
          onChange={(e: string) => handleChange(e, "fullName")}
          required
        />
        <Textarea
          name="address"
          label="Organization Address"
          onChange={(e: string) => handleChange(e, "address")}
          required
        />
        <div>
          <Button
            isLoading={disableBtn}
            className="close--button"
            text={disableBtn ? "Please wait..." : "Submit"}
            type="submit"
          />
        </div>
      </form>
    </DefaultModal>
  );
};

export default CompanySignup;
