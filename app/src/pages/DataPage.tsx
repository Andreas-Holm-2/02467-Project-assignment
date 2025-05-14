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

const DataPage: React.FC = () => {
  return (
    <Box>
      <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
        The datasets we used:
      </Typography>
      The first dataset we found was Spotify Artist Feature Collaboration
      Network (available on kaggle) link to kaggle:
      https://www.kaggle.com/datasets/jfreyberg/spotify-artist-feature-collaboration-network?resource=download&fbclid=IwZXh0bgNhZW0CMTEAYnJpZBEwWHN3UGZOMWdyTjZDUkhPbAEeHaEefW9OZn5ZGH9mLporjUxCmCO7TpZl2B7GEfFMoXO_x4sDev2eCS7EWpY_aem_34VNBynImFYJ0hzOYo6HXQ
      The nodes.csv is available for download *here* edges.csv is available for
      downlaod *here*
      <img
        src={myImage}
        alt="Description"
        style={{ maxWidth: "100%", borderRadius: 8 }}
      />
    </Box>
  );
};

export default DataPage;

