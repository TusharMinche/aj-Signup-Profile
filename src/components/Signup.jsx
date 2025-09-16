import React, { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "../state/userSlice";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  const [error, setError] = useState(false);
  const [passwordMismatchError, setPasswordMismatchError] = useState(false);
  const [success, setSuccess] = useState(false);

  const name = useRef();
  const email = useRef();
  const password = useRef();
  const confirmPassword = useRef();

  if (user) {
    navigate("/profile");
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(false);
    setPasswordMismatchError(false);
    setSuccess(false);

    if (
      !name.current.value ||
      !email.current.value ||
      !password.current.value ||
      !confirmPassword.current.value
    ) {
      setError(true);
      return;
    }

    if (password.current.value !== confirmPassword.current.value) {
      setPasswordMismatchError(true);
      return;
    }

    const newUser = {
      name: name.current.value,
      email: email.current.value,
      password: password.current.value,
    };

    dispatch(setUser(newUser));
    setSuccess(true);
    navigate("/profile");
  };

  return (
    <div className="app">
      <header className="header">
        <div>Header</div>
        <nav>
          <Link to="/signup">Signup</Link>
          <Link to="/profile">Profile</Link>
        </nav>
      </header>

      <div className="form-container">
        <h1>Signup</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Full Name" ref={name} />
          <input type="email" placeholder="Email" ref={email} />
          <input type="password" placeholder="Password" ref={password} />
          <input
            type="password"
            placeholder="Confirm Password"
            ref={confirmPassword}
          />

          {error && (
            <p className="error">Error : All the fields are mandatory</p>
          )}
          {passwordMismatchError && (
            <p className="error">
              Error : Password and Confirm Password Mismatched
            </p>
          )}
          {success && <p className="success">Successfully Signed Up!</p>}

          <button type="submit">Signup</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
