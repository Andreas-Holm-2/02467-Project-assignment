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
              

              <Box>

                <Typography variant="body1" paragraph>
                  The dataset consists of a csv file containing the network nodes
                  (corresponding to artists) and the network edges (each corresponding
                  to a collaboration between two artists)
                  <TableContainer component={Paper} sx={{
                      mt: 2,
                      width: "75%",       // Shrinks the container to fit table contents
                      mx: "auto",                 // Centers it horizontally
                      px: 2,                      // Optional: padding inside the paper
                      boxShadow: 2,              // Optional: subtle shadow
                    }}>
                    <Table size="small">
                      <TableHead>
                        <TableRow>
                          <TableCell>
                            <strong>Genre</strong>
                          </TableCell>
                          <TableCell>
                            <strong>Correlation</strong>
                          </TableCell>
                          
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        <TableRow>
                          <TableCell>POP</TableCell>
                          <TableCell>0.39</TableCell>
                          
                        </TableRow>
                        <TableRow>
                          <TableCell>RAP</TableCell>
                          <TableCell>0.57</TableCell>
                          
                        </TableRow>
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Typography>

              </Box>
            </Typography>
            
        </PaperWrapper>
    );
}; 
export default Analysis_NA_page