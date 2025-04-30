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
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

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

  interface PaperWrapperProps {
    children: React.ReactNode;
    elevation?: number;
    onClick?: () => void;
    sx?: object;
  }

  const PaperWrapper: React.FC<PaperWrapperProps> = ({
    children,
    elevation = 3,
    onClick,
    sx = {},
  }) => {
    const isClickable = Boolean(onClick);

    return (
      <Paper
        elevation={elevation}
        sx={{
          p: 3,
          position: "relative",
          ...(isClickable && {
            transition: "0.3s",
            cursor: "pointer",
            "&:hover": {
              boxShadow: elevation + 3,
            },
          }),
          ...sx,
        }}
        onClick={onClick}
      >
        {isClickable && (
          <IconButton
            size="small"
            onClick={(e) => {
              e.stopPropagation();
              if (onClick) {
                onClick();
              }
            }}
            sx={{ position: "absolute", top: 8, right: 8 }}
          >
            <ArrowForwardIcon fontSize="small" />
          </IconButton>
        )}
        {children}
      </Paper>
    );
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Collaboration Cultures in Pop and Rap
      </Typography>

      <Grid container spacing={5} sx={{ mt: 2, px: 6 }}>
        {/* Why Section */}
        <Grid item xs={12} md={7}>
          <PaperWrapper elevation={2}>
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
          </PaperWrapper>
        </Grid>

        {/* Dataset Overview */}
        <Grid item xs={12} md={5}>
          <PaperWrapper
            elevation={3}
            onClick={() => setView("data")}
            sx={{ minHeight: 300 }}
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
          </PaperWrapper>
        </Grid>

        {/* Graph Placeholder */}
        <Grid item xs={12}>
          <PaperWrapper
            elevation={3}
            onClick={() => {
              console.log("not implemented");
            }}
            sx={{ minHeight: 300 }}
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
          </PaperWrapper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Main;
