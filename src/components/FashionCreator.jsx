import React from "react";
import { Box, Container, Typography, Grid } from "@mui/material";
import Vector1 from "../assets/image/Upcoming-features-vector2.png";
import Vector2 from "../assets/image/Upcoming-features-vector1.png";

const benefits = [
  "Fashion only Contents: Create , share and connect with styles. No Noise just fashion ",
  "AI powered fashion feed: Get personalized stream of style and fashion creators that matches your DNA",
  "Creator badges & Ranks: Unlock prestige and perks as you climb the ranks with your fashion influence",
  "Built in fashion contests: Get Qualified to create Daily,weekly, monthly and seasonal challenges to earn fame,prizes,badge upgrades and points to qualify for pozse annual Hall of style Become a pozse king/Queen ",
  "Go live : Style your audience in real time and monetize buying gifts and pozse coins",
  "Join Live fashion shows/ events",
  "Play fashion games and earn coins and points",
  " Virtual Dressing Rooms: Try on outfits digitally and showcase limitless looks without ever changing clothes ",
];

const Destination = () => {
  return (
    <section
      id="destination"
      style={{ position: "relative" }}>
      <Box sx={{ py: 10, backgroundColor: "#FBFBFB", position: "relative" }}>
        <Container maxWidth="lg">
          <Typography
            variant="h4"
            fontWeight={700}
            color="#b71c1c"
            textAlign="center"
            mb={6}
            fontFamily="Poppins"
            sx={{
              fontSize: {xs: 20, sm: 25}
            }}>
            As a fashion creator, designer or brand, <br /> Pozse is your
            ultimate destination.
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              gap: 3,
              flexDirection: { xs: "column", md: "row" },
            }}>
            {benefits.map((item, index) => (
              <Box
                key={index}
                sx={{
                  flexBasis: { xs: "100%", md: "48%" },
                  background:
                    "linear-gradient(to right,rgb(66, 11, 11) 10%, #111111 90%)",
                  color: "#fff",
                  borderRadius: 2,
                  px: 3,
                  py: 2,
                  fontWeight: 500,
                  fontFamily: "Poppins",
                  fontSize: {xs: 12, sm: 15,}
                }}>
                {item}
              </Box>
            ))}
          </Box>

          <Typography
            mt={8}
            textAlign="center"
            fontWeight={600}
            fontSize="1.2rem"
            color="#111"
            fontFamily="Poppins"
            xs={{
              fontSize: {xs: 20, sm: 25}
            }}>
            Tired of getting buried under dances <br /> memes and noise? <br />
            <Box
              component="span"
              color="#b71c1c"
              fontWeight={700}>
              Pozse is your spotlight.
            </Box>
          </Typography>
        </Container>

        <Box
          component="img"
          src={Vector1}
          alt="Vector Left"
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: {xs: 80 ,sm: 100, md: 150},
            zIndex: 1,
          }}
        />
        <Box
          component="img"
          src={Vector2}
          alt="Vector Right"
          sx={{
            position: "absolute",
            bottom: 0,
            right: 0,
            width: {xs: 80, sm: 100, md: 150},
            zIndex: 0,
          }}
        />
      </Box>
    </section>
  );
};

export default Destination;
