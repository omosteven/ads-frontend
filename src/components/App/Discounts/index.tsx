import "./Discounts.scss";

const Discounts = () => {
  return (
    <div className="discounts">
      <h1>Available Discounts</h1>
      <h2>Search through our available discounts here.</h2>
      <section className="discounts__list">
        {Array.from({ length: 10 }).map(() => (
          <div className="discounts__card">
            <h4>5% Discounts</h4>
            <h5>JULIE30</h5>
            <div>
              <button>Copy</button>
              <p>For NftInc</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Discounts;
