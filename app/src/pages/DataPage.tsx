import {
  Box,
  Typography,
  Grid,
  Paper,
  Button,
  Divider,
  Card,
  CardContent,
} from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import myImage from "../assets/Figure.png";

const DataPage: React.FC = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 700 }}>
        Data Sources and Visualizations
      </Typography>

      <Card elevation={2} sx={{ mb: 4 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Spotify Artist Collaboration Network
          </Typography>
          <Typography variant="body1" paragraph>
            The first dataset we used is the{" "}
            <a
              href="https://www.kaggle.com/datasets/jfreyberg/spotify-artist-feature-collaboration-network"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "underline" }}
            >
              Spotify Artist Feature Collaboration Network on Kaggle
            </a>
            . It maps collaborations between artists based on song features.
          </Typography>
          <Typography variant="body1" paragraph>
            The dataset consists of 
          </Typography>
          <Grid container spacing={2}>
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                startIcon={<DownloadIcon />}
                href="/downloads/nodes.csv"
                download
              >
                Download nodes.csv
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                startIcon={<DownloadIcon />}
                href="/downloads/edges.csv"
                download
              >
                Download edges.csv
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      <Paper elevation={1} sx={{ p: 2 }}>
        <Typography variant="h6" gutterBottom>
          Network Visualization
        </Typography>
        <Box
          component="img"
          src={myImage}
          alt="Network Visualization"
          sx={{
            width: "100%",
            maxHeight: 400,
            objectFit: "contain",
            borderRadius: 2,
            mt: 1,
          }}
        />
      </Paper>
    </Box>
  );
};

export default DataPage;
