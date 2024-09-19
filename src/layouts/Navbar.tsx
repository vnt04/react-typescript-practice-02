import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [userName, setUserName] = useState<string>("");
  const access_token = localStorage.getItem("token");
  useEffect(() => {
    if (access_token) {
      axios
        .get("http://localhost:8000/api/profile", {
          headers: {
            Authorization: access_token,
          },
        })
        .then((response) => {
          const user = response.data.user;
          setUserName(user.name);
        })
        .catch((error) => console.log(error));
    }
  });
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
        <Link to={"/login"} className="underline">
          {access_token === null ? (
            <span>Login/Register</span>
          ) : (
            <span>{userName}</span>
          )}
        </Link>
      </header>
    </>
  );
}

export default Navbar;
