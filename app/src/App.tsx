import { useState } from "react";

import DashboardLayout from "./components/DashboardLayout";

import Home from "./pages/Home";
import DataPage from "./pages/DataPage";
import Analytics from "./pages/Analytics";

import HomeIcon from "@mui/icons-material/Home";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import TableChartIcon from "@mui/icons-material/TableChart";

function App() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const navItems = [
    {
      text: "Home",
      icon: <HomeIcon />,
      JSX: (
        <Home
          setSelectedIndex={setSelectedIndex}
          selectedIndex={selectedIndex}
        />
      ),
    },
    {
      text: "Data",
      icon: <TableChartIcon />,
      JSX: (
        <DataPage
          setSelectedIndex={setSelectedIndex}
          selectedIndex={selectedIndex}
        />
      ),
    },
    {
      text: "Analytics",
      icon: <AnalyticsIcon />,
      JSX: (
        <Analytics
          setSelectedIndex={setSelectedIndex}
          selectedIndex={selectedIndex}
        />
      ),
    },
  ];

  return (
    <DashboardLayout
      navItems={navItems}
      setSelectedIndex={setSelectedIndex}
      selectedIndex={selectedIndex}
    />
  );
}

export default App;
