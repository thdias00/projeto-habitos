import { useState } from "react";
import { useHabits } from "../../providers/habits";
import { TextField, Stack, CardActions } from "@mui/material";
import ComponentButton from "../Button";

const HabitForm = ({edit, habit}) => {
  const { habitUpdate, habitCreate } = useHabits();
  const [title, setTitle] = useState(() => {
    return habit ? habit.title : ''; 
  });
  const [category, setCategory] = useState(() => {
    return habit ? habit.category : ''; 
  });
  const [difficulty, setDifficulty] = useState(() => {
    return habit ? habit.difficulty : ''; 
  });
  const [frequency, setFrequency] = useState(() => {
    return habit ? habit.frequency : ''; 
  });
  const [achieved, setAchieved] = useState(() => {
    return habit ? habit.achieved : ''; 
  });
  const [how_much_achieved, setHow_much_achieved] = useState(() => {
    return habit ? habit.how_much_achieved : ''; 
  });
  return (
    <>
      <Stack>
        <TextField
          variant="standard"
          type="text"
          label="nome do hábito"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <TextField
          variant="standard"
          type="text"
          label="frequência"
          value={frequency}
          onChange={e => setFrequency(e.target.value)}
        />
        <TextField
          variant="standard"
          type="text"
          label="dificuldade"
          value={difficulty}
          onChange={e => setDifficulty(e.target.value)}
        />
        <TextField
          variant="standard"
          type="text"
          label="categoria"
          value={category}
          onChange={e => setCategory(e.target.value)}
        />
        <TextField
          variant="standard"
          type="text"
          label="alcançado"
          value={achieved}
          onChange={e => setAchieved(e.target.value)}
        />
        <TextField
          variant="standard"
          type="text"
          label="atingimento"
          value={how_much_achieved}
          onChange={e => setHow_much_achieved(e.target.value)}
        />
      </Stack>
      <Stack direction="row" spacing={2}>
      {edit ? <CardActions>
          <ComponentButton
            size="small"
            onClick={() => habitUpdate({title, category, difficulty, frequency, achieved, how_much_achieved}, habit.id)}
          >
            Atualizar
          </ComponentButton>
      </CardActions> :
      <CardActions>
          <ComponentButton
            size="small"
              onClick={() => {
                habitCreate({ title, category, difficulty, frequency, achieved, how_much_achieved });
              }}
          >
            Adicionar
          </ComponentButton>
      </CardActions>}
    </Stack>
    </>
  )
}

export default HabitForm