import ResponsiveAppBar from "../../components/Header";
import DashboardCardHabits from "../../components/DashboardCardHabits";
import { Box } from "@mui/material";

const Dashboard = () => {
  return (
    <div>
      <ResponsiveAppBar />
      <Box
        sx={{
          padding: '1rem',
          margin: '1rem',
          height: '90vh',
          backgroundColor: '#1B5E20',
        }}>
        <DashboardCardHabits/>
      </Box>
    </div>
  )
}
export default Dashboard;