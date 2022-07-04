const Filters = ({ }) => {
  return (
    <div style={{ display: "flex", gap:"2rem" }}>
      <div>
        <label>
          <input
            data-testid="order-filter"
            type="checkbox"
            />
            Ascending
        </label>
      </div>
      <div>
        <label>
          <select
            data-testid="per-page-filter"
          >
          </select>
          Per page
        </label>
      </div>
    </div>
  );
};
export default Filters;
