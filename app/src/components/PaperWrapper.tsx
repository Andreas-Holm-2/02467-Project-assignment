import React from "react";
import { Paper, IconButton } from "@mui/material";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export interface PaperWrapperProps {
  children: React.ReactNode;
  elevation?: number;
  onClick?: () => void;
  sx?: object;
}

export const PaperWrapper: React.FC<PaperWrapperProps> = ({
  children,
  elevation = 0,
  onClick,
  sx = {},
}) => {
  const isClickable = Boolean(onClick);

  return (
    <Paper
      elevation={elevation}
      sx={{
        p: 3,
        borderRadius: 3,
        minHeight: 300,
        position: "relative",
        background: "linear-gradient(135deg, #e0f7fa, #f5f5f5)",
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
        transition: "box-shadow 0.3s",
        ...(isClickable && {
          cursor: "pointer",
          "&:hover": {
            filter: "brightness(0.95)",
          },
        }),
        ...sx,
      }}
      onClick={onClick}
    >
      {isClickable && (
        <IconButton
          size="small"
          onClick={(e) => {
            e.stopPropagation();
            onClick?.();
          }}
          sx={{ position: "absolute", top: 8, right: 8 }}
        >
          <ArrowForwardIcon fontSize="medium" />
        </IconButton>
      )}
      {children}
    </Paper>
  );
};
