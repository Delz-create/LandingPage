import React from "react";
import { Box, Typography, Container } from "@mui/material";
import GoLiveImage from "../assets/image/Go-live-image.png";
import FashionModerationImage from "../assets/image/Fashion-moderation.png";
import PersonalizedProductImage from "../assets/image/Personalized-product-image.png";
import VectorTopRight from "../assets/image/Personalized-product-vector-top-right.png";

const TopFeatures = () => {
  return (
    <section id="top-features">
      <Box sx={{ py: 10, backgroundColor: "#fff" }}>
        <Container maxWidth="lg">
          <Typography
            variant="h4"
            fontWeight={700}
            color="#b71c1c"
            textAlign="center"
            mb={6}
            fontFamily="Poppins">
            Top Features in Pozse
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 3,
              justifyContent: "space-between",
            }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                flex: { xs: "100%", md: "31%" },
                borderRadius: 3,
                border: "1px solid #777777",
                p: 3,
                backgroundColor: "#F6F6F6",
              }}>
              <Box>
                <Typography
                  variant="h6"
                  fontWeight={600}
                  mb={1}
                  fontFamily="Poppins"
                  fontSize="1.5rem">
                  Go live and connect
                </Typography>
                <Typography
                  mb={2}
                  fontSize="0.9rem"
                  fontFamily="Poppins">
                  Join and go live with friends and have fun sharing good time
                </Typography>
              </Box>
              <Box
                component="img"
                src={GoLiveImage}
                alt="Go live button"
                sx={{ width: 170, pt: 6 }}
              />
            </Box>

            <Box
              sx={{
                flex: { xs: "100%", md: "64%" },
                position: "relative",
                borderRadius: 3,
                border: "1px solid #777777",
                p: 3,
                backgroundColor: "#F6F6F6",
              }}>
              <Typography
                variant="h6"
                fontWeight={600}
                mb={1}
                fontFamily="Poppins"
                sx={{
                  fontSize: { xs: "1rem", md: "1.5rem" },
                }}>
                Personalized product recommendation.
              </Typography>
              <Typography
                fontSize="0.9rem"
                fontFamily="Poppins">
                Get custom fashion suggestions based on your style and trends.
              </Typography>

              <Box
                component="img"
                src={PersonalizedProductImage}
                alt="Personalized Product"
                sx={{ width: "80%", borderRadius: 2 }}
              />

              <Box
                component="img"
                src={VectorTopRight}
                alt="Decorative vector"
                sx={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  width: { xs: 170, md: 270 },
                  zIndex: 0,
                }}
              />
            </Box>

            <Box
              sx={{
                flex: { xs: "100%", md: "48%" },
                borderRadius: 3,
                border: "1px solid #777777",
                backgroundColor: "#EDEDED",
                p: 3,
                position: "relative",
                overflow: "hidden",
                color: "#fff",
              }}>
              <Box
                component="img"
                src={FashionModerationImage}
                alt="Fashion moderation"
                sx={{
                  position: "absolute",
                  top: 15,
                  right: { xs: -50, md: -150 },
                  height: { xs: "200px", md: "500px" },
                  zIndex: 0,
                }}
              />

              <Box sx={{ position: "relative", zIndex: 1 }}>
                <Typography
                  variant="h6"
                  fontWeight={600}
                  mb={1}
                  color="#000000"
                  fontFamily="Poppins"
                  sx={{
                    fontSize: { xs: "1rem", md: "1.5rem" },
                  }}>
                  Fashion Moderation
                </Typography>
                <Typography
                  fontSize="0.9rem"
                  color="#000000"
                  fontFamily="Poppins">
                  Ensure all fashion content meets community standards
                  <br /> and stays trend-focused.
                </Typography>
              </Box>
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                flex: { xs: "100%", md: "20%" },
                borderRadius: 3,
                border: "1px solid grey",
                p: 3,
                backgroundColor: "#f9f9f9",
              }}>
              <Box>
                <Typography
                  variant="h6"
                  fontWeight={600}
                  mb={1}
                  fontFamily="Poppins">
                  Be inspired
                </Typography>
                <Typography
                  mb={2}
                  fontSize="0.9rem"
                  fontFamily="Poppins">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maxime tempore blanditiis assumenda consequuntur, pariatur
                  culpa quia nesciunt minus quae. Reiciendis aut similique illo
                  minus quasi culpa ad iure repellendus aperiam!
                </Typography>
              </Box>
              <Box
                component="img"
                src={GoLiveImage}
                alt="Go live button"
                sx={{ width: 170, pt: 6 }}
              />
            </Box>
          </Box>
        </Container>
      </Box>
    </section>
  );
};

export default TopFeatures;
