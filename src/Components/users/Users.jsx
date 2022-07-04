import fakeFetch from "../../utils/fakeFetch";
import Pagination from "../common/Pagination";
import Filters from "./Filters";
import UserCard from "./UserCard";

function Users() {

  return (
    <div>
      <div data-testid="loading-indicator">...loading</div>
      <div data-testid="error-indicator">Error: Something went wrong</div>
      <UserCard />
      <Filters/>
      <Pagination />
    </div>
  );
}

export default Users;
