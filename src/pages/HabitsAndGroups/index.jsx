import CardGroup from "../../components/CardGroup";
import { useAuth } from "../../providers/auth";
import { Grid } from "@mui/material";
import ResponsiveAppBar from "../../components/Header";
import HabitsComponent from "../../components/HabitsComponent";

const HabitsAndGroups = () => {
  const { nextGroupPage, backGroupPage, groups } = useAuth();
  return (
    <>
      <ResponsiveAppBar />
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <HabitsComponent />
        </Grid>
        <Grid item xs={6}>
          <div>
            groups
            <button onClick={nextGroupPage}>next</button>
            <button onClick={backGroupPage}>back</button>
            {groups.map((item) => (
              <CardGroup name={item.name} description={item.description} />
            ))}
          </div>
        </Grid>
      </Grid>
    </>
  );
};
export default HabitsAndGroups;
