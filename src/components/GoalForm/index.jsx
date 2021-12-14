import { useState } from "react";
import { useGoals } from "../../providers/goals";
import { TextField, Stack, CardActions, Slider } from "@mui/material";
import ComponentButton from "../Button";

const GoalForm = ({edit, goal, groupId}) => {
  const { goalUpdate, goalCreate } = useGoals();
  const [title, setTitle] = useState(() => {
    return goal ? goal.title : ''; 
  });
  const [difficulty, setDifficulty] = useState(() => {
    return goal ? goal.difficulty : ''; 
  });
  const [achieved, setAchieved] = useState(() => {
    return goal ? goal.achieved : false; 
  });
  const [how_much_achieved, setHow_much_achieved] = useState(() => {
    const result = goal ? goal.how_much_achieved : 0;
    result === 100 ? setAchieved(!achieved) : setAchieved(!achieved);
    return result; 
  });
  return (
    <>
      <Stack>
        <TextField
          variant="standard"
          type="text"
          label="nome da meta"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <TextField
          variant="standard"
          type="text"
          label="dificuldade"
          value={difficulty}
          onChange={e => setDifficulty(e.target.value)}
        />
        <Slider
          step={5}
          size="small"
          valueLabelDisplay="auto"
          value={how_much_achieved}
          onChange={e => setHow_much_achieved(e.target.value)}
        />
      </Stack>
      <Stack direction="row" spacing={2}>
      {edit ? <CardActions>
          <ComponentButton
            size="small"
            onClick={() => goalUpdate({title, difficulty, achieved, how_much_achieved}, goal.id)}>
            Atualizar
          </ComponentButton>
      </CardActions> :
      <CardActions>
          <ComponentButton
            size="small"
              onClick={() => {
                goalCreate({ title, difficulty, achieved, how_much_achieved }, groupId);
              }}>
            Adicionar
          </ComponentButton>
      </CardActions>}
    </Stack>
    </>
  )
}

export default GoalForm