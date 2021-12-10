import { Grid } from "@mui/material";
import ResponsiveAppBar from "../../components/Header";
import HabitsComponent from "../../components/HabitsComponent";

const HabitsAndGroups = () => {
  return (
    <>
      <ResponsiveAppBar />
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <HabitsComponent/>
        </Grid>
        <Grid item xs={6}>
          <h1>groups component</h1>
        </Grid>
      </Grid>
    </>
  )
}
export default HabitsAndGroups;