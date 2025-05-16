import {
  Box,
  Typography,
  Grid,
  Paper,
  Button,
  Divider,
  Card,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

import DownloadIcon from "@mui/icons-material/Download";
import myImage from "../assets/Figure.png";
import { DownloadDone } from "@mui/icons-material";
import { PaperWrapper } from "../components/PaperWrapper";
import AssortativityPOP from "../assets/assort_pop.png";
import AssortativityRAP from "../assets/assort_rap.png";
import ModularityPOP from "../assets/mod_pop.png";
import ModularityRAP from "../assets/mod_rap.png";

const Analysis_NA_page: React.FC = () => {
  return (
        <PaperWrapper>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
              Analyzing the North American networks
              <Typography variant="body2"
              color="text.secondary">
                We kick off our analysis by examining the Modularity, calculated using the 
                louvain community detection algorithm. Modularity quantify the precense of 
                distinct subgroups / communities, and the strength of these, within a network. 
                We find this appropriate because we seek to investigate how strongly artists 
                form subgroups across the two different genres.

              </Typography>

              <Typography  variant="h6" gutterBottom sx={{ fontWeight: 300, mt: 3 }}>
                Modularity  
              </Typography>
              <Box
              component="img"
              src={ModularityPOP}
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
              <Box
              component="img"
              src={ModularityRAP}
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
              <Typography variant="body2"
              color="text.secondary">
                Both POP and RAP collaboration networks exhibit clear community 
                structures as indicated by the modularity scores significantly higher 
                than those of their repsective null models. While POP shows slightly higher modularity 
                than RAP, direct comparison is difficult due to the differences in number of nodes and average node degree. 

                What can be confidently concluded is that both genres are characterized by meaningful 
                community structures, suggesting that artists tend to cluster into collaboration groups, 
                whether based on label, style or crew.

              </Typography>

              <Typography variant="body2"
              color="text.secondary" sx={{mt: 5}}>
                Next we measure degree assortativity, to investigate whether artists with many collaborations - 
                high node degree, tend to collaborate with similarly well-connected artists. 
                Simply put to asses whether popular or central artists prefer to collaborate with eachother.  
              </Typography>

              <Typography  variant="h6" gutterBottom sx={{ fontWeight: 300, mt: 1 }}>
                Assortativity  
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
              <Box
              component="img"
              src={AssortativityRAP}
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
              <Typography variant="body2"
              color="text.secondary">
                While both genres show significantly less degree disassortativity compared to random networks, 
                the assortativity remains relatively low overall. This likely reflects the nature of music collaborations, 
                where highly active artists frequently collaborate with less connected or emerging artists. Although collaborations between highly connected artists do occur, 
                they are outweighed by the more frequent high-to-low degree collaborations. This imbalance reduces the overall 
                assortativity value, despite the presence of prominent artist-to-artist features.
              </Typography>

              <Typography  variant="h6" gutterBottom sx={{ fontWeight: 300, mt: 3 }}>
                Popularity and degree   
              </Typography>
            
              <Typography variant="body2"
              color="text.secondary">
                  We were motivated to try computing assortativity by attribute popularity
                  providing a different perspective compared to degree-assortativity, more reliant on centrality of artists. 
                  This did not show a significant difference, however, it inspired us to look into how the popularity
                  attribute correlates with node-degree count. 
              </Typography>
              <Box sx={{ height: 180, width: "30%", mt: 2 , mx:"auto"}}>
                <TableContainer component={Paper}>
                  <Table size="small">
                    <TableHead>
                      <TableRow>
                        <TableCell>
                          <strong>Genre</strong>
                        </TableCell>
                        <TableCell align="right">
                          <strong>Correlation</strong>
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow>
                        <TableCell>Rap</TableCell>
                        <TableCell align="right">0.600</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Pop</TableCell>
                        <TableCell align="right">0.416</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </Box>
            </Typography>
            
            <Typography variant="body2"
              color="text.secondary" sx={{mt: -7}}>
              Both POP-NA and RAP-NA show some correlation between popularity and out-degree. 
              However, there is a higher correlation between the two metrics in the RAP network, highlighting that 
              popularity is more tied to number of collaborations, suggesting that popularity might be more 
              network driven in the RAP genre. In the POP network the correlation is weaker, which could imply 
              that popularity may be more dependent on external factors, such as marketing, labels or solo success, 
              rather than collaborations.
            </Typography>
            
        </PaperWrapper>
    );
}; 
export default Analysis_NA_page