import { Box, Paper } from "@mui/material";
import Main from "./pages/Main";
import myImage from "./assets/Background_image_good.jpg";

function App() {
  return (
    <Box
      sx={{
        position: "relative",
        minHeight: "100vh",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url(${myImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          zIndex: 0,
          opacity: 0.7,
        }}
      />

      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0, 0, 0, 0.35)",
          zIndex: 1,
        }}
      />

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
