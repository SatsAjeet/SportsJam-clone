import React, { useEffect } from "react";
import {useNavigate} from "react-router-dom"
const Signup = ({ submitForm }) => {
  const navigate = useNavigate()
const [name, setname] = React.useState("");
const [mobile, setmobile] = React.useState("");
const [email, setemail] = React.useState("");
const [password, setpassword] = React.useState("");
const [formData, setFormData] = React.useState({
    status: false,
  });
const handleChange = (e) => {
  const type = e.target.name;
  if (type == "name") {
    const inputName = e.target.value;
    setname(e.target.value);
    setFormData({ ...formData, [inputName]: e.target.value });
  } else if (type == "number") {
    const inputName = e.target.value;
    setmobile(e.target.value);
    setFormData({ ...formData, [inputName]: e.target.value });
  } else if (type == "email") {
    const inputName = e.target.value;
    setemail(e.target.value);
    setFormData({ ...formData, [inputName]: e.target.value });
  } else if (type == "password") {
    const inputName = e.target.value;
    setpassword(e.target.value);
    setFormData({ ...formData, [inputName]: e.target.value });
  } 
};

const handleFormSubmit = (event) => {
  event.preventDefault();
  const postvalue = {
    name: name,
    email: email,
    mobile: mobile,
    password: password,
  };
  const data = JSON.parse(localStorage.getItem("registeration")) || []
  data.push(postvalue);
  localStorage.setItem("registeration", JSON.stringify(data));
  setname("")
  setemail("")
  setmobile("")
  setpassword("")
  alert("Registeration Success!");
  navigate("/signin")
};

  return (
    <>
      <div
        style={{
          display: "flex",
          width: "100%",
          margin: "20px auto",
          height: "auto",
          justifyContent: "space-around",
          alignItems:"center",
          marginLeft:"70px",
          color: "#f6a534"
        }}
      >
        <h2>NEW USER</h2>
        <h2>REGISTRATION</h2>
      </div>
      <div
        style={{
          background: "#f6a534",
          width: "100%",
          height: "1px",
          margin: "0px",
        }}
      ></div>
      <div
        style={{
          display: "flex",
          width: "100%",
          margin: "20px auto",
          height: "auto",
          justifyContent: "space-evenly",
        }}
      >
        <div
          style={{
            height: "auto",
            width: "40%",
            textAlign: "justified",
            lineHeight: "1.6",
          }}
        >
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
        <div
          style={{
            height: "auto",
            width: "23%",
            textAlign: "justified",
            lineHeight: "3.6",
          }}
        >
          <form onSubmit={handleFormSubmit}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <p>First Name * </p>
              <input
                style={{ height: "40px", width: "240px" }}
                type="name"
                name="name"
                value={name}
                onChange={handleChange}
                required
              />
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <p>Mobile No *</p>
              <input
                style={{ height: "40px", width: "240px" }}
                type="number"
                name="number"
                value={mobile}
                onChange={handleChange}
                required
              />
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <p>Email * </p>
              <input
                style={{ height: "40px", width: "240px" }}
                type="email"
                name="email"
                value={email}
                onChange={handleChange}
                required
              />
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <p>Password* </p>
              <input
                style={{ height: "40px", width: "240px" }}
                type="password"
                name="password"
                value={password}
                onChange={handleChange}
                required
              />
            </div>
            <button
              type="submit"
              style={{
                backgroundColor: "#f49500",
                color: "white",
                width: "100%",
                height: "35px",
                borderRadius: "10px",
                cursor: "pointer"
              }}
            >
              Submit
            </button>
          </form>
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
