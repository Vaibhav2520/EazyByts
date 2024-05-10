import React, { useState } from "react";
import Close from "../images/Frame 1261155540.png";
import Logo from "../images/Frame 1261155216.png";
import "../styles/registration.scss";
import { Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { createUserWithEmailAndPassword ,onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import Dashboard from "./dashboard";
import { Link } from "react-router-dom";

const Registration = () => {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const [user , setUser] = useState({});

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="registration-container">
      <div className="topBar">

        <img src={Logo} width="127" alt="Logo" />
        <Link to="/">
        <img src={Close} width="50" alt="Cross" onClick={<Dashboard/>} />
        </Link>
      </div>
      <div className="registration-box">
        <Typography className="heading">Registration form</Typography>
        <Typography className="sub-heading">
          Start Your Sucess <br />
          Journey Here
        </Typography>
        <div className="textfield-container">
          <TextField
            id="outlined-basic"
            variant="outlined"
            className="textfield"
            label="Enter Your Name"
            onChange={(event) => {
                setRegisterEmail(event.target.value);
              }}
          />
          <TextField
            id="outlined-basic"
            variant="outlined"
            className="textfield"
            label="Enter Your Email"
            onChange={(event) => {
                setRegisterPassword(event.target.value);
              }}
          />
          <Link to="/success">
          <Button variant="contained" className="submit-button"  onClick={register} >
            SUBMIT
          </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Registration;
