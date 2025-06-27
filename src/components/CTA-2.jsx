import React from "react";
import {
  Box,
  Typography,
  Button,
  Container,
  TextField,
  Stack,
} from "@mui/material";
import AppleIcon from "@mui/icons-material/Apple";
import { FaGooglePlay } from "react-icons/fa";
import BannerImage from "../assets/image/Download-the-pozse-app-image.png";

const CTASection = () => {
  return (
    <section id="cta">
      <Box sx={{ py: 10, backgroundColor: "#fff", color: "#111" }}>
        <Container maxWidth="lg">
          {/* Flex layout: banner + form */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", lg: "row" },
              gap: 3,
              alignItems: "center",
              justifyContent: "space-between",
            }}>
            {/* CTA Banner */}
            <Box sx={{ flex: 1, display: "flex", alignItems: "center", backgroundColor: "#1e1e1e", borderRadius: 5, px: {xs:1.5, sm: 2, md: 4, lg: 3}, py: {xs: 0, md: 0},  flexDirection: "row", }}>
              {/* Text content */}
              <Box sx={{ flex: 1,
                mr: {xs:-18, sm: -12, md: -20}, py: 2.5 
              }}>
                <Typography
                  variant="h4"
                  fontWeight={500}
                  color="#fff"
                  fontFamily="AbrilFatface"
                  letterSpacing="2px"
                  sx={{
                    justifyContent: "center",
                  fontSize: { xs: "15px", sm: "23px", md: "24px", lg: "30px" },
                    mb: 1.5
                  }}
                  >
                  Download the Pozse App
                </Typography>
                

                {/* Store Buttons */}
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

              {/* Banner Image on Right */}
              <Box 
              sx={{
                flex: 1,
                display: "flex",
                justifyContent: "center",
                pt: "65px",
              }}
              />
              <Box
              component="img"
              src={BannerImage}
              alt="Pozse Banner"
              sx={{
                height: { xs: 180, sm: 270, md: 350, lg: 350 },
                width: "auto",
              }}
              />
            </Box>

            {/* Waitlist Form */}
            <Box
              sx={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                gap: 2,
                backgroundColor: "#EDEDED",
                p: 5,
                borderRadius: 5
              }}>
              <Typography
                variant="h5"
                fontWeight={600}
                fontFamily="Poppins"
                fontSize="15px">
                Join our waitlist and be the first <br />to unlock Pozse premium perks<br /> at launch.
              </Typography>
              <TextField
                variant="filled"
                placeholder="Enter your email"
                sx={{
                  input: {
                    fontFamily: "Poppins",
                    borderRadius: 1,
                    fontSize: 15
                  },
                }}
              />
              <TextField
                variant="filled"
                placeholder="Country"
                sx={{
                  input: {
                    borderRadius: 1,
                    fontFamily: "Poppins",
                    fontSize: 15
                  },
                }}
              />
              <Button
                sx={{
                  backgroundColor: "#CE182F",
                  color: "#fff",
                  textTransform: "capitalize",
                  fontFamily: "Poppins",
                  fontSize: "10px"
                }}>
                Join Now
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
    </section>
  );
};

export default CTASection;
