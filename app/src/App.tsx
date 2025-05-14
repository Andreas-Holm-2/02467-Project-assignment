import { Box, Paper } from "@mui/material";
import Main from "./pages/Main";
import backGroundImage from "./assets/background_image_green_spotify.jpg";

function App() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundImage: `url(${backGroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 4,
      }}
    >
      <Paper
        elevation={3}
        sx={{
          maxWidth: "1000px",
          width: "100%",
          padding: 4,
          borderRadius: 3,
        }}
      >
        <Main />
      </Paper>
    </Box>
  );
}

export default App;
