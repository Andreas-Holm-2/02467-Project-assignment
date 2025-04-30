import { Box, Paper } from "@mui/material";
import Main from "./pages/Main";

function App() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(to right, #ece9e6, #ffffff)",
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
