import React, { useEffect } from "react";
import { useState } from "react";
import "./Signup.css";
import validation from "./validation";
const Signup = ({ submitForm }) => {
  const [value, setValue] = useState({
    name: "",
    number: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [data, setData] = useState(false);

  const handleChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setErrors(validation(value));
    setData(true);
  };
  useEffect(() => {
    if (Object.keys(errors).length === 0 && data) {
      submitForm(true);
    }
  });
  return (
    <>
      <div className="s">
        <div className="s1">
          <h3 style={{ color: "yellow", textAlign: "center" }}>NEW USER</h3>
          <hr style={{ color: "#ffffff" }} />
          <p>
            At Sportsjam.in, buy your favourite brand and sportsgear at great
            prices. Don't forget to use our welcome gift vouchers (worth
            Rs.2000)* for more savings!
          </p>
          <p>Register online and and enjoy the following benefits:</p>
          <p>
            <li>Get Discount Vouchers, Special Promotions & Offers</li>
            <li>Checkout faster while making your purchases</li>
            <li>View your Order History and track your Order Status</li>
            <li>Make changes to your account information or password</li>
          </p>
        </div>

        {/* register */}
        <div className="s1">
          <h3 style={{ color: "yellow", textAlign: "center" }}>REGISTRATION</h3>
          <hr style={{ background: "yellow" }} />
          <p>
            First Name *{" "}
            <input
              type="name"
              name="name"
              value={value.name}
              onChange={handleChange}
            />
            {errors.name && <p>{errors.name}</p>}
          </p>
          <p>
            Mobile No * <button>91</button>
            <input
              type="number"
              name="number"
              value={value.number}
              onChange={handleChange}
            />
            {errors.number && <p>{errors.number}</p>}
          </p>
          <p>
            Email *{" "}
            <input
              type="email"
              name="email"
              value={value.email}
              onChange={handleChange}
            />
            {errors.email && <p>{errors.email}</p>}
          </p>
          <p>
            Password*{" "}
            <input
              type="password"
              name="password"
              value={value.password}
              onChange={handleChange}
            />
            {errors.password && <p>{errors.password}</p>}
          </p>
          <p>
            Confirm Password *{" "}
            <input
              type="password"
              name="password"
              value={value.password}
              onChange={handleChange}
            />
          </p>
          <button
            style={{
              backgroundColor: "#f49500",
              color: "white",
              width: "55%",
              height: "12%",
              borderRadius: "10%",
            }}
            onClick={handleFormSubmit}
          >
            Submit
          </button>
          <p style={{ fontSize: "12" }}>
            By clicking "Register" button, you confirm that you accept our terms
            and conditions.
          </p>
        </div>
      </div>
    </>
  );
};

export default Signup;
