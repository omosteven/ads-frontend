import { useEffect, useState } from "react";
import "./Discounts.scss";
import { dataQueryStatus } from "utils/dataQueryStatus";
import API from "utils/api/API";
import { EmptyView, ErrorView, Loader } from "components/ui";

const { LOADING, SUCCESS, NULLMODE, ERROR } = dataQueryStatus;
const Discounts = () => {
  const [discounts, setDiscounts] = useState([]);
  const [status, setStatus] = useState(LOADING);

  const getDiscounts = async () => {
    setStatus(LOADING);
    try {
      const result = await API.get(
        "https://ramified-backend.onrender.com/api/v1/discounts",
        {}
      );
      const resultsData = result?.data?.data;
      setDiscounts(resultsData || []);
      console.log(result.data);
      setStatus(resultsData?.length > 0 ? SUCCESS : NULLMODE);
    } catch (e) {
      setStatus(ERROR);
    }
  };

  useEffect(() => {
    getDiscounts();
    // eslint-disable-next-line
  }, []);

  const renderBasedOnStatus = () => {
    switch (status) {
      case ERROR:
        return <ErrorView handleRetry={getDiscounts} />;
      case LOADING:
        return <Loader />;
      case NULLMODE:
        return (
          <EmptyView message="Sorry, no products match your filter/search" />
        );
      case SUCCESS:
        return (
          <section className="discounts__list">
            {discounts.map(
              (
                {
                  currency,
                  discountCode,
                  percentage,
                  noOfUsage,
                  companyId,
                }: any,
                _
              ) => (
                <div className="discounts__card" key={_}>
                  <h4>{percentage}% Discounts</h4>
                  <h5>{discountCode}</h5>
                  <div>
                    <button>Copy</button>
                    <p>For {companyId?.orgName}</p>
                  </div>
                </div>
              )
            )}
          </section>
        );
      default:
        return "";
    }
  };

  return (
    <div className="discounts">
      <h1>Available Discounts</h1>
      <h2>Search through our available discounts here.</h2>
      {renderBasedOnStatus()}
    </div>
  );
};

export default Discounts;
