import { useEffect, useState } from "react";
import User from "../types/User.type";
import axios from "axios";
import ProfileUpdate from "./ProfileUpdate";

export default function Profile() {
  const [userInfo, setUserInfo] = useState<User>({
    name: "",
    email: "",
    profile: "",
  });
  const [id, setId] = useState<string>("");
  const [isUpdating, setIsUpdating] = useState(false);
  const [imageProfile, setImageProfile] = useState("");

  const refreshProfile = () => {
    const access_token = sessionStorage.getItem("token");
    axios
      .get("http://localhost:8000/api/profile", {
        headers: { Authorization: access_token },
      })
      .then((response) => {
        const userRes = response.data.user;
        const user: User = {
          name: userRes.name,
          email: userRes.email,
          profile: userRes.profile,
        };
        console.log(userRes);
        setImageProfile("http://localhost:8000/images/" + user.profile);
        setUserInfo(user);
        setId(userRes.id);
      })
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    console.log(1);
    refreshProfile();
  }, []);
  //image from api static storage
  return (
    <div className=" h-96 bg-gray-100 shadow-xl p-10 m-10 rounded">
      <div className="space-y-4">
        <div>
          <strong>Name: </strong>
          <span>{userInfo?.name}</span>
        </div>
        <div>
          <strong>Email: </strong>
          <span>{userInfo?.email}</span>
        </div>
        <div>
          <strong>Profile avatar: </strong>
          <div>
            <img src={imageProfile} alt="" className="h-32 w-32" />
          </div>
        </div>
        <div>
          {/* onclick to show popup edit info user */}
          <button
            onClick={() => {
              setIsUpdating((pre) => !pre);
            }}
            className="bg-green-600 text-white p-2 rounded-sm"
          >
            Edit
          </button>
        </div>
      </div>
      {isUpdating && (
        <ProfileUpdate
          open={isUpdating}
          setOpen={setIsUpdating}
          data={userInfo}
          id={id}
          onUpdate={refreshProfile}
        />
      )}
    </div>
  );
}
