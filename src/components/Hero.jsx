import React from "react";
import { Box, Typography, Button, Stack, Container } from "@mui/material";
import HeroBg from "../assets/image/Hero-background.png";
import "../index.css";

const Hero = () => {
  return (
    <section id="home">
      <Box
        sx={{
          width: "100vw",
          height: "100vh",
          backgroundImage: `url(${HeroBg})`,
          backgroundSize: "cover",
          backgroundPosition: { md: "auto", xs: "center" },
          backgroundRepeat: "no-repeat",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
        }}>
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(105, 19, 19, 0.55)",
            zIndex: 1,
          }}
        />

        <Container
          sx={{
            zIndex: 2,
            textAlign: "center",
          }}>
          <Box
            maxWidth="md"
            mx="auto"
            sx={{
              display: "flex",
              flexDirection: "column",
              py: "auto",
            }}>
            <Typography
              variant="h2"
              fontWeight={500}
              gutterBottom
              sx={{
                fontFamily: "AbrilFatface",
                letterSpacing: 1,
                fontSize: { md: 75, sm: 65, xs: 45 },
                mt: { xs: "150px" },
              }}>
              Pose. Sell. Influence.
              <br />
              All in one Place
            </Typography>

            {/* CTA Buttons */}
            <Stack
              direction={"row"}
              spacing={2}
              justifyContent="center"
              alignItems="center"
              mt={4}>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#ffffff",
                  color: "#b71c1c",
                  px: { xs: 2.5, md: 4 },
                  borderRadius: 2.5,
                  textTransform: "capitalize",
                  fontFamily: "Poppins",
                }}
                onClick={() =>
                  document
                    .getElementById("about")
                    ?.scrollIntoView({ behavior: "smooth" })
                }>
                Learn More
              </Button>
              <Button
                variant="outlined"
                sx={{
                  color: "#fff",
                  borderColor: "#fff",
                  backgroundColor: "#111111",
                  px: 4,
                  borderRadius: 2.5,
                  textTransform: "capitalize",
                  fontFamily: "Poppins",
                }}
                onClick={() =>
                  document
                    .getElementById("features")
                    ?.scrollIntoView({ behavior: "smooth" })
                }>
                Features
              </Button>
            </Stack>

            <Box
              sx={{
                backgroundColor: "rgba(255, 255, 255, 0.02)",
                backdropFilter: "blur(15px)",
                WebkitBackdropFilter: "blur(15px)",
                border: "1px solid #ffffff",
                borderRadius: 4,
                mt: 10,
                px: 3,
                py: 2,
                maxWidth: 500,
                mx: "auto",
                display: "flex",
                // flexDirection: { xs: "column", sm: "row" },
                justifyContent: "space-between",
                gap: 3,
              }}>
              {[
                { value: "400+", label: "Digital Fashion Experts" },
                { value: "2500", label: "Products" },
                { value: "2000+", label: "Visitors Reviews" },
              ].map((item, index) => (
                <Box
                  key={index}
                  sx={{
                    // display: "flex",
                    // alignItems: "start",
                    // gap: 1.5,
                    // color: "#fff",
                  }}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: {xs: "center", sm: "start"},
                      flexDirection: "column",
                    }}>
                    <Typography
                      fontWeight={700}
                      fontSize="1.5rem"
                      sx={{
                        fontFamily: "AbrilFatface",
                      }}>
                      {item.value}
                    </Typography>

                    <Typography
                      sx={{
                        fontSize: 12,
                        fontFamily: "Poppins",
                      }}>
                      {item.label}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        </Container>
      </Box>
    </section>
  );
};

export default Hero;
