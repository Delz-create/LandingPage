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

          <Typography
            mb={2}
            fontFamily="Poppins">
            Effective Date: June 2025
          </Typography>

          <Typography
            mb={2}
            fontFamily="Poppins">
            Version:1.0
          </Typography>

          <Typography
            mb={2}
            fontFamily="Poppins">
            Applies To: All users, partners, content contributors, moderators,
            and developers of the Pozse platform.
          </Typography>

          <Typography
            variant="h6"
            fontWeight={600}
            mt={4}
            mb={1}
            fontFamily="Poppins">
            1. Introduction
          </Typography>

          <Typography
            mb={3}
            fontFamily="Poppins">
            At Pozse, the safety and protection of minors is a core,
            non-negotiable value. We are committed to preventing and eradicating
            any form of Child Sexual Abuse Material (CSAM), child exploitation
            or inappropriate interactions with or involving minors on our
            platform. This policy outlines our approach to detection, reporting,
            moderation, removal, and legal compliance in alignment with Google
            Play policies, U.S. federal law, international standards, and
            ethical responsibilities.
          </Typography>

          <Typography
            variant="h6"
            fontWeight={600}
            mt={4}
            mb={1}
            fontFamily="Poppins">
            2. Scope and Definitions
          </Typography>
          <Typography
            mb={2}
            fontFamily="Poppins">
            This policy applies to all features of Pozse, including:
            <br />
            User profiles and bios
            <br />
            Uploaded photos and videos
            <br />
            Live streams
            <br />
            Direct messages (DMs)
            <br />
            Comments and community interactions
            <br />
            Any third-party integrations or uploads
            <br />
            Definitions:
            <br />
            Child: Anyone under the age of 18.
            <br />
            CSAM .Any visual depiction of sexually explicit conduct involving a
            minor, including real,
            <br />
            synthetic, cartoon, or AI-generated content.
            <br />
            Child Exploitation: Any activity that abuses, harms, or profits from
            the vulnerability of a child,
            <br />
            including grooming, sextortion, trafficking, and coerced modeling.
            <br />
          </Typography>

          <Typography
            variant="h6"
            fontWeight={600}
            mt={4}
            mb={1}
            fontFamily="Poppins">
            3. Policy Objectives
          </Typography>
          <Typography
            mb={2}
            fontFamily="Poppins">
            Pozse aims to:
            <br />
            1. Prevent child exploitation and CSAM on the platform.
            <br />
            2. Detect and remove any such material swiftly and permanently.
            <br />
            3. Report violations to appropriate authorities, including
            NCMEC(U.S.) and local law enforcement.
            <br />
            4. Cooperate with authorities during investigations.
            <br />
            5. Educate and train staff and users on child safety.
            <br />
            6. Enforce strict content and interaction boundaries around
            children.
            <br />
          </Typography>

          <Typography
            variant="h6"
            fontWeight={600}
            mt={4}
            mb={1}
            fontFamily="Poppins">
            4. Content Prohibitions
          </Typography>
          <Typography
            mb={2}
            fontFamily="Poppins">
            The following are strictly prohibited on Pozse and will result in
            immediate account termination and reporting to authorities:
            <br />
            4.1 Visual Content
            <br />
            Any real or simulated imagery of children involved in sexual acts or
            sexually suggestive poses. Nudity or partial nudity involving
            minors. Use of AI or digital tools to create synthetic CSAM or
            exploitative content. Any attempt to “age regress” adult content to
            appear as if involving minors.
            <br />
            4.2 Textual Content
            <br />
            Descriptions or narratives of sexual acts with or involving
            children. Grooming messages or luring attempts, whether explicit or
            suggestive. Sharing or requesting personal information from minors.
            <br />
            4.3 Interaction Violations
            <br />
            Adults attempting to contact minors for personal, romantic, or
            sexual purposes. Solicitation of underage modeling or fashion images
            outside approved, verified contexts. Encouraging minors to engage in
            provocative behavior
          </Typography>

          <Typography
            variant="h6"
            fontWeight={600}
            mt={4}
            mb={1}
            fontFamily="Poppins">
            5. Age Verification and Access Controls
          </Typography>
          <Typography
            mb={2}
            fontFamily="Poppins">
            5.1 Age Gates
            <br />
            Users must confirm they are 18+during sign-up. Accounts identified
            as under 18 are limited to strict Safe Mode with restricted content
            exposure.
            <br />
            5.2 Upload Restrictions
            <br />
            No child accounts can upload media or participate in public live
            streams without guardian-verified consent and moderator oversight.
            <br />
            5.3 AI-Aided Age Detection
            <br />
            Pozse uses AI-based age estimation tools on uploaded content to flag
            potential child involvement in inappropriate content.
          </Typography>

          <Typography
            variant="h6"
            fontWeight={600}
            mt={4}
            mb={1}
            fontFamily="Poppins">
            6. Reporting and Removal Procedures
          </Typography>
          <Typography
            mb={2}
            fontFamily="Poppins">
            6.1 Detection
            <br />
            Pozse uses AI models trained on industry best practices (e.g.,
            Microsoft’s PhotoDNA, Google CSAI Match) to scan uploads.
            <br />
            Human moderators review flagged content within 15 minutes for
            high-risk uploads.
            <br />
            6.2 Reporting
            <br />
            Any CSAM or exploitative content is immediately reported to: NCMEC
            (National Center for Missing & Exploited Children) Relevant local
            law enforcement (depending on jurisdiction)
            <br />
            6.3 Removal
            <br />
            Content is removed and stored securely for law enforcement access
            (encrypted, access-controlled).
            <br />
            Offending user’s account is permanently banned, and identifying
            metadata is preserved for investigation.
          </Typography>

          <Typography
            variant="h6"
            fontWeight={600}
            mt={4}
            mb={1}
            fontFamily="Poppins">
            7. User Reporting Tools{" "}
          </Typography>
          <Typography
            mb={2}
            fontFamily="Poppins">
            Users can report suspected CSAM or child exploitation with 1-click
            flag tools on all content types. Reports are prioritized and
            escalated to human moderators within 5 minutes All reports are
            anonymized to protect reporters.
          </Typography>

          <Typography
            variant="h6"
            fontWeight={600}
            mt={4}
            mb={1}
            fontFamily="Poppins">
            8. Staff and Moderator Training
          </Typography>
          <Typography
            mb={2}
            fontFamily="Poppins">
            All Pozse staff and contractors undergo mandatory training on:
            <br />
            Recognizing CSAM and grooming behaviors.
            <br />
            Legal obligations for reporting.
            <br />
            Use of moderation tools and escalation procedures.
            <br />
            Trauma-informed handling of sensitive cases.
            <br />
          </Typography>

          <Typography
            variant="h6"
            fontWeight={600}
            mt={4}
            mb={1}
            fontFamily="Poppins">
            9. Legal and Regulatory Compliance
          </Typography>
          <Typography
            mb={2}
            fontFamily="Poppins">
            Pozse complies with:
            <br />
            United States federal laws (COPPA, PROTECT Act, 18 U.S.C. § 2258A)
            Google Play Developer Content Policies UNCRC Article 34 on
            protection from sexual exploitation EU GDPR for Children, especially
            Article 8 (age of digital consent) NCMEC reporting obligations
            Interpol & INHOPE guidelines
          </Typography>

          <Typography
            variant="h6"
            fontWeight={600}
            mt={4}
            mb={1}
            fontFamily="Poppins">
            10. Data Handling and Privacy
          </Typography>
          <Typography
            mb={2}
            fontFamily="Poppins">
            CSAM reports and data are never stored beyond legal obligations.
            Access to such data is **restricted to legal teams only* Victim data
            is never shared publicly or with third parties.
          </Typography>

          <Typography
            variant="h6"
            fontWeight={600}
            mt={4}
            mb={1}
            fontFamily="Poppins">
            11. Partnership and Collaboration
          </Typography>
          <Typography
            mb={2}
            fontFamily="Poppins">
            Pozse partners or intends to partner with:
            <br />
            NCMEC
            <br />
            Thorn
            <br />
            Tech Coalition
            <br />
            Google Safe Browsing
            <br />
            Online Trust Alliance
            <br />
            Local child protection agencies
            <br />
          </Typography>

          <Typography
            variant="h6"
            fontWeight={600}
            mt={4}
            mb={1}
            fontFamily="Poppins">
            12. Enforcement and Penalties
          </Typography>
          <Typography
            mb={2}
            fontFamily="Poppins">
            Any breach of this policy will result in:
            <br />
            Immediate account termination
            <br />
            Device bans and fingerprinting
            <br />
            Full cooperation with law enforcement
            <br />
            Civil and criminal legal actions where appropriate
          </Typography>

          <Typography
            variant="h6"
            fontWeight={600}
            mt={4}
            mb={1}
            fontFamily="Poppins">
            13. Appeals and Transparency
          </Typography>
          <Typography
            mb={2}
            fontFamily="Poppins">
            Users may appeal removal decisions through a dedicated Child Safety
            Review Board Quarterly transparency reports will be published on
            CSAM detections, removals, and enforcement actions.
          </Typography>

          <Typography
            variant="h6"
            fontWeight={600}
            mt={4}
            mb={1}
            fontFamily="Poppins">
            14. Review and Updates
          </Typography>
          <Typography
            mb={2}
            fontFamily="Poppins">
            This policy is reviewed bi-annually or upon significant legal or
            platform changes. Updates will be communicated to users via email,
            platform notices, and developer documentation.
          </Typography>

          <Typography
            variant="h6"
            fontWeight={600}
            mt={4}
            mb={1}
            fontFamily="Poppins">
            15. Contact and Reporting Channels
          </Typography>
          <Typography
            mb={2}
            fontFamily="Poppins">
            To Report Abuse or CSAM:
            <br />
            [abuse@pozse.com](mailto :abuse@pozse.com) | In-app reporting tools
            <br />
            For Authorities or NGOs:
            <br />
            press@pozse.com mailto:press@pozse.com
            <br />
            Pozse Inc
          </Typography>
        </Container>
      </Box>
    </section>
  );
};

export default ChildAbusePolicy;
