import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import CustomDropDown from "../components/CustomDropdown";

function Navbar() {
  const [userName, setUserName] = useState<string>("");
  const access_token = sessionStorage.getItem("token");
  const handleLogout = () => {
    sessionStorage.removeItem("token");
    window.location.href = "/";
  };
  const navigate = useNavigate();
  const myProfile = [
    {
      name: "Profile",
      action: () => {
        navigate("/profile");
      },
    },
    {
      name: "Reset password",
      action: () => {
        navigate("#");
      },
    },
    {
      name: "Logout",
      action: handleLogout,
    },
  ];
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
  }, [access_token]);
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
        <div className="underline">
          {access_token === null ? (
            <Link to={"/login"}>Login/Register</Link>
          ) : (
            <CustomDropDown title={userName} list={myProfile} />
          )}
        </div>
      </header>
    </>
  );
}

export default Navbar;
