import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { login } from "../../JS/Actions/authActions";
import "./Auth.css";

const Login = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const errors = useSelector((state) => state.authReducer.errors);
  const [formData, setFormData] = useState({
    Email: "",
    Password: "",
  });

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleConfim = () => {
    dispatch(login(formData, history));
    // history.push("/");
  };

  return (
    <div className="Auth">
      <div className="form">
        <h3 className="heading">Login</h3>
        {errors &&
          errors.map((error, i) => (
            <h6 className="error_msg" key={i}>
              {error.msg}
            </h6>
          ))}
        <input
          type="email"
          onChange={handleFormChange}
          placeholder="Enter Your Email..."
          name="Email"
          autocomplete="off"
          className="email"
          required
        />
        <br />
        <input
          type="password"
          onChange={handleFormChange}
          placeholder="Enter Your Password..."
          name="Password"
          autocomplete="off"
          className="password"
          required
        />
        <button onClick={handleConfim} className="submit-btn">
          Login
        </button>
        <Link to="/CreateAccount" className="link">
          already have an acount? Login in here
        </Link>
      </div>
    </div>
  );
};
export default Login;
