import { Box, Paper, Grid, Button } from "@mui/material";
import Main from "./pages/Main";
import myImage from "./assets/Background_image_good.jpg";
import { useEffect, useRef, useState } from "react";
import ExplainerPage from "./pages/ExplainerPage";

function App() {
  const [offsetY, setOffsetY] = useState(0);
  const ticking = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          setOffsetY(window.scrollY * 0.1); // 10% scroll effect
          ticking.current = false;
        });
        ticking.current = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box
      sx={{
        position: "relative",
        minHeight: "100vh",
        overflow: "hidden",
      }}
    >
      {/* Background Image with Smooth Parallax */}
      <Box
        sx={{
          position: "fixed",
          inset: 0,
          zIndex: 0,
          overflow: "hidden",
          opacity: 0.7,
          "&::before, &::after": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "200%",
            backgroundImage: `url(${myImage})`,
            backgroundSize: "cover",
            backgroundRepeat: "repeat-y",
            backgroundPosition: `center ${-offsetY}px`,
            filter: "blur(5px)",
            willChange: "background-position",
          },
          "&::after": {
            transform: "scaleY(-1)",
            top: "100%",
          },
        }}
      />

      {/* Dark overlay */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0, 0, 0, 0.35)",
          zIndex: 1,
        }}
      />

      {/* Foreground Content */}
      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: 4,
          minHeight: "100vh",
        }}
      >
        <Paper
          elevation={10}
          sx={{
            maxWidth: "1000px",
            width: "100%",
            padding: 4,
            borderRadius: 3,
            backgroundColor: "rgba(255, 255, 255, 0.7)",
            backdropFilter: "blur(4px)",
          }}
        >
          <Main />

          <Grid container spacing={5} sx={{ my: 1, px: 6 }}>
            <Grid item xs={12}>
              <Paper
                sx={{
                  p: 3,
                  borderRadius: 3,
                  minHeight: 100,
                  position: "relative",
                  background:
                    "linear-gradient(135deg, #e8f0ff,rgb(251, 244, 246))",
                  boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                  transition: "box-shadow 0.3s",
                  cursor: "pointer",
                  "&:hover": {
                    filter: "brightness(0.95)",
                  },
                  display: "flex",
                  justifyContent: "center",
                  verticalAlign: "center",
                  alignItems: "center",
                }}
              >
                <Button
                  variant="contained"
                  component="a"
                  sx={{
                    backgroundColor: "#5E6764",
                    "&:hover": {
                      backgroundColor: "#5E6764",
                      filter: "brightness(1.2)",
                    },
                  }}
                  href="https://andreas-holm-2.github.io/02467-Project-assignment/explainer.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Go to explainer notebook
                </Button>
              </Paper>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </Box>
  );
}

export default App;
