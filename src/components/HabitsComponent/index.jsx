import { HabitsComponentsContainer } from "./styles";
import { useHabits } from "../../providers/habits";
import HabitCard from "../HabitCard";
import { Fab, Box, Stack } from '@mui/material';
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
        height: '100%',
        overFlowY: 'scroll',
        width: desktopVersion ? '80%' : '95%',
        margin: 'auto',
      }}>
      {mobileVersion && <Box sx={{
        position: 'absolute',
        right: 10,
        top: 65,
      }}>
        <ModalBase
          labelToCallModal={
            <Fab
              size={desktopVersion ? 'large' : 'medium'}
              sx={{ padding: 0 }}
              color="primary"
              aria-label="add">
              <AddIcon sx={{padding: 0}}/>
            </Fab>}
          titleModal='Adicionar Hábitos'>
          <HabitForm/>
          </ModalBase>
      </Box>}
      <HabitsComponentsContainer>
      <Box 
      sx={{
        height: desktopVersion ? '75vh' : '81vh',
        overflowY: 'scroll',
      }}>
        {habits.length === 0 ? 'Você não tem hábitos cadastrados. Clique para adicionar.' : habits.map(habit => <HabitCard key={habit.id} habit={habit} />)}
      </Box>
        {desktopVersion && <Stack
          alignItems="flex-end">
          <ModalBase
            labelToCallModal={
              <Fab color="primary" aria-label="add">
                <AddIcon />
              </Fab>}
            titleModal='Adicionar Hábitos'>
            <HabitForm/>
          </ModalBase>
        </Stack>}
      </HabitsComponentsContainer>
    </Box>
  )
}

export default HabitsComponent