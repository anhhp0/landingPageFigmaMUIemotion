import React from "react";
import Navbar from "./navBar/navBar";
import Slider from "./slider/slider";
import MainServices from "./mainServices/mainServicesDesc";
import AboutUs from "./aboutUs/aboutUs";
import ProfesionalTeam from "./profesionalTeam/profesionalTeam";
import ContactUs from "./contactUs/contactUs";
import Footer from "./footer/Footer";
import NavBarSliderBg from "../Assets/navBarslideBackground";
import { Box, Container, Grid } from "@mui/material";
import ServicesDetail from "./mainServices/servicesDetail";
import AboutUsBg from "../Assets/aboutUsBg";

const Home = () => {
  return (
    <Box maxWidth="1440">
      <Container>
        {/* Background  */}
        <NavBarSliderBg />
        {/* NavBar */}
        <Box>
          <Grid
            container
            spacing={2}
            direction={"column"}
            justifyContent="center"
          >
            <Grid item>
              <Navbar />
            </Grid>
            {/* Content  */}
            {/* ///// */}
            {/* Slider  */}
            <Grid item>
              <Slider />
            </Grid>
          </Grid>
        </Box>
      </Container>

      <Container>
        <Box mt={16}>
          <Grid
            container
            spacing={2}
            direction={"column"}
            justifyContent="center"
          >
            <Grid item>
              {/* MainService  */}
              <Grid>
                <Grid item>
                  <MainServices />
                </Grid>
                <Grid item>
                  <ServicesDetail />
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              {/* AboutUs  */}
              <AboutUs />
            </Grid>
          </Grid>
        </Box>
        <AboutUsBg/>
      </Container>

      {/* ProfesionalTeam  */}
      <ProfesionalTeam />
      {/* ContactUs  */}
      <ContactUs />
      {/* //// */}
      {/* Footer  */}
      <Footer />
    </Box>
  );
};

export default Home;
