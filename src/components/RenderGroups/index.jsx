import CardGroup from "../CardGroup";
import { useColors } from "../../providers/colors";
import { useGroups } from "../../providers/groups";
import { DivGroups, RenderGroupsContainer } from "./style";
import { color } from "@mui/system";
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
import { ContentContainer, HabitsAndGroupsContainer, SideContainer, UniqueContainer } from "./style";
import Grid6 from "../../components/Grids/Grid6";
import { useAuth } from "../../providers/auth";
import { useState } from "react";
import ComponentButton from "../../components/Button";
import AddIcon from "@mui/icons-material/Add";
import ModalBase from "../../components/ModalBase";
import {GroupFormEdit} from "../../components/GroupFormEdit";
import GroupFormAdd from "../../components/GroupFormAdd";
const RenderGroups = () => {
  // const { desktopVersion } = useColors();
  const { groups } = useGroups();
  const { nextGroupPage, backGroupPage } = useGroups();
  const { mobileVersion, desktopVersion } = useAuth();
  return (
    <RenderGroupsContainer>
      <Typography
        padding=".2rem 0 .1rem 0"
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

      <Stack display="flex" direction="row" padding=".8rem" justifyContent="center">
        <ComponentButton
          color='success'
          sx={{ margin: ".2rem" }}
          variant="contained"
          size="small"
          onClick={backGroupPage}
        >
          Voltar
        </ComponentButton>
        <ComponentButton
          color='success'
          sx={{ margin: ".2rem" }}
          variant="contained"
          size="small"
          onClick={nextGroupPage}
        >
          Avançar
        </ComponentButton>
      </Stack>

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

      {desktopVersion && (
        
          <Stack alignItems="flex-end">
            <ModalBase
              labelToCallModal={
                <Fab color="success" aria-label="add">
                  <AddIcon color='success'/>
                </Fab>
              }
              titleModal="Adicionar Grupo"
            >
              <GroupFormEdit />
            </ModalBase>
          </Stack>
      )}

    </RenderGroupsContainer>
  );
};
export default RenderGroups;
