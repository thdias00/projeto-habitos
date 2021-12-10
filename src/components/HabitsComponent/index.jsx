import { HabitsComponentsContainer } from "./styles";
import { useHabits } from "../../providers/habits";
import CardHabit from "../CardHabit";
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import ModalBase from "../ModalBase";
import HabitForm from "../HabitForm";

const HabitsComponent = () => {
  const { habits } = useHabits();

  return (
    <HabitsComponentsContainer>
      {habits.length === 0 ? 's/ hábitos' : habits.map(habit => <CardHabit key={habit.id} habit={habit} />)}
      <ModalBase
        labelToCallModal={
          <Fab color="primary" aria-label="add">
            <AddIcon />
          </Fab>}
        titleModal='Adicionar Hábitos'>
        <HabitForm/>
      </ModalBase>
      
    </HabitsComponentsContainer>
  )
}

export default HabitsComponent