import { HabitsComponentsContainer } from "./styles";
import { useHabits } from "../../providers/habits";
import HabitCard from "../HabitCard";
import { Fab, Box, Stack } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ModalBase from "../ModalBase";
import HabitForm from "../HabitForm";

const HabitsComponent = () => {
  const { habits } = useHabits();

  return (
    <Box
      sx={{
        height: '100%',
        overFlowY: 'scroll',
        width: '80%',
        margin: 'auto',
      }}>
      <HabitsComponentsContainer>
      <Box
      sx={{
        height: '75vh',
        overflowY: 'scroll',
      }}>
        {habits.length === 0 ? 'Você não tem hábitos cadastrados. Clique para adicionar.' : habits.map(habit => <HabitCard key={habit.id} habit={habit} />)}
      </Box>
        <Stack
          alignItems="flex-end">
          <ModalBase
            labelToCallModal={
              <Fab color="primary" aria-label="add">
                <AddIcon />
              </Fab>}
            titleModal='Adicionar Hábitos'>
            <HabitForm/>
          </ModalBase>
        </Stack>
      </HabitsComponentsContainer>
    </Box>
  )
}

export default HabitsComponent