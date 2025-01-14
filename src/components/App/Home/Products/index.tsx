import { useEffect, useState } from "react";

import ProductsCard from "./ProductsCard";

import "./Products.scss";
import API from "utils/api/API";
import { dataQueryStatus } from "utils/dataQueryStatus";
import { EmptyView, ErrorView, Icon, Loader, Search } from "components/ui";
import FilterProductsModal from "./FilterProductsModal";

const { LOADING, ERROR, SUCCESS, NULLMODE } = dataQueryStatus;

const Products = ({
  handleViewProduct,
}: {
  handleViewProduct: (product: any) => void;
}) => {
  const [products, setProducts] = useState([]);
  const [status, setStatus] = useState(LOADING);
  const [openFilter, setOpenFilter] = useState(false);
  const [categories, setCategories] = useState<string[]>([]);
  const [search, setSearch] = useState("");

  const updateCategories = (category: string) => {
    setCategories((prevCategories) => {
      if (!prevCategories?.includes?.(category)) {
        return [...prevCategories, category];
      } else {
        return prevCategories.filter((cc) => cc !== category);
      }
    });
  };

  console.log({ categories });

  const toggleOpenFilter = () => setOpenFilter(!openFilter);

  const getProducts = async () => {
    setStatus(LOADING);
    try {
      const result = await API.get(
        "https://ramified-backend.onrender.com/api/v1/shopify-products",
        {
          params: {
            categories,
            search,
          },
        }
      );
      const resultsData = result?.data;
      setProducts(resultsData || []);
      console.log(result.data);
      setStatus(resultsData?.length > 0 ? SUCCESS : NULLMODE);
    } catch (e) {
      setStatus(ERROR);
    }
  };

  useEffect(() => {
    getProducts();
    // eslint-disable-next-line
  }, [search]);

  const renderBasedOnStatus = () => {
    switch (status) {
      case ERROR:
        return <ErrorView />;
      case LOADING:
        return <Loader />;
      case NULLMODE:
        return (
          <EmptyView message="Sorry, no products match your filter/search" />
        );
      case SUCCESS:
        return (
          <div className="products__listing">
            {products?.map?.((productDetails, key) => (
              <ProductsCard
                key={key}
                handleViewProduct={handleViewProduct}
                productDetails={productDetails}
              />
            ))}
          </div>
        );
      default:
        return "";
    }
  };

  return (
    <>
      <section className="products" id="products">
        <div className="products__header">
          <div>
            <h3>Our Recent Listing</h3>
            <p>Go through our recent listing and place your order.</p>
          </div>
          <div className="products__header__actions">
            <Search
              placeholder="Search through our listing."
              onChange={setSearch}
              useDebounce
            />
            <Icon icon="filter" onClick={toggleOpenFilter} />
          </div>
        </div>
        {renderBasedOnStatus()}
      </section>

      {openFilter && (
        <FilterProductsModal
          isOpen={openFilter}
          onClose={toggleOpenFilter}
          updateCategories={updateCategories}
          categories={categories}
          handleApply={() => {
            getProducts();
            toggleOpenFilter();
          }}
        />
      )}
    </>
  );
};

export default Products;
