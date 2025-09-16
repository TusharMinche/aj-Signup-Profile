import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser } from "../state/userSlice";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user?.token) {
      navigate("/");
    }
  }, [user, navigate]);

  if (!user) return null;

  return (
    <div className="profile-container">
      <h2>Welcome, {user.name}!</h2>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Access Token:</strong> {user.token}</p>
      <button className="logout-btn" onClick={() => dispatch(deleteUser())}>Logout</button>
    </div>
  );
};

export default Profile;
