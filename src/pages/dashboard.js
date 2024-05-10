import { Button, Card, CardContent, Typography } from "@mui/material";
import React from "react";
import Logo from "../images/Frame 1261155216.png";
import "../styles/dashboard.scss";
import Mask from "../images/Mask group.png";
import Scroll from "../images/Frame 1261155430.png";
import Arrow from "../images/Frame.png";
import AccordionGroup from "@mui/joy/AccordionGroup";
import Accordion from "@mui/joy/Accordion";
import AccordionDetails from "@mui/joy/AccordionDetails";
import AccordionSummary, {
  accordionSummaryClasses,
} from "@mui/joy/AccordionSummary";
import AddIcon from "@mui/icons-material/Add";
import Union from "../images/Union.png";
import Vector from "../images/Vector.png";
import Rocket from "../images/Group 1171281573.png"
import Registration from "./registration";
import { Link } from "react-router-dom";
import Sparkle from "../images/spark, sparkle, 26.png"

const Dashboard = () => {
  return (
    <>
      <div className="dashboard-container">
        <img src={Logo} width="127" alt="Logo" className="logo-container" />
        <div className="buttons">
          <Link to="/Registration">
          <Button className="get-projects-button" onClick={<Registration/>}> Get Projects</Button>
          </Link>
          <Button className="oonboard-talent-button"> Onboard Talent</Button>
        </div>
      </div>
      <div className="main-container">
        <Typography className="heading">Success Stories</Typography>
        <Typography className="sub-heading">
          Every success journey <br /> we've encountered.
        </Typography>
        <div className="middle-container">
        <div className="image-section">
          <Card className="card2">
              <CardContent>
              <div className="card2-content">
              <img src={Rocket} alt="Rocket" width="52" height="52"/>
              <div className="10-staff">
                <Typography className="days10">
                  10 DAYS
                </Typography>
                <Typography className="staff-deployment">
                  Staff Deployment
                </Typography>
              </div>
              </div>
              </CardContent>
            </Card>
            <img src={Mask} width="506" height="546" alt="Mask" />
            
            <Card className="card1">
              <CardContent>
              <div className="number-million">
                <Typography className="number">
                  $0.5
                </Typography>
                <Typography className="million">
                  Million
                </Typography>
              </div>
                <Typography className="card-content">
                Reduced client expenses <br/>by saving on hiring and <br/> employee costs.
                </Typography>
              </CardContent>
            </Card>
            <Card className="card3">
            <CardContent>
            <img src={Sparkle} alt="Sparkle" className="sparkle" width="79" height="78"/>
            <Typography className="percent40">
              40%
            </Typography>
            <Typography className="card3-content">
            Achieved reduction in project execution time by optimising team availability
            </Typography>
            </CardContent>

            </Card>
        </div>
          
          <div className="content-container">
            <Typography className="content-section">
              Enhance fortune 50 <br /> company’s insights <br />
              teams research <br />
              capabilities
            </Typography>
            <img
              src={Scroll}
              width="56"
              height="10"
              alt="Scroll"
              className="scroll"
            />
            <Button className="explore-more-button">
              Explore More <img src={Arrow} alt="Arrow" />
            </Button>
          </div>
        </div>
      </div>
      <div className="ask-question-section">
        <div className="content-class">
          <div className="content">
            <Typography className="what-mind-content">
              What's on your mind
            </Typography>
            <Typography className="ask-question">Ask Questions</Typography>
          </div>
          <img
            src={Union}
            alt="Union"
            width="419"
            height="514"
            className="union"
          />
        </div>
        <div className="accordion">
          <AccordionGroup
            sx={{
              maxWidth: 1000,
              [`& .${accordionSummaryClasses.indicator}`]: {
                transition: "0.2s",
              },
              [`& [aria-expanded="true"] .${accordionSummaryClasses.indicator}`]:
                {
                  transform: "rotate(45deg)",
                },
            }}
          >
            <Accordion classname="accordion-content" >
              <AccordionSummary indicator={<AddIcon />} >
                Do you offer freelancers?
              </AccordionSummary>
              <AccordionDetails>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </AccordionDetails>
            </Accordion>
            <Accordion classname="accordion-content">
              <AccordionSummary indicator={<AddIcon />} className="accordion-contentone">
                What’s the guarantee that I will be satisfied with the hired
                talent?
              </AccordionSummary>
              <AccordionDetails>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </AccordionDetails>
            </Accordion>
            <Accordion classname="accordion-content">
              <AccordionSummary indicator={<AddIcon />}>
                Can I hire multiple talents at once?
              </AccordionSummary>
              <AccordionDetails>
                If unhappy with a project, communicate with the freelancer,
                allow for revisions, and refer to the agreement. Escalate to
                platform support if needed, considering mediation. Review
                policies, seek collaborative solutions for resolution.
              </AccordionDetails>
            </Accordion>
            <Accordion classname="accordion-content">
              <AccordionSummary indicator={<AddIcon />}>
                Why should I not go to an agency directly?
              </AccordionSummary>
              <AccordionDetails>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </AccordionDetails>
            </Accordion>
            <Accordion classname="accordion-content">
              <AccordionSummary indicator={<AddIcon />}>
                Who can help me pick a right skillset and duration for me?
              </AccordionSummary>
              <AccordionDetails>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </AccordionDetails>
            </Accordion>
          </AccordionGroup>
        </div>
      </div>
      <div className="footer">
      <div className="right-side">
      <img src={Vector} alt="Vector" width="20" height="20" className="vector"/>
      <Typography className="footer-subcontent">
      
      Talup 2023. All rights reserved
      </Typography>
      </div>
      <div className="footer-content">
        <Typography className="tc">Terms & Conditions</Typography>
        <Typography className="pp">Privacy Policy</Typography>
      </div>
      </div>
    </>
  );
};

export default Dashboard;
