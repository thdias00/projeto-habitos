import { Grid, Box, Typography, Paper, BottomNavigation, BottomNavigationAction, Stack } from "@mui/material";
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import GroupIcon from '@mui/icons-material/Group';
import CardGroup from "../../components/CardGroup";
import ResponsiveAppBar from "../../components/Header";
import HabitsComponent from "../../components/HabitsComponent";
import { DivGroups, HabitsAndGroupsContainer } from "./style";
import Grid6 from "../../components/Grids/Grid6";
import { useGroups } from "../../providers/groups";
import { useAuth } from "../../providers/auth";
import { useState } from 'react';
import ComponentButton from "../../components/Button";
// import MobileBackground from "../../assets/happybg.png";

const HabitsAndGroups = () => {
  const { nextGroupPage, backGroupPage, groups } = useGroups();
  const { mobileVersion, desktopVersion } = useAuth();
  const greenDesktop = "#1B5E20";
  const [navOption, setNavOption] = useState(0);

  const habitsContainer = (
    <Box
      sx={{
        padding: desktopVersion ? '1rem' : 'none',
        margin: desktopVersion ? '2rem' : 'none',
        height: desktopVersion ? '90vh' : 'none',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: desktopVersion ? "#1B5E20" : 'none',
      }}>
        <Typography
          padding="1rem 0 .6rem 0"
          align="center"
          component="h1"
          variant="h5"
          sx={{color: desktopVersion ? 'white' : '#418C40'}}>
          Meus Hábitos
        </Typography>
        <HabitsComponent />
      </Box>
  );

  const allGroupsContainer = (
    <Box
      sx={{
        padding: desktopVersion ? '1rem' : '.4rem',
        margin: desktopVersion ? '2rem' : 'none',
        height: desktopVersion ? '90vh' : 'none',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: desktopVersion ? "#1B5E20" : 'none',
      }}>
      <Typography
        color="white"
        padding="1rem 0 .6rem 0"
        align="center"
        component="h1"
        variant="h5"
        sx={{color: desktopVersion ? 'white' : '#418C40'}}>
        Todos os Grupos
      </Typography>
      <Stack display="flex" direction="row" padding=".8rem">
        <ComponentButton sx={{ margin: ".2rem" }} variant="contained" size="small" onClick={backGroupPage}>Voltar</ComponentButton>
        <ComponentButton sx={{ margin: ".2rem" }} variant="contained" size="small" onClick={nextGroupPage}>Avançar</ComponentButton>
      </Stack>
      <DivGroups
        style={{
          overflow: "auto",
          height: desktopVersion ? '70vh' : '70vh',
          width: desktopVersion ? '80%' : 'none',
          // padding: '.2rem',
        }}>
        {groups.map((item) => (
          <CardGroup
            key={item.id}
            name={item.name}
            description={item.description}
            id={item.id}
            activities={item.activities}
            users_on_group={item.users_on_group}
          />
        ))}
      </DivGroups>
    </Box>
  );
  return (
    <HabitsAndGroupsContainer>
    <Box sx={{
      // background: `url(${MobileBackground}) no-repeat center`,
      backdropFilter: desktopVersion ? `none` : `brightness(7)`,
      // backdropFilter: desktopVersion ? `none` : `grayscale(0.5) opacity(.1)`,
      backgroundSize: `cover`,
      // backgroundColor: 'gray',
    }}
    >
      <ResponsiveAppBar />
      {<h1 className='test'>test</h1>}
      {desktopVersion && (
      <Grid container sx={{ height: "100vh" }} spacing={2}>
        <Grid6>
          {habitsContainer}
        </Grid6>
        <Grid6>
          {allGroupsContainer}
        </Grid6>
      </Grid>)}
      {mobileVersion && (
        <Grid sx={{
          height: "100%",
          overFlow: 'hidden'
        }}>
          <Grid >
            {/* <button onClick={handleHabits}>hábitos</button>
            <button onClick={handleGroups}>grupos</button>
            {showHabits && habitsContainer}
            {showGroups && allGroupsContainer} */}
            {navOption === 0 ? habitsContainer : allGroupsContainer}
            <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation
          showLabels
          value={navOption}
          onChange={(event, newValue) => {
            setNavOption(newValue);
          }}
        >
          <BottomNavigationAction label="Hábitos" icon={<FitnessCenterIcon />} />
          <BottomNavigationAction label="Grupos" icon={<GroupIcon />} />
        </BottomNavigation>
      </Paper>
          </Grid>
        </Grid>)}
    </Box>
    </HabitsAndGroupsContainer>
  );
};
export default HabitsAndGroups;