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
import GraphPage from "./GraphPage";
import ExplainerNBpage from "./ExplainerPage";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Spotify_icon from "../assets/Spotify_icon.png";

const Main: React.FC = () => {
  const [view, setView] = useState<"main" | "data" | "Graph" | "Explainer">(
    "main"
  );
  if (view !== "main") {
    let content = null;

    switch (view) {
      case "data":
        content = <DataPage />;
        break;

      case "Graph":
        content = <GraphPage />;
        break;

      case "Explainer":
        content = <ExplainerNBpage />;
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
          borderRadius: 3,
          height: "85%",
          minHeight: 300,
          position: "relative",
          transition: "box-shadow 0.3s",
          ...(isClickable && {
            cursor: "pointer",
            "&:hover": {
              boxShadow: 8,
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
            <ArrowForwardIcon fontSize="medium" />
          </IconButton>
        )}
        {children}
      </Paper>
    );
  };

  return (
    <Box>
      <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
        American Pop vs. Rap: Exploring Collaboration patterns
      </Typography>

      <Grid container spacing={5} sx={{ mt: 2, px: 6 }} alignItems="stretch">
        {/* Why Section */}
        <Grid item xs={12} md={7}>
          <PaperWrapper>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
              Motivation Behind the Analysis
            </Typography>

            <Typography
              variant="body2"
              color="text.secondary"
              paragraph
              sx={{ lineHeight: 1.7 }}
            >
              Music is more than sound — it's culture, identity, and connection.
              We were curious: do Pop and Rap artists collaborate differently,
              and what does that reveal about their communities?
            </Typography>

            <Typography
              variant="body2"
              color="text.secondary"
              paragraph
              sx={{ lineHeight: 1.7 }}
            >
              Driven by this question, we built a dataset of North American
              artists and mapped their collaborations as a network. Each link
              tells a story of artistic partnership, and through these
              connections, we explore how two major genres shape — and are
              shaped by — collaboration.
            </Typography>

            <Typography
              variant="body2"
              color="text.secondary"
              paragraph
              sx={{ lineHeight: 1.7 }}
            >
              Starting from a global dataset of over 150,000 artists, we refined
              our focus to Pop and Rap in North America — two genres often said
              to differ in how artists connect. This let us ask: What defines a
              musical community, and how do collaboration patterns reflect
              cultural differences?
            </Typography>
          </PaperWrapper>
        </Grid>

        <Grid item xs={12} md={5}>
          <PaperWrapper
            elevation={3}
            onClick={() => {
              setView("data");
              console.log("not implemented");
            }}
          >
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
              Dataset Overview
            </Typography>

            {/* Stats Section */}
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={4}>
                <Box>
                  <Typography variant="body2" color="text.secondary">
                    Nodes
                  </Typography>
                  <Typography variant="h5" sx={{ fontWeight: 600 }}>
                    8,756
                  </Typography>
                </Box>
              </Grid>

              <Grid item xs={4}>
                <Box>
                  <Typography variant="body2" color="text.secondary">
                    Edges
                  </Typography>
                  <Typography variant="h5" sx={{ fontWeight: 600 }}>
                    42,297
                  </Typography>
                </Box>
              </Grid>

              <Grid item xs={4}>
                <Box display="flex" justifyContent="flex-end">
                  <Box
                    component="img"
                    src={Spotify_icon}
                    alt="Spotify Icon"
                    sx={{
                      width: 40,
                      height: 40,
                      borderRadius: "8px",
                    }}
                  />
                </Box>
              </Grid>
            </Grid>

            <Divider sx={{ my: 3 }} />

            {/* Description */}
            <Typography
              variant="subtitle2"
              gutterBottom
              sx={{ fontWeight: 600 }}
            >
              What’s inside the dataset?
            </Typography>
            <Typography variant="body2" color="text.secondary" lineHeight={1.6}>
              Curious about how the dataset was built? Click to explore how the
              data was collected, what assumptions were made, and how we cleaned
              and structured it. You'll also find a breakdown of key dataset
              properties like node types, edge definitions, and genre
              categorization.
            </Typography>
          </PaperWrapper>
        </Grid>
      </Grid>

      <Grid container spacing={5} sx={{ mt: 2, px: 6 }} alignItems="stretch">
        {/* Graph Placeholder */}
        <Grid item xs={12}>
          <PaperWrapper
            elevation={3}
            onClick={() => {
              setView("Graph");
              console.log("not implemented");
            }}
          >
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
              Network visualization
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

        <Grid item xs={12}>
          <PaperWrapper
            elevation={3}
            onClick={() => {
              setView("Explainer");
              console.log("not implemented");
            }}
          >
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
              Explainer notebook
            </Typography>{" "}
          </PaperWrapper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Main;
