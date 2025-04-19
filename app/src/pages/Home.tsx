import React from "react";
import {
  Paper,
  Typography,
  Box,
  Divider,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import Grid from "@mui/material/Grid";

type HomeProps = {
  selectedIndex: number;
  setSelectedIndex: (index: number) => void;
};

const Home: React.FC<HomeProps> = ({ selectedIndex, setSelectedIndex }) => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Collaboration Cultures in Pop and Rap
      </Typography>

      <Grid container spacing={5} sx={{ mt: 2, px: 6 }}>
        {/* Data Paper */}
        <Grid item xs={12} md={6}>
          <Paper
            elevation={3}
            sx={{
              p: 3,
              minHeight: 300,
              transition: "0.3s",
              "&:hover": {
                boxShadow: 6,
              },
            }}
            onClick={() => {
              setSelectedIndex(1);
            }}
          >
            <Typography variant="h6" gutterBottom>
              Dataset Overview
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Typography variant="body2">Artists:</Typography>
                <Typography variant="h5">1,240</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body2">Collaborations:</Typography>
                <Typography variant="h5">3,841</Typography>
              </Grid>
              <Grid item xs={12}>
                <Divider sx={{ my: 2 }} />
              </Grid>
              <Grid item xs={12}>
                <Typography variant="subtitle2">Genres:</Typography>
                <List dense>
                  <ListItem>
                    <ListItemText primary="Pop (587 nodes)" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Rap (413 nodes)" />
                  </ListItem>
                </List>
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        {/* Analytics Paper */}
        <Grid item xs={12} md={6}>
          <Paper
            elevation={3}
            sx={{
              p: 3,
              minHeight: 300,
              transition: "0.3s",
              "&:hover": {
                boxShadow: 6,
              },
            }}
            onClick={() => {
              setSelectedIndex(2);
            }}
          >
            <Typography variant="h6" gutterBottom>
              Dummy Graph Visualization
            </Typography>
            <Box
              sx={{
                width: "100%",
                height: 200,
                background: "linear-gradient(135deg, #d1d5db, #f3f4f6)",
                borderRadius: 2,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontStyle: "italic",
                color: "#9ca3af",
              }}
            >
              (Network graph placeholder)
            </Box>
            <Typography variant="caption" sx={{ mt: 1, display: "block" }}>
              This space is reserved for your network graph (D3.js / vis.js
              etc.)
            </Typography>
          </Paper>
        </Grid>

        {/* Justification / Why this topic */}
        <Grid item xs={12}>
          <Paper
            elevation={2}
            sx={{
              p: 3,
              transition: "0.3s",
              "&:hover": {
                boxShadow: 3,
              },
            }}
          >
            <Typography variant="h6" gutterBottom>
              Why This Topic?
            </Typography>
            <Typography variant="body1" paragraph>
              We chose to investigate collaboration cultures in Pop and Rap to
              understand whether different genres foster distinct patterns of
              cooperation between artists. Rap music is often said to have a
              stronger collaboration culture, and we aim to test this using
              network analysis.
            </Typography>
            <Typography variant="body1" paragraph>
              By analyzing artist collaborations on Spotify, we hope to identify
              genre-based subgroups, measure network connectivity, and explore
              the themes common within these musical clusters. This study offers
              insights into the structure of digital music culture through the
              lens of computational social science.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
