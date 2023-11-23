import { Box, Typography } from "@mui/material";
import React from "react";

const About = () => {
  return (
    <div>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Typography sx={{ fontFamily: "fantasy" }} variant="h2">
  Buy Books at reasonable prices at our website
        </Typography>
        <Typography sx={{ fontFamily: "fantasy" }} variant="h3">
        Books are the best friends you can have; they inform you, and entertain you, and they don't talk back.
        </Typography>
      </Box>
    </div>
  );
};

export default About;
