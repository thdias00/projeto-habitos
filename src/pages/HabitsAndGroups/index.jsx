import {
  Grid,
  Box,
  Typography,
  Paper,
  BottomNavigation,
  BottomNavigationAction,
  Stack,
  Fab,
} from "@mui/material";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import GroupIcon from "@mui/icons-material/Group";
import ResponsiveAppBar from "../../components/Header";
import HabitsComponent from "../../components/HabitsComponent";
import { HabitsAndGroupsContainer } from "./style";
import Grid6 from "../../components/Grids/Grid6";
import { useGroups } from "../../providers/groups";
import { useAuth } from "../../providers/auth";
import { useState } from "react";
import ComponentButton from "../../components/Button";
import AddIcon from "@mui/icons-material/Add";
import ModalBase from "../../components/ModalBase";
import GroupForm from "../../components/GroupForm";
import RenderGroups from "../../components/RenderGroups";
const HabitsAndGroups = () => {
  const { nextGroupPage, backGroupPage } = useGroups();
  const { mobileVersion, desktopVersion } = useAuth();
  const [navOption, setNavOption] = useState(0);

  const habitsContainer = (
    <Box
      sx={{
        padding: desktopVersion ? "1rem" : "none",
        margin: desktopVersion ? "2rem" : "none",
        height: desktopVersion ? "90vh" : "none",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: desktopVersion ? "#1B5E20" : "none",
      }}
    >
      <Typography
        padding="1rem 0 .6rem 0"
        align="center"
        component="h1"
        variant="h5"
        sx={{ color: desktopVersion ? "white" : "#418C40" }}
      >
        Meus Hábitos
      </Typography>
      <HabitsComponent />
    </Box>
  );

  const allGroupsContainer = (
    <Box>
      <Box
        sx={{
          padding: desktopVersion ? "1rem" : ".4rem",
          margin: desktopVersion ? "2rem" : "none",
          height: desktopVersion ? "90vh" : "none",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: desktopVersion ? "#1B5E20" : "none",
        }}
      >
        <Typography
          color="white"
          padding="1rem 0 .6rem 0"
          align="center"
          component="h1"
          variant="h5"
          sx={{ color: desktopVersion ? "white" : "#418C40" }}
        >
          Todos os Grupos
        </Typography>

        {mobileVersion && (
          <Box
            sx={{
              position: "absolute",
              right: 10,
              top: 65,
            }}
          >
            <ModalBase
              labelToCallModal={
                <Fab
                  size={desktopVersion ? "large" : "medium"}
                  sx={{ padding: 0 }}
                  color="primary"
                  aria-label="add"
                >
                  <AddIcon sx={{ padding: 0 }} />
                </Fab>
              }
              titleModal="Adicionar Hábitos"
            ></ModalBase>
          </Box>
        )}
        <Stack display="flex" direction="row" padding=".8rem">
          <ComponentButton
            sx={{ margin: ".2rem" }}
            variant="contained"
            size="small"
            onClick={backGroupPage}
          >
            Voltar
          </ComponentButton>
          <ComponentButton
            sx={{ margin: ".2rem" }}
            variant="contained"
            size="small"
            onClick={nextGroupPage}
          >
            Avançar
          </ComponentButton>
        </Stack>
        <RenderGroups />
      </Box>
      {desktopVersion && (
        <Box
          sx={{
            position: "absolute",
            right: 125,
            bottom: 8,
          }}
        >
          <Stack alignItems="flex-end">
            <ModalBase
              labelToCallModal={
                <Fab color="primary" aria-label="add">
                  <AddIcon />
                </Fab>
              }
              titleModal="Adicionar Hábitos"
            >
              <GroupForm />
            </ModalBase>
          </Stack>
        </Box>
      )}
    </Box>
  );
  return (
    <HabitsAndGroupsContainer>
      <Box
        sx={{
          backdropFilter: desktopVersion ? `none` : `brightness(7)`,
          backgroundSize: `cover`,
        }}
      >
        <ResponsiveAppBar />
        {<h1 className="test">test</h1>}
        {desktopVersion && (
          <Grid container sx={{ height: "100vh" }} spacing={2}>
            <Grid6>{habitsContainer}</Grid6>
            <Grid6>{allGroupsContainer}</Grid6>
          </Grid>
        )}
        {mobileVersion && (
          <Grid
            sx={{
              height: "100%",
              overFlow: "hidden",
            }}
          >
            <Grid>
              {navOption === 0 ? habitsContainer : allGroupsContainer}
              <Paper
                sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
                elevation={3}
              >
                <BottomNavigation
                  showLabels
                  value={navOption}
                  onChange={(event, newValue) => {
                    setNavOption(newValue);
                  }}
                >
                  <BottomNavigationAction
                    label="Hábitos"
                    icon={<FitnessCenterIcon />}
                  />
                  <BottomNavigationAction label="Grupos" icon={<GroupIcon />} />
                </BottomNavigation>
              </Paper>
            </Grid>
          </Grid>
        )}
      </Box>
    </HabitsAndGroupsContainer>
  );
};
export default HabitsAndGroups;
