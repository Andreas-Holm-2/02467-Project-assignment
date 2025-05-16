import { PaperWrapper } from "./PaperWrapper";
import { Typography, Grid, Box } from "@mui/material";
import Pop3 from "../assets/pop3.png";
import Rap5 from "../assets/Rap5.png";

interface WordCloudPreviewProps {
  setView: (view: any) => void;
}

const WordCloudPreview = ({ setView }: WordCloudPreviewProps) => {
  return (
    <PaperWrapper
      onClick={() => {
        setView("WordCloud");
      }}
    >
      <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
        Text Analysis on North American networks
      </Typography>

      <Typography
        variant="body2"
        color="text.secondary"
        paragraph
        sx={{ lineHeight: 1.7 }}
      >
        Each word cloud below represents a community within the Pop or Rap
        network, using lyrics from each authors top 3 most listened songs.
        Larger words are more frequent. Above each cloud, you'll see most
        followed artists on spotify from that community.
      </Typography>

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Box
              component="img"
              src={Rap5}
              alt="Rap Community"
              sx={{ width: "50%", borderRadius: 2 }}
            />
          </Box>
          <Typography variant="subtitle2" sx={{ mt: 2, fontWeight: 600 }}>
            Rap Community
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Trap / Street-Oriented Rap. Artists are associated with trap, mumble
            flows, and dark, melodic beats. Noticeable words like bustin, rack,
            hunnit aligning with trap themes.
          </Typography>
        </Grid>

        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Box
              component="img"
              src={Pop3}
              alt="Pop Community"
              sx={{ width: "50%", borderRadius: 2 }}
            />
          </Box>
          <Typography variant="subtitle2" sx={{ mt: 2, fontWeight: 600 }}>
            Pop Community
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Pop mixed with R&B - Consists of artists known for blending pop with
            R&B vocal style
          </Typography>
        </Grid>
      </Grid>
    </PaperWrapper>
  );
};

export default WordCloudPreview;
