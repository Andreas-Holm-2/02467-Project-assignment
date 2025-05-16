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

import rap10Image from "../assets/rap_with_10_communites.png";
import pop10Image from "../assets/Pop_with_10_communites.png";

const NetworkGraphEmbed: React.FC = () => {
  return (
    <div>
      <PaperWrapper elevation={1} sx={{ p: 2 }}>
        <Typography variant="h6" gutterBottom>
          The Two Networks
        </Typography>
        <Typography variant="body1" paragraph>
          The two networks are visualized with Netwulf
        </Typography>

        <Grid container spacing={2}>
          {/* Left Column - Pop Network */}
          <Grid item xs={12} md={6}>
            <Typography variant="subtitle1" gutterBottom>
              Pop artist Network
            </Typography>
            <Box
              component="img"
              src={popImage}
              alt="Pop Network Visualization"
              sx={{
                width: 400,
                height: 400,
                objectFit: "cover",
                borderRadius: "50%",
                display: "block",
                mx: "auto", // center the circle horizontally
                mb: 1,
              }}
            />
            <Typography variant="body2">
              The pop collaboration network is larger and more fragmented, with
              many isolated or loosely connected artists. Yet the network still
              contain large clusters.
            </Typography>{" "}
          </Grid>

          {/* Right Column - Rap Network */}
          <Grid item xs={12} md={6}>
            <Typography variant="subtitle1" gutterBottom>
              Rap artist Network
            </Typography>
            <Box
              component="img"
              src={rapImage}
              alt="Rap Network Visualization"
              sx={{
                width: 400,
                height: 400,
                objectFit: "cover",
                borderRadius: "50%",
                display: "block",
                mx: "auto", // center the circle horizontally
                mb: 1,
              }}
            />
            <Typography variant="body2">
              The rap artist network is smaller and contains less isolated or
              loosely connected artists.
            </Typography>
          </Grid>
        </Grid>
      </PaperWrapper>

      <PaperWrapper sx={{ mt: 4 }}>
        <Typography variant="h6" gutterBottom>
          Communities with louvain
        </Typography>
        <Typography variant="body1" paragraph>
          The Louvain algorithm is used to group artists into communities by
          identifying clusters of densely connected nodes. As shown in the
          visualizations below, the algorithm performs well in uncovering
          meaningful groupings, which the Netwulf engine also seems to capture
          effectively.
        </Typography>

        <Grid container spacing={2}>
          {/* Left Column - Pop Network */}
          <Grid item xs={12} md={6}>
            <Typography variant="subtitle1" gutterBottom>
              Pop artist Network
            </Typography>
            <Box
              component="img"
              src={pop10Image}
              alt="Pop Network Visualization"
              sx={{
                width: 400,
                height: 400,
                objectFit: "cover",
                borderRadius: "50%",
                display: "block",
                mx: "auto", // center the circle horizontally
                mb: 1,
              }}
            />
          </Grid>

          {/* Right Column - Rap Network */}
          <Grid item xs={12} md={6}>
            <Typography variant="subtitle1" gutterBottom>
              Rap artist Network
            </Typography>
            <Box
              component="img"
              src={rap10Image}
              alt="Rap Network Visualization"
              sx={{
                width: 400,
                height: 400,
                objectFit: "cover",
                borderRadius: "50%",
                display: "block",
                mx: "auto", // center the circle horizontally
                mb: 1,
              }}
            />
          </Grid>
        </Grid>
        <Typography variant="body1" paragraph></Typography>
        <Typography variant="body1" paragraph>
          In this project, we also explore how to identify patterns within
          communities and assign nationalities to the largest ones.
        </Typography>
      </PaperWrapper>
    </div>
  );
};

export default NetworkGraphEmbed;
