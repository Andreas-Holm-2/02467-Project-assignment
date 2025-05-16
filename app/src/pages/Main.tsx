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
import Analysis_NA_page from "./Network_analysis";
import GraphPage from "./GraphPage";
import ExplainerNBpage from "./ExplainerPage";
import Spotify_icon from "../assets/Spotify_icon.png";
import RapNetwork from "../assets/network.png";
import { PaperWrapper } from "../components/PaperWrapper";
import CommunityCountryImage from "../assets/communitiies_showing_country.png";
import AssortativityPOP from "../assets/assort_pop.png";
import AssortativityRAP from "../assets/assort_rap.png";
import ModularityPOP from "../assets/mod_pop.png";
import ModularityRAP from "../assets/mod_rap.png";
import FrontGraph from "../assets/NIcegraph.png";
import FrontGraph2 from "../assets/Pop_graph_for_front_page.png";
import Agenda from "../components/Agenda";
import WordCloudPreview from "../components/WordCloudPreview";
import WordCloud from "../components/WordCloud";
import pop10Image from "../assets/Pop_with_10_communites.png";

import CommunityCountriesRap from "../assets/Rap_network.png";
import CommunityCountriesPop from "../assets/Pop_network.png";

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
  const [view, setView] = useState<
    "main" | "data" | "Graph" | "Explainer" | "Analysis_NA_page" | "WordCloud"
  >("main");
  if (view !== "main") {
    let content = null;

    switch (view) {
      case "data":
        content = <DataPage />;
        break;
      case "WordCloud":
        content = <WordCloud />;
        break;

      case "Graph":
        content = <GraphPage />;
        break;

      case "Explainer":
        content = <ExplainerNBpage />;
        break;
      case "Analysis_NA_page":
        content = <Analysis_NA_page />;
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
      <Box sx={{ px: 6, mt: 4 }}>
        <Box
          sx={{
            textAlign: "center",
            py: 8,
            px: 4,
            background: "linear-gradient(135deg, #e8f0ff, #ffe4ec)",
            borderRadius: 4,
            boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.05)",
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontWeight: 800,
              color: "#1a1a1a",
              mb: 2,
              fontSize: { xs: "2rem", md: "3rem" },
            }}
          >
            Pop vs. Rap: Exploring Collaboration Patterns
          </Typography>

          <Typography
            variant="subtitle1"
            sx={{
              color: "text.secondary",
              maxWidth: "700px",
              mx: "auto",
              fontSize: { xs: "1rem", md: "1.25rem" },
            }}
          >
            A data-driven exploration of how two iconic music genres build and
            bridge communities through collaboration.
          </Typography>
        </Box>
      </Box>

      <Grid container spacing={8} sx={{ my: 1, px: 6 }} alignItems="stretch">
        {/* Agenda section - left column */}
        <Grid item xs={12} md={4}>
          <Agenda />
        </Grid>

        {/* Image section - right column */}
        <Grid item xs={12} md={8}>
          <Box sx={{ display: "flex", justifyContent: "center", mt: -2 }}>
            <Box
              component="img"
              src={FrontGraph}
              alt="Communities by country"
              sx={{
                width: "99%", // take full width of its column
                maxWidth: "600px", // optional max size
                objectFit: "contain",
                borderRadius: 2,
                backgroundColor: "#f3f4f6",
                mt: 2,
              }}
            />
          </Box>
        </Grid>
      </Grid>

      <DivideSection />

      <Grid container spacing={5} sx={{ my: 1, px: 6 }} alignItems="stretch">
        <Grid item xs={12} md={6}>
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
              Music is more than sound - it's culture, identity, and connection.
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
              connections, we explore how two major genres shape - and are
              shaped by - collaboration.
            </Typography>

            <Typography
              variant="body2"
              color="text.secondary"
              paragraph
              sx={{ lineHeight: 1.7 }}
            >
              Starting from a global dataset of over 150,000 artists, we refined
              our focus to Pop and Rap in North America - two genres often said
              to differ in how artists connect. This let us ask: What defines a
              musical community, and how do collaboration patterns reflect
              cultural differences?
            </Typography>
          </PaperWrapper>
        </Grid>
        <Grid item xs={12} md={6}>
          <PaperWrapper>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
              Introduction
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              paragraph
              sx={{ lineHeight: 1.7 }}
            >
              This webpage presents a network analysis of pop and rap culture.
              It begins with an introduction to a derived dataset that forms the
              foundation for the rest of the presentation.
            </Typography>

            <Typography
              variant="body2"
              color="text.secondary"
              paragraph
              sx={{ lineHeight: 1.7 }}
            >
              Visualisations of social networks in rap and pop are displayed,
              along with relevant network statistics, in the 'Networks' and
              'Network Statistics' sections, respectively.
            </Typography>

            <Typography
              variant="body2"
              color="text.secondary"
              paragraph
              sx={{ lineHeight: 1.7 }}
            >
              The analysis then focuses on North American rap and pop cultures
              to explore genre-specific patterns. This is followed by a
              quantitative analysis examining modularity and assortativity, as
              well as text analysis of communities within North American rap and
              pop.
            </Typography>
          </PaperWrapper>
        </Grid>
      </Grid>

      <Grid container spacing={5} sx={{ my: 1, px: 6 }}>
        <Grid item xs={12} md={12}>
          <PaperWrapper
            elevation={3}
            onClick={() => {
              setView("data");
              console.log("not implemented");
            }}
          >
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
              Dataset
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
              What's inside the dataset?
            </Typography>
            <Typography variant="body2" color="text.secondary" lineHeight={1.6}>
              Clicking on this container provides more detail on how the social
              network is constructed. Each node represents an artist, and an
              edge exists between artists A and B if they have previously
              collaborated. Starting from a large network with approximately
              150,000 nodes and 300,000 edges, we filter out any artists not
              found among the 10,000 most-listened-to in the US. The resulting
              social network includes artists from a wide range of genres,
              including pop, rock, rap, country, and more.
            </Typography>
          </PaperWrapper>
        </Grid>
      </Grid>

      <Grid container spacing={5} sx={{ my: 1, px: 6 }} alignItems="stretch">
        {/* Graph Placeholder */}
        <Grid item xs={6}>
          <PaperWrapper
            elevation={3}
            onClick={() => {
              setView("Graph");
              console.log("not implemented");
            }}
          >
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
              Networks
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
              Each artist in the graph is associated with a genre property,
              which lists all the genres the artist is involved in. Using this
              information, we derived subgraphs for <strong>Pop</strong> and{" "}
              <strong>Rap</strong>.
            </Typography>

            <Box
              component="img"
              src={pop10Image}
              alt="Rap Collaboration Network"
              sx={{
                width: "100%",
                borderRadius: 2,
                backgroundColor: "#f3f4f6",
              }}
            />

            <Typography variant="body2" color="text.secondary">
              <br></br>
              <b>Read more </b> by clickling on me 🤓
            </Typography>
          </PaperWrapper>
        </Grid>

        <Grid item xs={6}>
          <PaperWrapper>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
              Network Statistics
            </Typography>
            <TableContainer>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell>
                      <strong> </strong>
                    </TableCell>
                    <TableCell align="right">
                      <strong>RAP</strong>
                    </TableCell>
                    <TableCell align="right">
                      <strong>POP</strong>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>Number of nodes</TableCell>
                    <TableCell align="right">1149</TableCell>
                    <TableCell align="right">4161</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Number of edges</TableCell>
                    <TableCell align="right">6860</TableCell>
                    <TableCell align="right">13,698</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Density</TableCell>
                    <TableCell align="right">0.0104</TableCell>
                    <TableCell align="right">0.00158</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Number of isolated nodes</TableCell>
                    <TableCell align="right">143</TableCell>
                    <TableCell align="right">758</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Is connected</TableCell>
                    <TableCell align="right">False</TableCell>
                    <TableCell align="right">False</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Number of connected components</TableCell>
                    <TableCell align="right">153</TableCell>
                    <TableCell align="right">801</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Size of largest component</TableCell>
                    <TableCell align="right">961</TableCell>
                    <TableCell align="right">3286</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Average Degree (largest component)</TableCell>
                    <TableCell align="right">11.94</TableCell>
                    <TableCell align="right">6.58</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Median Degree</TableCell>
                    <TableCell align="right">5.00</TableCell>
                    <TableCell align="right">3.00</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Maximum Degree</TableCell>
                    <TableCell align="right">104</TableCell>
                    <TableCell align="right">162</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
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
              sx={{
                display: "flex",
                gap: 2,
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              {/* Left Column - Pop */}
              <Box sx={{ maxWidth: 400, textAlign: "center" }}>
                <Typography variant="subtitle1" gutterBottom>
                  Pop network Communities by country
                </Typography>
                <Box
                  component="img"
                  src={CommunityCountriesPop}
                  alt="Pop Collaboration Network"
                  sx={{
                    width: "100%",
                    borderRadius: 2,
                    backgroundColor: "#f3f4f6",
                  }}
                />
              </Box>

              {/* Right Column - Rap */}
              <Box sx={{ maxWidth: 400, textAlign: "center" }}>
                <Typography variant="subtitle1" gutterBottom>
                  Rap network Communities by country
                </Typography>
                <Box
                  component="img"
                  src={CommunityCountriesRap}
                  alt="Rap Collaboration Network"
                  sx={{
                    width: "100%",
                    borderRadius: 2,
                    backgroundColor: "#f3f4f6",
                  }}
                />
              </Box>
            </Box>

            <Typography
              variant="body2"
              color="text.secondary"
              paragraph
              sx={{ lineHeight: 1.7, mt: 2 }}
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
              Up until now we've considered the network and its communities
              across countries as an entirety. Therefore, to go more in depth
              with our network analysis, we zoom in on the North American
              cluster in both graphs. <br></br>
              This will create two new subgraphs <b>POP-NA</b> & <b>RAP-NA</b>
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
                Creating the networks POP-NA & RAP-NA
              </Typography>

              <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                Listed below is the new size of the two sub networks:
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
                          <strong>Nodes Before Zoom</strong>
                        </TableCell>
                        <TableCell align="right">
                          <strong>Edges Before Zoom</strong>
                        </TableCell>
                        <TableCell align="right">
                          <strong>Nodes After Zoom</strong>
                        </TableCell>
                        <TableCell align="right">
                          <strong>Edges After zoom</strong>
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow>
                        <TableCell>Rap</TableCell>
                        <TableCell align="right">1149</TableCell>
                        <TableCell align="right">6860</TableCell>
                        <TableCell align="right">349</TableCell>
                        <TableCell align="right">3305</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Pop</TableCell>
                        <TableCell align="right">4161</TableCell>
                        <TableCell align="right">13.698</TableCell>
                        <TableCell align="right">953</TableCell>
                        <TableCell align="right">5321</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </Box>
            </Box>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 0 }}>
              This allows us to engage in a more focused network analysis, where
              country doesn't serve as a confounder for the communities.{" "}
              <br></br>
            </Typography>

            <Typography
              variant="subtitle2"
              sx={{ fontWeight: 600, mb: 1, mt: 2, color: "text.primary" }}
            >
              Top 5 Artists by Followers (North America)
            </Typography>

            <Box sx={{ display: "flex", gap: 4 }}>
              <Box>
                <Typography variant="body2" sx={{ fontWeight: 500, mb: 1 }}>
                  Pop
                </Typography>
                {/* Later insert a list or card component here */}
                <Typography variant="caption" color="text.secondary">
                  Ed Sheeran<br></br>Ariana Grande<br></br>Billie Eilish
                  <br></br>Justin Bieber<br></br>Taylor Swift
                </Typography>
              </Box>

              <Box>
                <Typography variant="body2" sx={{ fontWeight: 500, mb: 1 }}>
                  Rap
                </Typography>
                {/* Later insert a list or card component here */}
                <Typography variant="caption" color="text.secondary">
                  Drake<br></br> Eminem<br></br> Bad Bunny<br></br> Post Malone
                  <br></br> XXXTENTACION
                </Typography>
              </Box>
            </Box>
          </PaperWrapper>
        </Grid>
      </Grid>

      <Grid container spacing={5} sx={{ my: 1, px: 6 }}>
        <Grid item xs={12}>
          <PaperWrapper
            onClick={() => {
              setView("Analysis_NA_page");
            }}
          >
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
              Analyzing the North American networks
              <Typography variant="body2" color="text.secondary">
                Our network analysis will be based on network science metrics
                such as assortativity & modularity, while also relying on
                correlation between spotify popularity and connectivity.
                <br></br>
                <br></br>
                Click here to read more about our analysis 🧮
              </Typography>
              <Box
                component="img"
                src={AssortativityPOP}
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
            </Typography>
          </PaperWrapper>
        </Grid>
      </Grid>

      <Grid container spacing={5} sx={{ my: 1, px: 6 }}>
        <Grid item xs={12}>
          <WordCloudPreview setView={setView} />
        </Grid>
      </Grid>

      <Grid container spacing={5} sx={{ my: 1, px: 6 }}>
        <Grid item xs={12}>
          <PaperWrapper elevation={3}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
              Summarized Results{" "}
            </Typography>{" "}
          </PaperWrapper>
        </Grid>
      </Grid>

      <Grid container spacing={5} sx={{ my: 1, px: 6 }}>
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
