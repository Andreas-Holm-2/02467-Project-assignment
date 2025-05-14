import {
  Box,
  Typography,
  Grid,
  Paper,
  Button,
  Divider,
  Card,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
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
            . The dataset
          </Typography>
          <Typography variant="body1" paragraph>
            The dataset consists of a csv file containing the network nodes
            (corresponding to artists) and the network edges (each corresponding
            to a collaboration between two artists)
            <TableContainer component={Paper} sx={{ mt: 2 }}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>
                      <strong>File</strong>
                    </TableCell>
                    <TableCell>
                      <strong>File size</strong>
                    </TableCell>
                    <TableCell>
                      <strong>Number of rows</strong>
                    </TableCell>
                    <TableCell>
                      <strong>Number of columns</strong>
                    </TableCell>
                    <TableCell>
                      <strong>Features</strong>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>nodes.csv</TableCell>
                    <TableCell>9.98 MB</TableCell>
                    <TableCell>156,422</TableCell>
                    <TableCell>6</TableCell>
                    <TableCell>
                      spotify_id, name, follower count, popularity, genres and
                      chart_hits
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>edges.csv</TableCell>
                    <TableCell>13.82 MB</TableCell>
                    <TableCell>300.386</TableCell>
                    <TableCell>2</TableCell>
                    <TableCell>
                      Two colums id_0 & id_1, each row represting a
                      collaboration between two artists.
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
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
          <Typography variant="body1" paragraph>
            In addition to . It maps collaborations between artists based on
            song features.
          </Typography>
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
