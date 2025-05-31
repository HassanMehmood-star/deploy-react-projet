import React from "react";
import { Box, Container } from "@mui/material";
import HeroContent from "./HeroContent";
import FeatureCards from "./FeatureCards";
import Navbar from "./Navbar"; // Assuming you have a Navbar component

// Helper to generate star elements with a white color
const generateStars = (count = 500) => {
  const stars = [];
  for (let i = 0; i < count; i++) {
    const size = Math.random() * 2 + 1; // 1px to 3px
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    const duration = Math.random() * 5 + 2;

    const starColor = 'rgb(255, 255, 255)'; // All stars are white

    stars.push(
      <Box
        key={i}
        className="star"
        sx={{
          position: "absolute",
          width: `${size}px`,
          height: `${size}px`,
          borderRadius: "50%",
          backgroundColor: starColor,
          opacity: 0.1,
          top: `${y}%`,
          left: `${x}%`,
          animation: `twinkle ${duration}s ease-in-out infinite alternate`,
        }}
      />
    );
  }
  return stars;
};

// Inject keyframes globally (MUI doesn't support @keyframes in sx directly)
const twinkleStyle = document.createElement("style");
twinkleStyle.innerHTML = `
  @keyframes twinkle {
    from { opacity: 0.2; }
    to { opacity: 1; }
  }
`;
document.head.appendChild(twinkleStyle);

const HeroSection = () => {
  return (
    <Box
      className="star-background"
      sx={{
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
        // Gradient background: black at the top, transitioning to bluish at the bottom
       background: "linear-gradient(to bottom, #0a0a0a 30%, #0d1a3b 110%)",
        pb: 8,
      }}
    >
      {generateStars(500)} {/* Adds 500 random-positioned white stars */}
      
      <Container maxWidth="xl" sx={{ position: "relative", zIndex: 1 }}>
        <Navbar />
        <HeroContent />
        <FeatureCards />
         <HeroContent />
        <FeatureCards />
      </Container>
    </Box>
  );
};

export default HeroSection;



