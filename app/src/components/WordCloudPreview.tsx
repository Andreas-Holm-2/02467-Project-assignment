import { PaperWrapper } from "./PaperWrapper";
import { Typography, Grid, Box } from "@mui/material";
import Pop1Cloud from "../assets/pop_community_1.png";
import Pop2Cloud from "../assets/pop_community_2.png";
import Rap1Cloud from "../assets/rap_community_1.png";
import Rap2Cloud from "../assets/rap_community_2.png";

const WordCloudPreview = () => {
  return (
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
        Each word cloud below represents one detected community within the Pop
        or Rap network, based on lyrics used by artists. Larger words are more
        frequent. Below each cloud, you'll see notable artists from that
        community.
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac
            lacus sed urna vulputate.
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
            Cras placerat orci nec arcu bibendum, vel luctus metus gravida.
            Pellentesque in commodo quam.
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
            Integer feugiat est nec tellus bibendum, in laoreet neque hendrerit.
            Vivamus at sapien non lorem pretium aliquet.
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
            Duis vulputate, risus vel pretium sollicitudin, orci sapien gravida
            magna, in accumsan metus urna vel justo.
          </Typography>
        </Grid>
      </Grid>
    </PaperWrapper>
  );
};

export default WordCloudPreview;
