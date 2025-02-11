import { Link } from "react-router";

export const HomePage = () => {
  return (
    <div>
      <h2>Home Page</h2>
      <Link to='/restaurants' title="To restaurants">To restaurants</Link>
    </div>
  );
};
