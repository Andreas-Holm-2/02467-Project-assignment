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
import { PaperWrapper } from "./PaperWrapper";
import React from "react";

const Agenda = () => {
  const tocItems = [
    { label: "Motivation" },
    { label: "Introduction" },
    { label: "Dataset" },
    { label: "Network" },
    { label: "Zooming in on North American Artists" },
    { label: "North America Network" },
    { label: "Word Clouds" },
    { label: "Discussion" },
    { label: "Summarized Results" },
  ];

  return (
    <PaperWrapper sx={{ width: "100%" }}>
      <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
        Welcome! Here's What We Cover 😊
      </Typography>

      <List disablePadding sx={{ mt: 0 }}>
        {tocItems.map((item, idx) => (
          <React.Fragment key={idx}>
            <ListItem
              disableGutters
              sx={{
                py: 1.5,
                pl: 2,
                pr: 1,
                borderRadius: 2,
                alignItems: "center",
                display: "flex",
                transition: "background-color 0.2s ease",
                "&:hover": {
                  // backgroundColor: "rgba(0, 0, 0, 0.04)",
                },
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  fontWeight: 600,
                  width: 24,
                  color: "text.secondary",
                  mr: 1.5,
                  textAlign: "right",
                  flexShrink: 0,
                }}
              >
                {idx + 1}.
              </Typography>

              <ListItemText
                primary={item.label}
                primaryTypographyProps={{
                  variant: "subtitle2",
                  sx: {
                    fontWeight: 500,
                    color: "text.secondary",
                    lineHeight: 1.1,
                    fontSize: "0.95rem", // slightly larger than body2, but smaller than body1
                  },
                }}
              />
            </ListItem>

            {idx < tocItems.length - 1 && (
              <Divider
                variant="inset"
                component="li"
                sx={{ ml: 4, borderColor: "#e0e0e0" }}
              />
            )}
          </React.Fragment>
        ))}
      </List>
    </PaperWrapper>
  );
};

export default Agenda;
