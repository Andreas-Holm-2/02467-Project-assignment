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
import HubIcon from "@mui/icons-material/Hub";

const drawerWidth = 240;

type NavItem = {
  text: string;
  icon: React.ReactElement;
  JSX: React.ReactElement;
};

type DashboardLayoutProps = {
  navItems: NavItem[];
  selectedIndex: number;
  setSelectedIndex: (index: number) => void;
};

const DashboardLayout: React.FC<DashboardLayoutProps> = ({
  navItems,
  selectedIndex,
  setSelectedIndex,
}) => {
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
            backgroundColor: "#f3f4f6",
            color: "#1f2937",
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
            {navItems.map(({ text, icon }, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton
                  selected={index === selectedIndex}
                  onClick={() => setSelectedIndex(index)}
                >
                  <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    {React.isValidElement(icon) &&
                      React.cloneElement(icon as React.ReactElement<any, any>, {
                        sx: {
                          color:
                            index === selectedIndex ? "#1f2937" : "#9ca3af",
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
        {/* AppBar */}
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
        <Box sx={{ p: 3 }}>{navItems[selectedIndex].JSX}</Box>
      </Box>
    </Box>
  );
};

export default DashboardLayout;
