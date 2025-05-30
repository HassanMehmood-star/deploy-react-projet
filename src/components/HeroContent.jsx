import { Box, Typography, Button, Grid } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import WorldHandpic from '../images/WorldHandpic (1).png'; // Adjust the path as necessary
import React, { useRef } from "react";
const HeroContent = () => {
  const sectionRef = useRef(null);

  const scrollDown = () => {
    window.scrollBy({ top: -window.innerHeight, behavior: "smooth" });
  };

  const scrollUp = () => {
    window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
  };

  return (
    <Box sx={{ pt: { xs: 8, md: 12 }, pb: 0, position: "relative" }} ref={sectionRef}>
      {/* Upper Line - scroll down */}
      <Box
        onClick={scrollDown}
        sx={{
          cursor: "pointer",
          position: "absolute",
          left: { xs: "-0.7rem", sm: "1rem", md: "1rem" },
          top: { xs: "23%", sm: "42%", md: "43%" },
          transform: "translateY(-50%)",
          height: { xs: "19%", sm: "14%", md: "15%" },
          width: { xs: "3px", sm: "4px" },
          bgcolor: "#0066ff",
          borderRadius: "4px",
          boxShadow: {
            xs: "0 0 6px 1px rgba(0, 102, 255, 0.7)",
            sm: "0 0 8px 1.5px rgba(0, 102, 255, 0.7)",
            md: "0 0 10px 2px rgba(0, 102, 255, 0.7)",
          },
          zIndex: 2,
          "&::before": {
            content: '""',
            position: "absolute",
            left: { xs: "-1px", sm: "-2px" },
            top: "-1px",
            right: "-2px",
            bottom: "-2px",
            borderRadius: "6px",
            background: "rgba(0, 102, 255, 0.3)",
            filter: { xs: "blur(2px)", sm: "blur(3px)", md: "blur(4px)" },
          },
        }}
      />

      {/* Lower Line - scroll up */}
      <Box
        onClick={scrollUp}
        sx={{
          cursor: "pointer",
          position: "absolute",
          left: { xs: "-0.7rem", sm: "1rem", md: "1rem" },
          top: { xs: "46%", sm: "58%", md: "63%" },
          transform: "translateY(-50%)",
          height: { xs: "19%", sm: "14%", md: "15%" },
          width: { xs: "3px", sm: "4px" },
          bgcolor: "#0066ff",
          borderRadius: "4px",
          boxShadow: {
            xs: "0 0 6px 1px rgba(0, 102, 255, 0.7)",
            sm: "0 0 8px 1.5px rgba(0, 102, 255, 0.7)",
            md: "0 0 10px 2px rgba(0, 102, 255, 0.7)",
          },
          zIndex: 2,
          "&::before": {
            content: '""',
            position: "absolute",
            left: { xs: "-9px", sm: "-8px", md: "-9px" },
            top: "-9px",
            right: "-2px",
            bottom: "-2px",
            borderRadius: "6px",
            background: "rgba(0, 102, 255, 0.3)",
            filter: { xs: "blur(2px)", sm: "blur(3px)", md: "blur(4px)" },
          },
        }}
      />

      {/* Secondary thinner vertical line */}
      
    

      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center', minHeight: '500px' }}>
        {/* Left Content - Text */}
        <Box sx={{ 
          flex: 1,
          pl: { md: 4 },
          pr: { md: 2 },
          mb: { xs: 4, md: 0 }
        }}>
          <Box sx={{ maxWidth: { xs: "100%", md: "100%" } }}>
            <Typography
              variant="overline"
              sx={{
                color: "#ffffff",
                fontSize: { xs: "0.875rem", md: "1rem" },
                fontWeight: 600,
                letterSpacing: 2,
                mb: 2,
                display: "block",
              }}
            >
              SMARTER, FASTER, AND MORE RELIABLE
            </Typography>

            <Typography
              variant="h3"
              sx={{
                mb: 4,
                color: "#ffffff",
                fontWeight: 700,
                fontSize: { xs: "1.75rem", sm: "2.25rem", md: "2.75rem" },
                lineHeight: 1.2,
              }}
            >
              Streamline procurement and enhance your supply chain with 11GS
            </Typography>

            {/* Action Buttons */}
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                gap: 2,
                mt: 4,
              }}
            >
              <Button className="orange-button" endIcon={<ArrowForwardIcon />}>
                EXPLORE COST-EFFECTIVE SOURCING OPTIONS
              </Button>

              <Button
                sx={{ 
                  color: "#ffffff", 
                //   borderColor: "#ffffff",
                //   border: "1px solid #ffffff"
                }}
              >
                BOOK A MEETING
              </Button>
            </Box>
          </Box>
        </Box>

        {/* Right Content - 3D Earth Image */}
        <Box sx={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}>
          <Box
            sx={{
              position: "relative",
              width: "100%",
              height: { xs: 300, md: 500 },
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Box
              component="img"
              src={WorldHandpic}
              alt="Robotic hand holding Earth - representing global supply chain technology"
              sx={{
                width: "auto",
                height: "100%",
                maxWidth: "100%",
                objectFit: "contain",
                position: "relative",
                zIndex: 1
              }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HeroContent;