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
              <Typography>
                Focusing our analysis to the North American clusters
                allows us to engage in a more focused network analysis, 
                where country doesn't serve as a confounder for the communities. 
              </Typography>

              <Typography  variant="h6" gutterBottom sx={{ fontWeight: 600, mt: 3 }}>
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
              <Typography>
                Both POP and RAP collaboration networks exhibit clear community 
                structures as indicated by the modularity scores significantly higher 
                than those of their repsective null models. While POP shows slightly higher modularity 
                than RAP, direct comparison is difficult due to the differences in number of nodes and average node degree. 

                What can be confidently concluded is that both genres are characterized by meaningful 
                community structures, suggesting that artists tend to cluster into collaboration groups, 
                whether based on label, style or crew

              </Typography>

              <Typography  variant="h6" gutterBottom sx={{ fontWeight: 600, mt: 3 }}>
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
              <Typography>
                While both genres show significantly less degree dissortativity when compared to random, it is still relatively low. 
                This could reflect the nature of music collaborations, where highly active artists often collaborate 
                with less connected ones, often seen where artists collaborate with new upcoming artists. 
                This correlates well with our two networks degree distributions following a power law. 
              </Typography>

              <Typography  variant="h6" gutterBottom sx={{ fontWeight: 600, mt: 3 }}>
                Popularity and degree   
              </Typography>
            
              <Typography variant="body1" paragraph>
                  Assortativity by attribute "popularity" was also computed, which did not showing a significant difference. 
                  However, this inspired us to look into how the "popularity" attribute correlates with node-degree count. 
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
                        <TableCell align="right">0.57</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Pop</TableCell>
                        <TableCell align="right">0.39</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </Box>
            </Typography>
            
            <Typography sx={{mt: -7}}>
              Both POP and RAP show some correlation between popularity and out-degree. 
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