import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteUser } from "../state/userSlice";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const user = useSelector((state) => state.user.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(deleteUser());
    navigate("/signup");
  };

  if (!user) {
    navigate("/signup");
    return null;
  }

  return (
    <div className="profile-container">
      <h1>Profile</h1>

      <div className="profile-field">
        <strong>Full Name : </strong> {user.name}
      </div>
      <div className="profile-field">
        <strong>Email : </strong> {user.email}
      </div>
      <div className="profile-field">
        <strong>Password : </strong> {user.password}
      </div>

      <button className="logout-btn" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default Profile;
