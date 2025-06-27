import React from "react";
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Stack,
  IconButton,
  Link,
} from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";

import Logo from "../assets/image/Logo.png";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#111",
        color: "#fff",
        paddingTop: 40,
        paddingBottom: 20,
      }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: "flex-start",
            gap: 5,
          }}>
          <Box sx={{ flex: 1 }}>
            <Box
              component="img"
              src={Logo}
              alt="Pozse Logo"
              sx={{ height: 40, mb: 2 }}
            />
            <Typography
              mb={2}
              fontFamily="Poppins">
              Revolutionizing Fashion Through Digital Social Interaction
            </Typography>

            <Stack
              direction="row"
              spacing={2}>
              {[
                InstagramIcon,
                LinkedInIcon,
                FacebookIcon,
                TwitterIcon,
                PinterestIcon,
              ].map((Icon, index) => (
                <IconButton
                  key={index}
                  sx={{
                    color: "#fff",
                    backgroundColor: "#000",
                    "&:hover": { backgroundColor: "#333" },
                  }}>
                  <Icon fontSize="small" />
                </IconButton>
              ))}
            </Stack>
          </Box>

          <Box sx={{ flex: 1 }}>
            <Typography
              fontWeight={600}
              mb={2}
              fontFamily="Poppins">
              Be the first to get updates from us, subscribe to our Newsletter
            </Typography>
            <Stack
              direction="row"
              spacing={2}
              flexWrap="wrap">
              <TextField
                variant="filled"
                placeholder="Enter your email"
                fullWidth
                sx={{
                  input: { backgroundColor: "#fff", borderRadius: 1 },
                  flex: 1,
                }}
              />
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#b71c1c",
                  color: "#fff",
                  textTransform: "capitalize",
                  px: 4,
                  mt: { xs: 2, md: 0 },
                  fontFamily: "Poppins",
                }}>
                Subscribe
              </Button>
            </Stack>
          </Box>
        </Box>

        <Box
          sx={{
            mt: 6,
            display: "flex",
            justifyContent: { xs: "center", md: "space-between" },
            flexWrap: "wrap",
            textAlign: "center",
            gap: 2,
          }}>
          <Link
            href="#"
            underline="hover"
            sx={{ color: "#aaa" }}
            fontFamily="Poppins">
            Privacy Policy
          </Link>
          <Link
            href="#"
            underline="hover"
            sx={{ color: "#aaa" }}
            fontFamily="Poppins">
            Terms of Services
          </Link>
          <Link
            href="/child-abuse-policy"
            underline="hover"
            sx={{ color: "#aaa" }}
            fontFamily="Poppins">
            Child safety policy
          </Link>
        </Box>
      </Container>
    </footer>
  );
};

export default Footer;
