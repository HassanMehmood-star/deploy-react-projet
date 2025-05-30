import { Box, Typography } from "@mui/material"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"

const FeatureCards = () => {
  const features = [
    {
      title: "Accelerate long-term growth with 11GS's",
      subtitle: "",
      description:
        "We design strategies to cut costs, boost efficiency, and manage risks, offering solutions from logistics to procurement for sustainable success.",
      linkText: "Let's Co-Create",
      linkColor: "#ff7043",
    },
    {
      title: "Proactive, innovative, and results-focused",
      subtitle: "",
      description:
        "We build impactful partnerships with global leaders. By teaming up, we fast-track success, spark innovation, and revolutionize global sourcing strategies.",
      linkText: "Call to explore global sourcing options",
      linkColor: "#ff7043",
    },
    {
      title: "Driving success through strategic partnerships",
      subtitle: "",
      description:
        "We collaborate to accelerate innovation, drive results, and transform your business globally by aligning expertise to meet your unique sourcing needs.",
      linkText: "Partner for Success",
      linkColor: "#ff7043",
    },
  ]

  return (
    <Box
      sx={{
        mt: { xs: 4, md: 6 }, // Adds margin-top for spacing above the cards
      }}
    >
      {/* Cards Container */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: { xs: 3, md: 4 }, // Gap between cards
          alignItems: "stretch",
        }}
      >
        {features.map((feature, index) => (
          <Box
            key={index}
            sx={{
              flex: 1,
              minWidth: 0,
              bgcolor: "rgba(255, 255, 255, 0.1)", // More transparent white background
              borderRadius: 2,
              p: { xs: 3, md: 4 },
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* Main Title */}
            <Typography
              variant="h6"
              sx={{
                color: "#ffffff", // White text color
                fontWeight: 500,
                mb: 1,
                fontSize: { xs: "1rem", md: "1.1rem" },
                lineHeight: 1.3,
              }}
            >
              {feature.title}
            </Typography>

            {/* Subtitle (if exists) */}
            {feature.subtitle && (
              <Typography
                variant="h6"
                sx={{
                  color: "#ffffff", // White text color
                  fontWeight: 600,
                  mb: 2,
                  fontSize: { xs: "1.1rem", md: "1.25rem" },
                  lineHeight: 1.3,
                }}
              >
                {feature.subtitle}
              </Typography>
            )}

            {/* Description */}
            <Typography
              variant="body2"
              sx={{
                color: "#ffffff", // White text color
                lineHeight: 1.6,
                mb: 3,
                fontSize: { xs: "0.875rem", md: "0.95rem" },
                flexGrow: 1, // Ensures description takes available space
              }}
            >
              {feature.description}
            </Typography>

            {/* Call to Action Link */}
            <Box
              component="a"
              href="#"
              sx={{
                color: feature.linkColor,
                textDecoration: "none",
                fontWeight: 600,
                display: "flex",
                alignItems: "center",
                fontSize: { xs: "0.875rem", md: "0.95rem" },
                "&:hover": {
                  textDecoration: "underline",
                  "& .arrow-icon": {
                    transform: "translateX(4px)",
                  },
                },
              }}
            >
              {feature.linkText}
              <ArrowForwardIcon
                className="arrow-icon"
                sx={{
                  fontSize: 16,
                  ml: 1,
                  transition: "transform 0.3s ease",
                }}
              />
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  )
}

export default FeatureCards