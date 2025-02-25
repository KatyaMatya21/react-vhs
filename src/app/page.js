import Link from "next/link";

const RootPage = () => {
  return (
    <div>
      <h2>Home Page</h2>
      <Link href='/restaurants' title="To restaurants">To restaurants</Link>
    </div>
  );
};

export default RootPage;
