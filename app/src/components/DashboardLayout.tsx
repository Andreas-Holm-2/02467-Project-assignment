import React from "react";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  AppBar,
  Toolbar,
  Typography,
  CssBaseline,
  Divider,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import TableChartIcon from "@mui/icons-material/TableChart";
import HubIcon from "@mui/icons-material/Hub";

const navItems = [
  { text: "Home", icon: <HomeIcon /> },
  { text: "Data", icon: <TableChartIcon /> },
  { text: "Analytics", icon: <AnalyticsIcon /> },
];

const drawerWidth = 240;

type DashboardLayoutProps = {
  children: React.ReactNode;
};

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <Box
      sx={{ display: "flex", minHeight: "100vh", backgroundColor: "#f9fafb" }}
    >
      <CssBaseline />

      {/* Sidebar */}
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
            backgroundColor: "#f3f4f6", // Light gray
            color: "#1f2937", // Dark text
            borderRight: "1px solid #e5e7eb",
          },
        }}
      >
        <Toolbar
          sx={{
            height: 64,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            px: 2,
          }}
        >
          <HubIcon sx={{ fontSize: 24, color: "rgba(153, 27, 27, 0.4)" }} />
        </Toolbar>
        <Divider sx={{ mb: 1, mx: 1.5 }} />
        <Box sx={{ overflow: "auto" }}>
          <List>
            {navItems.map(({ text, icon }) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    {React.cloneElement(icon, {
                      sx: {
                        color: "#9ca3af", // Tailwind gray-400
                        fontSize: 22,
                      },
                    })}
                    <ListItemText primary={text} />
                  </Box>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>

      {/* Main Content */}
      <Box sx={{ flexGrow: 1 }}>
        {/* AppBar (white, no overlap) */}
        <AppBar
          position="static"
          elevation={0}
          sx={{
            backgroundColor: "#ffffff",
            borderBottom: "1px solid #e5e7eb",
            color: "black",
            height: 64,
            justifyContent: "center",
          }}
        >
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="h6" sx={{ fontWeight: 200 }}>
              02467 Computational social science
            </Typography>
          </Toolbar>
        </AppBar>

        {/* Page Content */}
        <Box sx={{ p: 3 }}>{children}</Box>
      </Box>
    </Box>
  );
};

export default DashboardLayout;
