import { Typography } from '@mui/material';
import React from 'react';
import Logo from "../images/Frame 1261155216.png";
import "../styles/success.scss"
import Tick from "../images/Tick + round.png"

const Success = () => {
  return (
    <div className="success-container">
        <img src={Logo} width="127" alt="Logo" className="image-container"/>
        <div className="success-section">
        <img src={Tick} alt="Tick" className="tick"/>
        <Typography className="heading">
          Success Submitted
        </Typography> 
        <Typography className="sub-heading">
          Congratulations
        </Typography>
        <Typography className="content-section">
        Your request has been successfully submitted to us. We <br/> will validate your information and reach out to your <br/>shortly with updates
        </Typography>
        </div>
        <Typography className="footer-success">Redirecting you to Homepage in <b>5 Seconds</b></Typography>
    </div>
  )
}

export default Success