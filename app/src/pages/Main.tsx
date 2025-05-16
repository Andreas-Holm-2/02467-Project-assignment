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
import Agenda from "../components/Agenda";

import Pop1Cloud from "../assets/pop_community_1.png";
import Pop2Cloud from "../assets/pop_community_2.png";
import Rap1Cloud from "../assets/rap_community_1.png";
import Rap2Cloud from "../assets/rap_community_2.png";

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
    "main" | "data" | "Graph" | "Explainer" | "Analysis_NA_page"
  >("main");
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

        <Grid container spacing={8} sx={{ my: 1, px: 6}} alignItems="stretch">
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
              Initially using the global dataset we divided the dataset into two
              subgroups. One containing artists participating mostly in pop and
              rap, where mostly is defined as the genre which the given artist
              had most occurences of in his/hers "genre" property from the
              Global Dataset from Kaggle. Then working on these divded
            </Typography>
              
            <Typography
              variant="body2"
              color="text.secondary"
              paragraph
              sx={{ lineHeight: 1.7 }}
            >
              Using this divided allowed for doing analysis in a global view
              where it was found that collaboration most oftenly occured in
              countries, however mostly in rap not as much in pop. Additionally
              it was noticable that there existed a North American cluster i.e.
              one containing artists from north america.
            </Typography>

            <Typography
              variant="body2"
              color="text.secondary"
              paragraph
              sx={{ lineHeight: 1.7 }}
            >
              Diving into the North American clusters on both pop and rap we
              carried out further analyiss using WordClouds to figure out music
              differed which led to finding key differences between rap and pop
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
              Network
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

            <Typography>
              <span style={{ color: "red" }}>
                {" "}
                MANGLER ALT MULIGT INTRO. F.eks. Nodes/Edges{" "}
              </span>
            </Typography>
          </PaperWrapper>
        </Grid>

        <Grid item xs={6}>
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

      <Grid container spacing={5} sx={{ my: 1, px: 6 }}>
        <Grid item xs={12}>
          <PaperWrapper
            onClick={() => {
              setView("Analysis_NA_page");
            }}
          >
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
              Analyzing the North American networks
              <Typography>
                Up until now we've considered the network and its communities
                across countries as an entirety. Therefore, to go more in depth
                with our network analysis, we zoom in on the North American
                cluster in both graphs.
              </Typography>
              <Typography>
                Click here to read more about our analysis :)
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
          <PaperWrapper>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
              Word Clouds
            </Typography>

            <Typography
              variant="body2"
              color="text.secondary"
              paragraph
              sx={{ lineHeight: 1.7 }}
            >
              Each word cloud below represents one detected community within the
              Pop or Rap network, based on lyrics used by artists. Larger words
              are more frequent. Below each cloud, you'll see notable artists
              from that community.
            </Typography>

            <Grid container spacing={4}>
              {/* Pop Community 1 */}
              <Grid item xs={12} md={6}>
                <Box
                  component="img"
                  src={Pop1Cloud}
                  alt="Pop Community 1 Word Cloud"
                  sx={{ width: "50%", borderRadius: 2 }}
                />
                <Typography variant="subtitle2" sx={{ mt: 2, fontWeight: 600 }}>
                  Pop Community 1
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  ac lacus sed urna vulputate.
                </Typography>
              </Grid>

              {/* Pop Community 2 */}
              <Grid item xs={12} md={6}>
                <Box
                  component="img"
                  src={Pop2Cloud}
                  alt="Pop Community 2 Word Cloud"
                  sx={{ width: "50%", borderRadius: 2 }}
                />
                <Typography variant="subtitle2" sx={{ mt: 2, fontWeight: 600 }}>
                  Pop Community 2
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Cras placerat orci nec arcu bibendum, vel luctus metus
                  gravida. Pellentesque in commodo quam.
                </Typography>
              </Grid>

              {/* Rap Community 1 */}
              <Grid item xs={12} md={6}>
                <Box
                  component="img"
                  src={Rap1Cloud}
                  alt="Rap Community 1 Word Cloud"
                  sx={{ width: "50%", borderRadius: 2 }}
                />
                <Typography variant="subtitle2" sx={{ mt: 2, fontWeight: 600 }}>
                  Rap Community 1
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Integer feugiat est nec tellus bibendum, in laoreet neque
                  hendrerit. Vivamus at sapien non lorem pretium aliquet.
                </Typography>
              </Grid>

              {/* Rap Community 2 */}
              <Grid item xs={12} md={6}>
                <Box
                  component="img"
                  src={Rap2Cloud}
                  alt="Rap Community 2 Word Cloud"
                  sx={{ width: "50%", borderRadius: 2, mx: "auto" }}
                />
                <Typography variant="subtitle2" sx={{ mt: 2, fontWeight: 600 }}>
                  Rap Community 2
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Duis vulputate, risus vel pretium sollicitudin, orci sapien
                  gravida magna, in accumsan metus urna vel justo.
                </Typography>
              </Grid>
            </Grid>
          </PaperWrapper>
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
