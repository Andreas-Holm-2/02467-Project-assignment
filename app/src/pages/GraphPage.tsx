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


const NetworkGraphEmbed: React.FC = () => {
  return (
    <PaperWrapper elevation={1} sx={{ p: 2 }}>
      <Typography variant="h6" gutterBottom>
        The Two Networks
      </Typography>
      <Typography variant="body1" paragraph>
        The the networks are visualized with Netwulf
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
          <Typography variant="body2">The pop network...</Typography>
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
          <Typography variant="body2">The rap network...</Typography>
        </Grid>
      </Grid>
    </PaperWrapper>
  );
};

export default NetworkGraphEmbed;
