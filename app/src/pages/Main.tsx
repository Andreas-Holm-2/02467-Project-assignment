import React from "react";
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
import { useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import DataPage from "./DataPage";

const Main: React.FC = () => {
  const [view, setView] = useState<"main" | "data">("main");
  if (view !== "main") {
    let content = null;

    switch (view) {
      case "data":
        content = <DataPage />;
        break;

      // Add other cases here as needed
      default:
        content = null;
    }

    return (
      <Box sx={{ minHeight: "400px" }}>
        <IconButton onClick={() => setView("main")} sx={{ mb: 2 }}>
          <ArrowBackIcon />
        </IconButton>
        {content}
      </Box>
    );
  }

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Collaboration Cultures in Pop and Rap
      </Typography>

      <Grid container spacing={5} sx={{ mt: 2, px: 6 }}>
        {/* Justification / Why this topic */}
        <Grid item xs={12} md={7}>
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
              Why?
            </Typography>
            <Typography variant="body1" paragraph>
              Music is more than sound - it's culture, identity, and connection.
              We were curious: do Pop and Rap artists collaborate differently,
              and what does that reveal about their communities?
            </Typography>
            <Typography variant="body1" paragraph>
              Driven by this question, we built a dataset of North American
              artists and mapped their collaborations as a network. Each link
              tells a story of artistic partnership, and through these
              connections, we explore how two major genres shape - and are
              shaped by - collaboration.
            </Typography>

            <Typography variant="body1" paragraph>
              Starting from a global dataset of over 150,000 artists, we refined
              our focus to Pop and Rap in North America - two genres often said
              to differ in how artists connect. This let us ask: What defines a
              musical community, and how do collaboration patterns reflect
              cultural differences?
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} md={5}>
          <Paper
            elevation={3}
            sx={{
              p: 3,
              minHeight: 300,
              transition: "0.3s",
              "&:hover": {
                boxShadow: 6,
              },
              cursor: "pointer",
            }}
            onClick={() => setView("data")}
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
        <Grid item xs={12}>
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
              console.log("not implemented");
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
      </Grid>
    </Box>
  );
};

export default Main;
