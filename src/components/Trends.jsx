import React from "react";
import { Box, Container, Typography } from "@mui/material";

import VectorTopLeft from "../assets/image/Discover-the-latest-fashion-trend-vector-top-left.png";
import VectorBottomRight from "../assets/image/Discover-the-latest-fashion-trend-vector-bottom-right.png";
import Image1 from "../assets/image/Discover-the-latest-fashion-trend-image1.png";
import Image2 from "../assets/image/Discover-the-latest-fashion-trend-image2.png";
import Image3 from "../assets/image/Discover-the-latest-fashion-trend-image3.png";
import Image4 from "../assets/image/Discover-the-latest-fashion-trend-image4.png";

const DiscoverTrends = () => {
  return (
    <section
      id="discover-trends"
      style={{ position: "relative" }}>
      <Box sx={{ py: 10, backgroundColor: "#fff", position: "relative" }}>
        <Container maxWidth="lg">
          <Typography
            variant="h4"
            fontWeight={700}
            color="#111"
            textAlign="center"
            mb={6}
            fontFamily="Poppins">
            Discover the Latest Trend
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: 3,
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
              zIndex: 2,
            }}>
            {[Image1, Image2, Image3, Image4].map((img, index) => (
              <Box
                component="img"
                key={index}
                src={img}
                alt={`Fashion trend ${index + 1}`}
                sx={{
                  width: { xs: "75%", md: "23%" },
                  borderRadius: 2,
                }}
              />
            ))}
          </Box>
        </Container>

        <Box
          component="img"
          src={VectorTopLeft}
          alt="Vector Top Left"
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 120,
            zIndex: 1,
          }}
        />
        <Box
          component="img"
          src={VectorBottomRight}
          alt="Vector Bottom Right"
          sx={{
            position: "absolute",
            bottom: 0,
            right: 0,
            width: 120,
            zIndex: 1,
          }}
        />
      </Box>
    </section>
  );
};

export default DiscoverTrends;
