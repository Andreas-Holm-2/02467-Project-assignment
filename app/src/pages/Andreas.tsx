import {
  Paper,
  Typography,
  Box,
  Divider,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Grid,
} from "@mui/material";

import myImage from "../assets/Figure.png";

const AndreasPage: React.FC = () => {
  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Dataset
      </Typography>
      <img
        src={myImage}
        alt="Description"
        style={{ maxWidth: "100%", borderRadius: 8 }}
      />
    </Box>
  );
};

export default AndreasPage;
