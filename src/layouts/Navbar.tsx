import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <header className="py-8 flex items-center justify-between px-20 bg-gray-300">
        <div className="flex space-x-32 items-center">
          <Link to={"/"} className="font-bold text-2xl text-red-700">
            News 24h
          </Link>
          <div className="underline space-x-10 ">
            <Link to={"/"}>Home</Link>
            <Link to={"/create-news"}>Post a news</Link>
          </div>
        </div>
        <Link to={"/login"} className="underline">Login/Register</Link>
      </header>
    </>
  );
}

export default Navbar;
