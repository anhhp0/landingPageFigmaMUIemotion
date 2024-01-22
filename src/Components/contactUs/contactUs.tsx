import styled from "@emotion/styled";
import { Typography, Button, Box, Stack, Grid, Input, TextareaAutosize } from "@mui/material";
import React from "react";
import AnimationContactUS from "../../Assets/animationContactUs";



const ContactUs: React.FC = () => {
  const ContactUsTitle = styled(Typography)({
    fontFamily: "poppins",
    fontSize: "16px",
    fontWeight: 600,
    color: "#FF64AE",
    textTransform: "none",
  });

  const SendYourInquiryContactUs = styled(Typography)({
    fontFamily: "poppins",
    fontSize: "36px",
    fontWeight: 600,
    color: "#091156",
    textTransform: "none",
  });

  const DescContactUs = styled(Typography)({
    fontFamily: "poppins",
    fontSize: "16px",
    fontWeight: 400,
    color: "#8B8B8B",
    textTransform: "none",
  });
  const SendMessageButton = styled(Button)({
    boxShadow: "none",
    textTransform: "none",
    fontSize: 16,
    fontWeight: 600,
    padding: "6px 12px",
    border: "1px solid",
    lineHeight: 1.5,
    backgroundColor: "#FF64AE",
    borderColor: "#FF64AE",
    borderRadius: "50px",
    width: "200px",
    height: "58.36px",
  });
  const Textarea = styled(TextareaAutosize)({
    resize: "none",
    border: "1px solid",
    width: "520px",
    height: "239.47px",
    borderRadius: "15px",
    borderColor: "#D9DDFE",
    padding: "8px 12px",
  });

  return (
    <Box
      sx={{ px: 2, display: "flex", pl: 4 }}
      py={4}
      justifyContent={"center"}
    >
      <Stack
        spacing={32}
        gap={8}
        direction={{ xs: "column", md: "column", lg: "row" }}
      >
        <Grid item xs={3} justifyContent={"flex-end"}>
          <Box sx={{ ml: "-85px" }}>
            <AnimationContactUS />
          </Box>
        </Grid>
        <Grid item xs="auto">
          <Grid container direction="column" spacing={8}>
            <Grid item>
              <Grid container direction="column">
                <Grid item>
                  <ContactUsTitle>Contact Us</ContactUsTitle>
                </Grid>
                <Grid item>
                  <SendYourInquiryContactUs>
                    Send your inquiry to
                    <br /> our expert team
                  </SendYourInquiryContactUs>
                </Grid>
                <Grid item>
                  <DescContactUs>
                    Lorem ipsum dolor sit amet nulla turapis tellus.
                  </DescContactUs>
                </Grid>
              </Grid>
            </Grid>

            <Grid item>
              <Grid direction="column" spacing={16}>
                <Grid item>
                  <Grid direction="row" spacing={16}>
                    <Input
                      type="text"
                      name="firstName"
                      placeholder="FirstName"
                    />
                    <Input type="text" name="lastName" placeholder="LastName" />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Input type="text" name="email" placeholder="Email address" />
              </Grid>
              <Grid item>
                <Input
                  type="text"
                  name="subject"
                  placeholder="Subject message"
                />
              </Grid>

              <Grid item>
                <Textarea
                  aria-label="maximum height"
                  placeholder="Your inquiry here"
                />
              </Grid>
            </Grid>
          </Grid>

          <Grid item>
            {/* Button  */}
            <Stack direction="row" spacing={2}>
              <SendMessageButton variant="contained">
                Send Message
              </SendMessageButton>
            </Stack>
          </Grid>
        </Grid>
      </Stack>
    </Box>
  );
};

export default ContactUs;
