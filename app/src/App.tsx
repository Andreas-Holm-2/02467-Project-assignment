import { Box, Paper } from "@mui/material";
import Main from "./pages/Main";
import myImage from "./assets/Background_image_good.jpg";
import { useEffect, useRef, useState } from "react";

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
          backgroundImage: `url(${myImage})`,
          backgroundSize: "cover",
          backgroundPosition: `center ${-offsetY}px`,
          backgroundRepeat: "no-repeat",
          zIndex: 0,
          opacity: 0.7,
          filter: "blur(5px)",
          willChange: "background-position", // GPU-accelerated
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
        </Paper>
      </Box>
    </Box>
  );
}

export default App;
