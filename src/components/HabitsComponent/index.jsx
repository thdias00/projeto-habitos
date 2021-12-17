import { HabitsComponentsContainer } from "./styles";
import { useHabits } from "../../providers/habits";
import HabitCard from "../HabitCard";
import { Fab, Box, Stack, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ModalBase from "../ModalBase";
import HabitForm from "../HabitForm";
import { useAuth } from "../../providers/auth";

const HabitsComponent = () => {
  const { mobileVersion, desktopVersion } = useAuth();
  const { habits } = useHabits();

  return (
    <Box
      sx={{
        // height: '100%',
        // overFlowY: 'scroll',
        // width: desktopVersion ? '80%' : '95%',
        margin: 'auto',
      }}>
      <Typography
        padding=".2rem 0 .6rem 0"
        align="center"
        component="h1"
        variant="h5"
        sx={{ color: desktopVersion ? 'white' : '#418C40', background: mobileVersion && "white", marginBottom: mobileVersion && "5%", borderRadius: mobileVersion && "5px", padding: mobileVersion && "1rem" }}>
        Meus Hábitos
      </Typography>
      {mobileVersion && <Box sx={{
        position: 'absolute',
        right: 10,
        top: 65,
      }}>
        <ModalBase
          labelToCallModal={
            <Fab
              size={desktopVersion ? 'large' : 'medium'}
              sx={{ padding: 0, background: "#26C6DA" }}
              aria-label="add">
              <AddIcon sx={{ padding: 0 }} />
            </Fab>}
          titleModal='Adicionar Hábitos'>
          <HabitForm />
        </ModalBase>
      </Box>}
      <HabitsComponentsContainer>
        <Box
          sx={{
            height: desktopVersion ? '476px' : '77vh',
            overflowY: 'scroll',
          }}>
          {habits.length === 0 ? 'Você não tem hábitos cadastrados. Clique para adicionar.' : habits.map(habit => <HabitCard key={habit.id} habit={habit} />)}
        </Box>
        {desktopVersion && <Stack
          alignItems="flex-end">
          <ModalBase
            labelToCallModal={
              <Fab sx={{ background: "#26C6DA" }} aria-label="add">
                <AddIcon />
              </Fab>}
            titleModal='Adicionar Hábitos'>
            <HabitForm />
          </ModalBase>
        </Stack>}
      </HabitsComponentsContainer>
    </Box>
  )
}

export default HabitsComponent