import { Checkbox, DefaultModal } from "components/ui";
import "./FilterProductsModal.scss";

const categoriesList = [
  {
    label: "Electronics",
    value: "electronics",
  },
  {
    label: "Hotels",
    value: "hotels",
  },
  {
    label: "Property",
    value: "property",
  },
  {
    label: "Automobiles",
    value: "automobiles",
  },
  {
    label: "Renewable Energy Production",
    value: "renewable_energy",
  },
  {
    label: "Schools and Universities",
    value: "schools",
  },
  {
    label: "Gift Options",
    value: "gift",
  },
  {
    label: "Accessories",
    value: "accessories",
  },
  {
    label: "Furniture",
    value: "furniture",
  },
  {
    label: "Finance",
    value: "finance",
  },
  {
    label: "Leisure and Gigs",
    value: "leisure",
  },
  {
    label: "Food",
    value: "food",
  },
  {
    label: "Decorations",
    value: "decorations",
  },
  {
    label: "Clothings",
    value: "clothings",
  },
  {
    label: "Books",
    value: "books",
  },
  {
    label: "Various Things",
    value: "various",
  },
];

const FilterProductsModal = ({
  isOpen,
  onClose,
  updateCategories,
  categories,
  handleApply,
}: {
  isOpen: true;
  onClose: Function;
  updateCategories: (category: string) => void;
  categories: string[];
  handleApply: Function;
}) => {
  return (
    <DefaultModal
      isOpen={isOpen}
      onClose={onClose}
      buttonText="Apply Filter"
      onButtonClick={handleApply}
    >
      <div>
        <h3>Filter Products</h3>
        <div className="filter-products-modal">
          {categoriesList.map(({ label, value }, id) => (
            <Checkbox
              label={label}
              key={id}
              id={value}
              value={categories?.includes?.(value)}
              onChange={(e: any) => updateCategories(value)}
            />
          ))}
        </div>
      </div>
    </DefaultModal>
  );
};

export default FilterProductsModal;
