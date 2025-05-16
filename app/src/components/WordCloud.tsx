import { Typography, Box, Grid, Divider } from "@mui/material";
import { PaperWrapper } from "./PaperWrapper";

import Pop1 from "../assets/pop1.png";
import Pop2 from "../assets/Pop2.png";
import Pop3 from "../assets/pop3.png";
import Pop4 from "../assets/Pop4.png";
import Pop5 from "../assets/Pop5.png";

import Rap1 from "../assets/Rap1.png";
import Rap2 from "../assets/Rap2.png";
import Rap3 from "../assets/Rap3.png";
import Rap4 from "../assets/Rap4.png";
import Rap5 from "../assets/Rap5.png";

const WordCloud = () => {
  return (
    <PaperWrapper>
      <Typography variant="h4" gutterBottom>
        Text Analysis: Pop vs. Rap
      </Typography>

      <Typography paragraph>
        This page presents insights from a text analysis of lyrics across
        different artist communities in pop and rap. By examining frequently
        used words, we can explore how different musical communities express
        themselves and what themes dominate their lyrics.
      </Typography>

      <Divider sx={{ my: 4 }} />

      <Typography variant="h5" gutterBottom>
        Word Clouds – Pop Artists
      </Typography>
      <Typography paragraph>
        Each image below represents common words used by artists grouped in a
        pop community. These clouds highlight repeated sounds, emotional tones,
        and stylistic patterns that shape pop music.
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {[Pop1, Pop2, Pop3, Pop4, Pop5].map((img, i) => (
          <Grid item xs={12} md={6} lg={4} key={i}>
            <img
              src={img}
              alt={`Pop Community ${i + 1}`}
              style={{
                width: "100%",
                maxWidth: "500px",
                maxHeight: "400px",
                objectFit: "contain",
                borderRadius: 8,
                display: "block",
                margin: "0 auto",
              }}
            />
          </Grid>
        ))}
      </Grid>

      <Divider sx={{ my: 4 }} />

      <Typography variant="h5" gutterBottom>
        Word Clouds - Rap Artists
      </Typography>
      <Typography paragraph>
        These word clouds reflect linguistic patterns across rap communities.
        Compared to pop, rap lyrics tend to include more slang, street language,
        and assertive expressions. The visuals below highlight these
        distinctions.
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {[Rap1, Rap2, Rap3, Rap4, Rap5].map((img, i) => (
          <Grid item xs={12} md={6} lg={4} key={i}>
            <img
              src={img}
              alt={`Rap Community ${i + 1}`}
              style={{
                width: "100%",
                maxWidth: "500px",
                maxHeight: "400px",
                objectFit: "contain",
                borderRadius: 8,
                display: "block",
                margin: "0 auto",
              }}
            />
          </Grid>
        ))}
      </Grid>

      <Divider sx={{ my: 4 }} />

      <Typography variant="h5" gutterBottom>
        Key Insights
      </Typography>
      <Box sx={{ mt: 2 }}>
        <Typography variant="subtitle1" fontWeight="bold">
          General Observations:
        </Typography>
        <Typography paragraph>
          Pop lyrics tend to focus on emotional themes like love, relationships,
          and personal expression. Words like "love", "your", and "im" are
          common across many communities.
        </Typography>
        <Typography paragraph>
          In contrast, rap lyrics often include street slang, expressions of
          power, profanity and racial slurs. Common terms include "got",
          "bitch", "like", and "yeah".
        </Typography>

        <Typography variant="subtitle1" fontWeight="bold" sx={{ mt: 3 }}>
          Distinct Communities Identified:
        </Typography>
        <Typography paragraph>
          One rap community stood out with a clear connection to street-oriented
          or trap music. The words used here, like "rack", "bustin", and "push",
          align with modern trap themes. Additionally artists such as Future and
          21 Savage are associated with trap, mumble flows, and dark, melodic
          beats.
        </Typography>
        <Typography paragraph>
          A pop community centered around artists like Ariana Grande and Bruno
          Mars displayed softer, melodic tendencies - closely linked to R&B
          vocal style.
        </Typography>

        <Typography variant="subtitle1" fontWeight="bold" sx={{ mt: 3 }}>
          Suggestions for Improvement:
        </Typography>
        <Typography paragraph>
          Some of the most common words in both genres are simply repeated sound
          effects like "dudu", "ye_ye", or "woo". These can clutter the
          analysis. A more advanced cleanup step would help highlight meaningful
          themes better.
        </Typography>
      </Box>
    </PaperWrapper>
  );
};

export default WordCloud;
