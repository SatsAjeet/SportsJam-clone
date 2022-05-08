import React from 'react'
import styled from "styled-components"
import styles from "./signin.module.css"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import {loginaction} from "../redux/action"
const Container = styled.div`
  height: 370px;
  width: 400px;
  border: 1px solid gray;
  margin: auto;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
    rgba(0, 0, 0, 0.22) 0px 10px 10px;
    margin-top: 30px;
    margin-bottom: 30px;
    padding-top: 20px;
`;
function Signin() {
  const dispatch= useDispatch()
    const navigate= useNavigate()
    const [email, setemail] = React.useState("");
    const [password, setpassword] = React.useState("");
    const [formData, setFormData] = React.useState({
        status: false,
    });
    const handleChange = (e) => {
        const type = e.target.name;
        if (type == "email") {
            const inputName = e.target.value;
            setemail(e.target.value);
            setFormData({ ...formData, [inputName]: e.target.value });
        } else if (type == "password") {
            const inputName = e.target.value;
            setpassword(e.target.value);
            setFormData({ ...formData, [inputName]: e.target.value });
        }
    };
    const handleSubmit = (event) => {
        event.preventDefault()
        const postvalue = {
            email: email,
            password: password,
        };
        setemail("");
        setpassword("");
        const data = JSON.parse(localStorage.getItem("registeration")) || [];
        if (data.length == 0) {
            alert("Please Register")
            navigate("/signup")
        }
        else {
            var flag=false
            for (var i = 0; i < data.length; i++) {
                if (postvalue.email==data[i].email && postvalue.password==data[i].password) {
                  alert("Login success")
                  localStorage.setItem("logindata", JSON.stringify(postvalue));
                  dispatch(loginaction())
                    navigate("/")
                    flag = true
                    break
                }
            }
            if (flag == false) {
                alert("Login failure")
            }
    }
}
  return (
    <>
      <Container>
        <div className={styles.heading}>
          <h2>SIGN IN</h2>
        </div>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.div}>
            <p>Email ID:</p>
            <input
              className={styles.input}
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.div}>
            <p>Password:</p>
            <input
              className={styles.input}
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.Div}>
            <Link to={"/signup"}>New User? Register</Link>
            <p>Forget Password</p>
          </div>
          <button className={styles.button} type="submit">
            Submit
          </button>
        </form>
        <div className={styles.Div}>
          <img src="https://i.stack.imgur.com/oL5c2.png" alt="fb" />
          <img
            src="https://icon-library.com/images/login-with-google-icon/login-with-google-icon-3.jpg"
            alt="google"
          />
        </div>
      </Container>
    </>
  );
}

export default Signin