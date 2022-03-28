import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { register } from "../../JS/Actions/authActions";
import "./Auth.css";
const Register = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const errors = useSelector((state) => state.authReducer.errors);

  const [formData, setFormData] = useState({
    FirstName: "",
    LastName: "",
    Gender: "",
    Birth: "",
    PicURL: "",
    Phone: "",
    Adresse: "",
    Email: "",
    Password: "",
    Role: "User",
  });

  const handleFormChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleConfim = () => {
    console.log(formData);
    dispatch(register(formData, history));
    // history.push("/");
  };
  return (
    <div className="Auth">
      <div className="form">
        <h3 className="heading">Register</h3>
        {errors &&
          errors.map((error, i) => (
            <h6 className="error_msg" key={i}>
              {error.msg}
            </h6>
          ))}

        <input
          type="text"
          onChange={handleFormChange}
          placeholder="FirstName"
          name="FirstName"
          autocomplete="off"
          className="FirstName"
          required
        />
        <br />
        <input
          type="text"
          onChange={handleFormChange}
          placeholder="LastName"
          name="LastName"
          autocomplete="off"
          className="LastName"
          required
        />
        <br />
        <select
          name="Gender"
          onChange={handleFormChange}
          id="Gender"
          placeholder="Gender"
        >
          <option value="Man">Man</option>
          <option value="Woman">Woman</option>
        </select>
        <br />
        <input
          type="Date"
          onChange={handleFormChange}
          placeholder="Date of Birth"
          name="Birth"
          autocomplete="off"
          className="DateofBirth"
          required
        />
        <br />
        <input
          type="text"
          onChange={handleFormChange}
          placeholder="Pic URL"
          name="PicURL"
          autocomplete="off"
          className="PicURL"
          required
        />
        <br />
        <input
          type="text"
          onChange={handleFormChange}
          placeholder="Phone"
          name="Phone"
          autocomplete="off"
          className="Phone"
          required
        />
        <br />
        <input
          type="text"
          onChange={handleFormChange}
          placeholder="Adresse"
          name="Adresse"
          autocomplete="off"
          className="Adresse"
          required
        />
        <br />
        <input
          type="email"
          onChange={handleFormChange}
          placeholder="Email"
          name="Email"
          autocomplete="off"
          className="email"
          required
        />
        <br />
        <input
          type="password"
          onChange={handleFormChange}
          placeholder="Password"
          name="Password"
          autocomplete="off"
          className="password"
          required
        />
        <br />
        <button onClick={handleConfim} className="submit-btn">
          Register
        </button>
        <Link to="/login" className="link">
          D'ont have an acount? Register One
        </Link>
      </div>
    </div>
  );
};

export default Register;
