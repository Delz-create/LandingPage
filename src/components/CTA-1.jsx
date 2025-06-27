import React from "react";
import { Box, Container, Typography, Button, Stack } from "@mui/material";
import { FaGooglePlay } from "react-icons/fa";
import AppleIcon from "@mui/icons-material/Apple";
import BannerImage from "../assets/image/banner-image.png";

const CTA1 = () => {
  return (
    <section id="download-app">
      <Box
        sx={{
          py: 10,
          px: { xs: 0.5, sm: 1, md: 10, lg: 25 },
          backgroundColor: "#EEEEEE",
        }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              backgroundColor: "#1e1e1e",
              borderRadius: { xs: 5 },
              px: { xs: 1.5, sm: 2, md: 4, lg: 3 },
              py: { xs: 0, md: 0 },
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}>
            <Box
              sx={{
                flex: 1,
                display: "flex",
                justifyContent: "center",
                pt: "45px",
              }}
              >
              <Box
                component="img"
                src={BannerImage}
                alt="Pozse Banner"
                sx={{
                  height: { xs: 160, sm: 270, md: 350, lg: 400 },
                  width: "auto",
                }}
              />
            </Box>

            <Box sx={{ flex: 1, ml: {xs:-6, md: -12}, py: { xs: 2.5 } }}>
              <Typography
                variant="h4"
                fontWeight={500}
                color="#fff"
                fontFamily="AbrilFatface"
                letterSpacing="2px"
                sx={{
                  justifyContent: "center",
                  fontSize: { xs: "15px", sm: "23px", md: "24px", lg: "30px" },
                  mb: 1.5,
                }}>
                Start using the Pozse App
              </Typography>
              <Typography
                color="#ccc"
                sx={{
                  fontSize: { xs: "8px", sm: "10px", lg: "15px" },
                  mb: { xs: 1.5, sm: 2 },
                }}>
                At Pozse, explore the latest trends use powerful tools <br />
                for creators, and engage with a dynamiccommunity.
              </Typography>

              <Box
                display="flex"
                sx={{
                  flexDirection: { xs: "column", sm: "row", md: "row" },
                  gap: 1.5,
                }}>
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    backgroundColor: "#fff",
                    color: "#000",
                    px: { xs: 1.5, sm: 2, md: 4 },
                    py: { xs: 0.5, sm: 1 },
                    mb: { xs: 1 },
                    display: "flex",
                    alignItems: "center",
                    gap: 1.5,
                    textAlign: "left",
                    "&:hover": { backgroundColor: "#f1f1f1" },
                    borderRadius: 1.5,
                  }}>
                  <AppleIcon sx={{ fontSize: "15px" }} />
                  <Box>
                    <Typography
                      variant="body2"
                      textTransform="capitalize"
                      fontFamily="Poppins"
                      sx={{ fontSize: 5, lineHeight: 1 }}>
                      Download on
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      textTransform="capitalize"
                      fontFamily="Poppins"
                      sx={{ fontWeight: 600, lineHeight: 1.2, fontSize: 8 }}>
                      App Store
                    </Typography>
                  </Box>
                </Button>

                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    backgroundColor: "#fff",
                    color: "#000",
                    px: { xs: 1.5, sm: 2, md: 4 },
                    py: { xs: 0.5, sm: 1 },
                    mb: { xs: 1 },
                    display: "flex",
                    alignItems: "center",
                    gap: 1.5,
                    textAlign: "left",
                    "&:hover": { backgroundColor: "#f1f1f1" },
                    borderRadius: 1.5,
                  }}
                  >
                  <FaGooglePlay sx={{ fontSize: "15px" }} />
                  <Box>
                    <Typography
                      variant="body2"
                      textTransform="capitalize"
                      fontFamily="Poppins"
                      sx={{ fontSize: 6, lineHeight: 1 }}>
                      Get it on
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      textTransform="capitalize"
                      fontFamily="Poppins"
                      sx={{ fontWeight: 600, lineHeight: 1.2, fontSize: 8 }}>
                      Google Play
                    </Typography>
                  </Box>
                </Button>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </section>
  );
};

export default CTA1;
