import ResponsiveAppBar from "../../components/Header";
import { Box } from "@mui/material";
import DashboardVersion from "../../components/DashboardVersion";

const Dashboard = () => {
  return (
    <div>
      <ResponsiveAppBar />
      <Box
        sx={{
          padding: "1rem",
          margin: "1rem",
          height: "87vh",
          backgroundColor: "#1B5E20",
        }}
      >
        <DashboardVersion />
      </Box>
    </div>
  );
};
export default Dashboard;
