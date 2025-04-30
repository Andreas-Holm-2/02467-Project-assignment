import { Box } from "@mui/material";
import React from 'react';

const NetworkGraphEmbed: React.FC = () => {
  return (
    <div>
      <h1>Network Graph from Netwulf</h1>
      <iframe
        src="http://127.0.0.1:8000"  // The URL where your Netwulf is running
        width="100%"
        height="600px"
        title="Netwulf Network"
        frameBorder="0"
      ></iframe>
    </div>
  );
};

export default NetworkGraphEmbed;
