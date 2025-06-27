import React from "react";
import { Box, Typography, Container, Link } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import "../index.css";

const ChildAbusePolicy = () => {
  return (
    <section id="child-abuse-policy">
      <Box sx={{ py: 8, backgroundColor: "#fff", color: "#111" }}>
        <Container maxWidth="md">
          <Link
            href="/"
            underline="hover"
            sx={{
              display: "flex",
              alignItems: "center",
              mb: 4,
              fontWeight: 500,
              color: "#b71c1c",
              fontFamily: "Poppins",
            }}>
            <ArrowBackIcon sx={{ mr: 1 }} />
            Back to Home
          </Link>

          <Typography
            variant="h4"
            fontWeight={500}
            color="#b71c1c"
            mb={2}
            fontFamily="AbrilFatface">
            Pozse Child Sexual Abuse and Exploitation Prevention Policy
          </Typography>

          {/* Body Content */}
          <Typography
            mb={3}
            fontFamily="Poppins">
            At Pozse, we are deeply committed to the safety and protection of
            all individuals, especially minors, who interact with our platform.
            Our policy outlines our unwavering stance against child sexual abuse
            and exploitation and the proactive measures we have implemented to
            prevent such acts.
          </Typography>

          <Typography
            variant="h6"
            fontWeight={600}
            mt={4}
            mb={1}
            fontFamily="Poppins">
            1. Zero Tolerance
          </Typography>
          <Typography
            mb={2}
            fontFamily="Poppins">
            Pozse has a strict zero-tolerance policy for any content, behavior,
            or activity that involves or promotes child sexual abuse or
            exploitation. This includes images, videos, messages, live streams,
            and any other form of interaction or media.
          </Typography>

          <Typography
            variant="h6"
            fontWeight={600}
            mt={4}
            mb={1}
            fontFamily="Poppins">
            2. Proactive Monitoring and Reporting
          </Typography>
          <Typography
            mb={2}
            fontFamily="Poppins">
            Our platform is equipped with advanced moderation tools, including
            AI-based content detection and a dedicated human moderation team.
            Any suspected content or user behavior that violates this policy is
            immediately flagged, reviewed, and reported to appropriate law
            enforcement authorities and child protection agencies.
          </Typography>

          <Typography
            variant="h6"
            fontWeight={600}
            mt={4}
            mb={1}
            fontFamily="Poppins">
            3. User Education and Empowerment
          </Typography>
          <Typography
            mb={2}
            fontFamily="Poppins">
            We encourage all users to report suspicious activities through our
            built-in reporting tools. Pozse regularly educates its community on
            recognizing and preventing online exploitation and abuse.
          </Typography>

          <Typography
            variant="h6"
            fontWeight={600}
            mt={4}
            mb={1}
            fontFamily="Poppins">
            4. Account Actions and Cooperation with Authorities
          </Typography>
          <Typography
            mb={2}
            fontFamily="Poppins">
            Any account found to violate this policy will be immediately
            suspended or permanently banned. Pozse cooperates fully with law
            enforcement investigations and provides necessary data as permitted
            by law.
          </Typography>

          <Typography
            variant="h6"
            fontWeight={600}
            mt={4}
            mb={1}
            fontFamily="Poppins">
            5. Continuous Improvement
          </Typography>
          <Typography
            mb={2}
            fontFamily="Poppins">
            We continuously update our moderation systems, community guidelines,
            and staff training to enhance the detection and prevention of abuse.
          </Typography>

          <Typography
            mt={4}
            fontFamily="Poppins">
            By using Pozse, you agree to uphold and support a safe, inclusive,
            and abuse-free environment for all users. If you encounter any form
            of abuse or exploitation on the platform, please report it
            immediately.
          </Typography>
        </Container>
      </Box>
    </section>
  );
};

export default ChildAbusePolicy;
