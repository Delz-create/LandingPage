import React from "react";
import { Box, Typography, Container, Stack } from "@mui/material";
import BulletIcon from "../assets/image/custom-bullet.png";
import AboutImg1 from "../assets/image/About-image1.png";
import AboutImg2 from "../assets/image/About-image2.png";
import "../index.css";

const About = () => {
  return (
    <section id="about">
      <Box sx={{ py: 10, backgroundColor: "#fff" }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "start",
              gap: 6,
            }}>
            <Box sx={{ flex: 1 }}>
              <Typography
                variant="h4"
                fontWeight={700}
                color="#b71c1c"
                gutterBottom
                sx={{ fontFamily: "Poppins",
                  fontSize: {xs: 20, sm: 25}
                }}>
                Know More About Pozse
              </Typography>

              <Typography
                mb={3}
                color="black"
                fontFamily="Poppins"
                sx={{fontSize: {xs: 12, sm: 15, }}}>
                Welcome to Pozse, your fashion-first social media platform. We
                unite fashion enthusiasts, designers, models, and brands under
                one creative ecosystem. Our mission is to revolutionize the
                fashion industry through rich social interaction and
                cutting-edge digital tools that empower you to style, connect,
                and grow.
              </Typography>

              <Typography
                varient="h5"
                fontWeight={600}
                color="#111111"
                fontFamily="Poppins"
                mb="20px"
                sx={{fontSize: {xs: 14, sm: 16, }}}>
                At pozse you will
              </Typography>

              <Stack spacing={2}>
                {[
                  "Explore latest trends",
                  "Navigate powerful fashion creator tools",
                  "Join your favourite fashion creators live",
                  "Get personalized product recommendation",
                  "Access only 100% fashion-focused content",
                  "Grow your Fashion Badge ranks and unlock premium perks",
                  "Play fashion games",
                  "Join communities and contest for Pozse Hall of Style",
                  "Plus lots more...",
                ].map((text, index) => (
                  <Box
                    key={index}
                    sx={{ display: "flex", alignItems: "flex-start" }}>
                    <Box
                      component="img"
                      src={BulletIcon}
                      alt="bullet"
                      sx={{ width: 16, height: 16, mt: "6px", mr: 1.5 }}
                    />
                    <Typography
                      color="black"
                      fontFamily="Poppins"
                      sx={{fontSize: {xs: 12, sm: 15, }}}>
                      {text}
                    </Typography>
                  </Box>
                ))}
              </Stack>
            </Box>

            <Box
              sx={{
                flex: 1,
                position: "relative",
                width: "100%",
                display: "flex",
                justifyContent: "center",
                mb: "20px",
                mt: "40px",
              }}>
              <Box
                component="img"
                src={AboutImg1}
                alt="About Pozse"
                sx={{
                  width: "75%",
                }}
              />
              <Box
                component="img"
                src={AboutImg2}
                alt="Pozse Style"
                sx={{
                  position: "absolute",
                  bottom: "-20%",
                  left: "64%",
                  transform: "translateX(-50%)",
                  width: "60%",
                  zIndex: 2,
                }}
              />
            </Box>
          </Box>
        </Container>
      </Box>
    </section>
  );
};

export default About;
