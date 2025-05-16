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
import { DownloadDone } from "@mui/icons-material";
import { PaperWrapper } from "../components/PaperWrapper";
import rapImage from "../assets/Rap_no_communities.png";
import popImage from "../assets/Pop_no_communities.png";

const DataPage: React.FC = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 700 }}>
        Data Sources and Visualizations
      </Typography>

      <PaperWrapper sx={{ mb: 4 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Spotify Artist Collaboration dataset
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
            . The dataset contains artist data for ~20k artists whose songs made
            it to the Spotify weekly charts and ~136k additional artists who had
            at least one feature with at least one of the chart artists. As a
            result, the dataset is of very great size with a total ~156k artists
            and ~300k collaborations.
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
                    <TableCell>
                      <strong>Download</strong>
                    </TableCell>{" "}
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
                    <TableCell>
                      <Button
                        component="a"
                        href="/downloads/nodes.csv"
                        download
                        color="inherit"
                        startIcon={<DownloadIcon />}
                      ></Button>
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
                    <TableCell>
                      <Button
                        component="a"
                        href="/downloads/edges.csv"
                        download
                        color="inherit"
                        startIcon={<DownloadIcon />}
                      ></Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Typography>
        </CardContent>
      </PaperWrapper>

      <PaperWrapper sx={{ mb: 4 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            10.000 Most-Listened Artists within the US dataset
          </Typography>
          <Typography variant="body1" paragraph>
            Given the extensive size of the overall collaboration network, we
            decided to narrow our focus by concentrating on the most-listened
            artists within the United States. To achieve this, we incorporated
            the{" "}
            <a
              href="https://www.kaggle.com/datasets/spoorthiuk/us-top-10k-artists-and-their-popular-songs"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "underline" }}
            >
              US Top 10K Artists and Their Popular Songs
            </a>{" "}
            dataset, also available on Kaggle. This allowed us to define a more
            targeted scope for our analysis—prioritizing influential artists
            while excluding lesser-known figures whose limited reach would
            contribute minimally to our study of collaboration patterns.
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
                    <TableCell>
                      <strong>Download</strong>
                    </TableCell>{" "}
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>artists.csv</TableCell>
                    <TableCell>1.18 MB</TableCell>
                    <TableCell>9,487</TableCell>
                    <TableCell>0</TableCell>
                    <TableCell>
                      Name, ID, Gender, Age, Country, Country, Genres,
                      Popularity, Followers, URL
                    </TableCell>
                    <TableCell>
                      <Button
                        component="a"
                        href="/downloads/Artists.csv"
                        download
                        color="inherit"
                        startIcon={<DownloadIcon />}
                      ></Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Typography>
        </CardContent>
      </PaperWrapper>

      <PaperWrapper sx={{ mb: 4 }}>
        <Typography variant="h6" gutterBottom>
          Our Constructed Dataset
        </Typography>
        <Typography variant="body1" paragraph>
          The final network is constructed as the intersection between the two
          datasets. A visualization is shown below.
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
        <Typography variant="body1" paragraph>
          This final dataset forms the foundation for the two networks we will
          analyze and compare. The image illustrates how the two networks pop
          and rap are derived as subsets of the full dataset, based on the
          artists associated with each genre.
        </Typography>
      </PaperWrapper>
    </Box>
  );
};

export default DataPage;
