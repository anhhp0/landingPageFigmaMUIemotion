import { Box, Grid } from "@mui/material";
import React from "react";
import { GeneratedIdentifierFlags } from "typescript";
import ThumbnailAboutUs from "../../Assets/thumbnailAboutUs";

const AboutUs: React.FC = () => {
  return (
    <Box
      sx={{ px: 4, display: "flex", pl: 8 }}
      py={4}
      justifyContent={"center"}
    >
      <Grid
        container
        spacing={2}
        direction={{ xs: "column", md: "column", lg: "row" }}
      >
        <Grid item>1</Grid>
        <Grid item>2
        <ThumbnailAboutUs/>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutUs;
