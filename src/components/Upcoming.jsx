import React from "react";
import { Box, Container, Typography, Stack } from "@mui/material";
import BulletIcon from "../assets/image/custom-bullet.png";
import FeaturesImage from "../assets/image/Upcoming-features-image.png";

const Upcoming = () => {
  return (
    <section id="features">
      <Box sx={{ py: 10, backgroundColor: "#fff" }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "end",
              gap: 6,
            }}>
            <Box sx={{ flex: 1.2 }}>
              <Typography
                variant="h4"
                fontWeight={700}
                color="#b71c1c"
                mb={3}
                fontFamily="Poppins"
                sx={{
                  fontSize: {xs: 20, sm: 25}
                }}
                >
                Upcoming Features
              </Typography>

              <Box
                sx={{
                  backgroundColor: "#EEEEEE8F",
                  borderRadius: 10,
                  padding: 4,
                }}>
                <Stack spacing={2}>
                  {[
                    "E-commerce integration",
                    "Virtual dressing rooms",
                    "Leader boards",
                    "Live runway shows",
                    "Direct Brand- Fashion creator message",
                    "Badges for brands to build trust and visibility Style Analytics Dashboard :Track your fashion impact with deep insights on reach , trends and performance",
                    "Trend forecasting AI- Stay ahead of the curve with AI tips on what’s hot , Rising or fading in fashion",
                  ].map((text, index) => (
                    <Box
                      key={index}
                      sx={{
                        display: "flex",
                        alignItems: "flex-start",
                      }}>
                      <Box
                        component="img"
                        src={BulletIcon}
                        alt="bullet"
                        sx={{ width: 16, height: 16, mt: "6px", mr: 1.5 }}
                      />
                      <Typography color="#111111" sx={{fontSize: {xs: 12, sm: 15, }, fontFamily: "Poppins"}}>{text}</Typography>
                    </Box>
                  ))}
                </Stack>
              </Box>
            </Box>

            <Box
              sx={{
                flex: 0.4,
                backgroundColor: "#E6E6E6",
                borderRadius: 10,
                pt: 10,
                pr: 2,
                pl: 2,
                pb: 0,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}>
              <Box
                component="img"
                src={FeaturesImage}
                alt="Upcoming Features"
                sx={{
                  height: 400,
                  objectFit: "contain",
                  borderRadius: "10px",
                }}
              />
            </Box>
          </Box>
        </Container>
      </Box>
    </section>
  );
};

export default Upcoming;
