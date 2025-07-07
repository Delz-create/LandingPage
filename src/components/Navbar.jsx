import React, { useState, useEffect, useRef } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import "../index.css";
import Logo from "../assets/image/Logo.png";

const navLinks = ["Home", "About", "Features", "SignUp"];

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const observer = useRef(null);

  useEffect(() => {
    const sectionIds = navLinks.map((link) =>
      link.toLowerCase().replace(/ /g, "-")
    );
    const sections = sectionIds.map((id) => document.getElementById(id));

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    observer.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          const linkName = navLinks.find(
            (name) => name.toLowerCase().replace(/ /g, "-") === id
          );
          if (linkName) setActiveSection(linkName);
        }
      });
    }, options);

    sections.forEach((section) => {
      if (section) observer.current.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        if (section && observer.current) observer.current.unobserve(section);
      });
    };
  }, []);

  const handleNavClick = (section) => {
    const target = document.getElementById(
      section.toLowerCase().replace(/ /g, "-")
    );
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setDrawerOpen(false);
  };

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          backgroundColor: "rgba(255, 255, 255, 0.02)",
          backdropFilter: "blur(15px)",
          WebkitBackdropFilter: "blur(15px)",
        }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box
            component="img"
            src={Logo}
            alt="Pozse Logo"
            sx={{ height: 40 }}
          />

          {!isMobile ? (
            <Box sx={{ display: "flex", gap: 3 }}>
              {navLinks.map((text) => (
                <Button
                  key={text}
                  onClick={() => handleNavClick(text)}
                  sx={{
                    fontWeight: activeSection === text ? 700 : 500,
                    textTransform: "capitalize",
                    fontFamily: "Poppins",
                    color:
                      text === "Sign Up"
                        ? "#fff"
                        : activeSection === text
                        ? "#b71c1c"
                        : "#fff",
                    backgroundColor:
                      text === "Sign Up"
                        ? "#b71c1c"
                        : activeSection === text
                        ? "transparent"
                        : "transparent",
                    px: 2,
                    py: 1,
                    borderRadius: 2,
                    transition: "0.3s ease",
                    "&:hover": {
                      backgroundColor:
                        text === "Sign Up"
                          ? "#a71515"
                          : "rgba(255,255,255,0.25)",
                    },
                    textShadow: "1px 1px 1px #111111",
                  }}>
                  {text}
                </Button>
              ))}
            </Box>
          ) : (
            <>
              <IconButton
                onClick={() => setDrawerOpen(true)}
                edge="end">
                <MenuIcon sx={{ color: "#ffffff" }} />
              </IconButton>
              <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={() => setDrawerOpen(false)}>
                <Box
                  sx={{ width: 250 }}
                  role="presentation">
                  <IconButton
                    onClick={() => setDrawerOpen(false)}
                    sx={{ float: "right" }}>
                    <CloseIcon />
                  </IconButton>
                  <List>
                    {navLinks.map((text) => (
                      <ListItem
                        button
                        key={text}
                        onClick={() => handleNavClick(text)}
                        selected={activeSection === text}>
                        <ListItemText
                          primary={text}
                          primaryTypographyProps={{
                            fontWeight: activeSection === text ? 700 : 500,
                            color:
                              activeSection === text ? "#b71c1c" : "inherit",
                          }}
                        />
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </Drawer>
            </>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
