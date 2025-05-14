import { Box } from "@mui/material";
import React from 'react';

const NetworkGraphEmbed: React.FC = () => {
  return (
    <div>
      <h1>POP Graph</h1>
      <iframe
        src="http://localhost:9900/?data=tmpgraph.json&config=config_tmpgraph.json"  // The URL where your Netwulf is running
        width="100%"
        height="600px"
        title="Netwulf Network"
        frameBorder="0"
      ></iframe>
    </div>
  );
};

export default NetworkGraphEmbed;

