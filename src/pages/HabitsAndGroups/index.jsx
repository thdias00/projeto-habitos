import { Grid, Box, Typography } from "@mui/material";
import CardGroup from "../../components/CardGroup";
import ResponsiveAppBar from "../../components/Header";
import HabitsComponent from "../../components/HabitsComponent";
import { DivGroups } from "./style";
import Grid6 from "../../components/Grids/Grid6";
import { useGroups } from "../../providers/groups";

const HabitsAndGroups = () => {
  const { nextGroupPage, backGroupPage, groups, myGroups, myCreatedGroups } =
    useGroups();
  return (
    <>
      <ResponsiveAppBar />
      <Grid container spacing={2}>
        <Grid6>
          <Box
            sx={{
              padding: "1rem",
              margin: "2rem",
              height: "90vh",
              backgroundColor: "#1B5E20",
            }}
          >
            <Typography
              color="white"
              padding="1rem 0 .6rem 0"
              align="center"
              component="h1"
              variant="h5"
            >
              Meus Hábitos
            </Typography>
            <HabitsComponent />
          </Box>
        </Grid6>
        <Grid6>
          <Box
            sx={{
              padding: "1rem",
              margin: "2rem",
              height: "90vh",
              backgroundColor: "#47824A",
            }}
          >
            <Typography
              color="white"
              padding="1rem 0 .6rem 0"
              align="center"
              component="h1"
              variant="h5"
            >
              Todos os Grupos
            </Typography>
            <button onClick={backGroupPage}>back</button>
            <button onClick={nextGroupPage}>next</button>
            <DivGroups>
              {groups.map((item) => (
                <CardGroup
                  key={item.id}
                  group={item}
                  idCreator={item}
                  name={item.name}
                  id={item.id}
                  activities={item.activities}
                  users_on_group={item.users_on_group}
                  description={item.description}
                  category={item.category}
                  creatorId={item.creator.id}
                />
              ))}
            </DivGroups>
          </Box>
        </Grid6>
      </Grid>
    </>
  );
};
export default HabitsAndGroups;
