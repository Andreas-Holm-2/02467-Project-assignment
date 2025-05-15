import React from "react";
import {
  Typography,
  Box,
  Divider,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import DataPage from "./DataPage";
import GraphPage from "./GraphPage";
import ExplainerNBpage from "./ExplainerPage";
import Spotify_icon from "../assets/Spotify_icon.png";
import RapNetwork from "../assets/network.png";
import { PaperWrapper } from "../components/PaperWrapper";
import CommunityCountryImage from "../assets/communitiies_showing_country.png";

const DivideSection = () => {
  return (
    <Box sx={{ px: 6, mt: 6 }}>
      <Divider
        sx={{
          mt: 1,
          borderColor: "rgba(0, 0, 0, 0.3)",
          borderBottomWidth: 2,
        }}
      />
    </Box>
  );
};

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

  const tocItems = [
    { label: "Motivation" },
    { label: "Dataset" },
    { label: "Statistics" },
    { label: "Explainer Notebook" },
  ];

  return (
    <Box>
      <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
        American Pop vs. Rap: Exploring Collaboration patterns
      </Typography>

      <Grid container spacing={5} sx={{ my: 1, px: 6 }} alignItems="stretch">
        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <PaperWrapper sx={{ width: "100%" }}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
              Welcome! Here's What We Cover 😊
            </Typography>

            <List disablePadding sx={{ mt: 2 }}>
              {tocItems.map((item, idx) => (
                <React.Fragment key={idx}>
                  <ListItem
                    disableGutters
                    sx={{
                      py: 1.5,
                      pl: 2,
                      pr: 1,
                      borderRadius: 2,
                      alignItems: "center",
                      display: "flex",
                      transition: "background-color 0.2s ease",
                      "&:hover": {
                        backgroundColor: "rgba(0, 0, 0, 0.04)",
                      },
                    }}
                  >
                    <Typography
                      variant="body2"
                      sx={{
                        fontWeight: 600,
                        width: 24,
                        color: "text.secondary",
                        mr: 1.5,
                        textAlign: "right",
                        flexShrink: 0,
                      }}
                    >
                      {idx + 1}.
                    </Typography>

                    <ListItemText
                      primary={item.label}
                      primaryTypographyProps={{
                        variant: "subtitle2",
                        sx: {
                          fontWeight: 500,
                          color: "text.secondary",
                          lineHeight: 1.7,
                          fontSize: "0.95rem", // slightly larger than body2, but smaller than body1
                        },
                      }}
                    />
                  </ListItem>

                  {idx < tocItems.length - 1 && (
                    <Divider
                      variant="inset"
                      component="li"
                      sx={{ ml: 4, borderColor: "#e0e0e0" }}
                    />
                  )}
                </React.Fragment>
              ))}
            </List>
          </PaperWrapper>
        </Grid>
      </Grid>

      <DivideSection />

      <Grid container spacing={5} sx={{ my: 1, px: 6 }} alignItems="stretch">
        {/* Why Section */}

        <Grid item xs={12} md={7}>
          <PaperWrapper>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
              Motivation
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
              Mangler, skal skrives så man får et hurtigt overblik over
              datasættet her og hvis man vil uddybe sit svar kan man hoppe
              niveauet ind.
              {/* Curious about how the dataset was built? Click to explore how the
              data was collected, what assumptions were made, and how we cleaned
              and structured it. You'll also find a breakdown of key dataset
              properties like node types, edge definitions, and genre
              categorization. */}
            </Typography>
          </PaperWrapper>
        </Grid>
      </Grid>

      <Grid container spacing={5} sx={{ my: 1, px: 6 }} alignItems="stretch">
        <Grid item xs={12}>
          <PaperWrapper>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
              Network Statistics
            </Typography>
          </PaperWrapper>
        </Grid>
      </Grid>

      <Grid container spacing={5} sx={{ my: 1, px: 6 }}>
        <Grid item md={12}>
          <PaperWrapper>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
              Communities by artist nationality
            </Typography>
            <Box
              component="img"
              src={CommunityCountryImage}
              alt="Communities by country"
              sx={{
                width: "100%",
                maxHeight: 400,
                objectFit: "contain",
                borderRadius: 2,
                backgroundColor: "#f3f4f6", // optional
                mt: 2,
              }}
            />

            <Divider sx={{ mb: 3 }} />

            <Typography
              variant="body2"
              color="text.secondary"
              paragraph
              sx={{ lineHeight: 1.7 }}
            >
              The Rap network reveals clear and well-separated nationality
              clusters. Distinct groups of <em>North American</em>,{" "}
              <em>Portuguese</em>, <em>French</em>, <em>Dutch</em>, and{" "}
              <em>Polish</em> artists emerge, each forming their own
              collaboration communities. This suggests that Rap artists tend to
              collaborate primarily within national borders.
            </Typography>

            <Typography
              variant="body2"
              color="text.secondary"
              paragraph
              sx={{ lineHeight: 1.7 }}
            >
              In contrast, the Pop network includes a large{" "}
              <em>International</em> cluster, reflecting a broader pattern of
              cross-border collaboration. One possible explanation for this
              difference is the role of language: in Rap, linguistic mastery is
              central — wordplay, rhythm, and local cultural references are
              often defining features. As a result, collaboration may naturally
              stay within shared-language regions.
            </Typography>

            <Typography
              variant="body2"
              color="text.secondary"
              paragraph
              sx={{ lineHeight: 1.7 }}
            >
              Pop, on the other hand, appears to be more globally integrated,
              with nationality playing a weaker role in determining
              collaboration patterns.
            </Typography>

            <Typography
              variant="body2"
              color="text.secondary"
              paragraph
              sx={{ lineHeight: 1.7 }}
            >
              At this scale, the network primarily highlights national
              differences. To better explore genre-specific patterns, we zoom in
              on the <em>North American</em> clusters.
            </Typography>
          </PaperWrapper>
        </Grid>
      </Grid>

      <DivideSection />

      <Grid container spacing={5} sx={{ my: 1, px: 6 }}>
        <Grid item md={12}>
          <PaperWrapper>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
              Zooming in on North American Artists!
            </Typography>

            <Typography
              variant="body2"
              color="text.secondary"
              paragraph
              sx={{ lineHeight: 1.7 }}
            >
              From this point onward, we focus on a subset of the network — the{" "}
              <em>North American</em> clusters. This allows us to better examine
              collaboration patterns specific to Pop and Rap in a shared
              cultural and linguistic context.
            </Typography>

            <Box
              sx={{
                backgroundColor: "#f9f9f9",
                borderRadius: 2,
                p: 2,
                mb: 3,
                border: "1px solid #e0e0e0",
              }}
            >
              <Typography
                variant="subtitle2"
                sx={{ fontWeight: 600, mb: 1, color: "text.primary" }}
              >
                Node and Edge Counts
              </Typography>

              <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                The first number represents nodes; the second represents edges.
              </Typography>

              <Box sx={{ height: 180, width: "100%", mt: 2 }}>
                <TableContainer>
                  <Table size="small">
                    <TableHead>
                      <TableRow>
                        <TableCell>
                          <strong>Genre</strong>
                        </TableCell>
                        <TableCell align="right">
                          <strong>Nodes (Before Zoom)</strong>
                        </TableCell>
                        <TableCell align="right">
                          <strong>Edges (Before Zoom)</strong>
                        </TableCell>
                        <TableCell align="right">
                          <strong>Nodes (NA)</strong>
                        </TableCell>
                        <TableCell align="right">
                          <strong>Edges (NA)</strong>
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow>
                        <TableCell>Rap</TableCell>
                        <TableCell align="right">8,756</TableCell>
                        <TableCell align="right">42,297</TableCell>
                        <TableCell align="right">1,843</TableCell>
                        <TableCell align="right">9,312</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Pop</TableCell>
                        <TableCell align="right">7,210</TableCell>
                        <TableCell align="right">36,512</TableCell>
                        <TableCell align="right">2,156</TableCell>
                        <TableCell align="right">10,021</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </Box>
            </Box>

            <Typography
              variant="subtitle2"
              sx={{ fontWeight: 600, mb: 1, color: "text.primary" }}
            >
              Top 5 Artists by Followers (North America)
            </Typography>

            <Box sx={{ display: "flex", gap: 4 }}>
              <Box>
                <Typography variant="body2" sx={{ fontWeight: 500, mb: 1 }}>
                  Rap
                </Typography>
                {/* Later insert a list or card component here */}
                <Typography variant="caption" color="text.secondary">
                  <span style={{ color: "red" }}>MANGLER</span>.
                </Typography>
              </Box>

              <Box>
                <Typography variant="body2" sx={{ fontWeight: 500, mb: 1 }}>
                  Pop
                </Typography>
                {/* Later insert a list or card component here */}
                <Typography variant="caption" color="text.secondary">
                  <span style={{ color: "red" }}>MANGLER</span>.
                </Typography>
              </Box>
            </Box>
          </PaperWrapper>
        </Grid>
      </Grid>

      <Grid container spacing={5} sx={{ my: 1, px: 6 }} alignItems="stretch">
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
              component="img"
              src={RapNetwork}
              alt="Rap Collaboration Network"
              sx={{
                width: "100%",
                height: 200,
                objectFit: "contain",
                borderRadius: 2,
                backgroundColor: "#f3f4f6",
              }}
            />
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
