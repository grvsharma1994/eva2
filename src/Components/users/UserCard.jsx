const UserCard = ({}) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "1rem",
        marginBottom: "0.5rem"
      }}
      data-testid="user-card"
      >
      <img
        src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/573.jpg"
        width="40px"
        style={{ borderRadius: "50%" }}
        data-testid="user-card-img"
      />
      <div data-testid="user-card-name">
        name
      </div>
    </div>
  );
};

export default UserCard;
