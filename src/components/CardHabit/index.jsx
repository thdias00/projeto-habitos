import { Card, CardActions, CardContent, Button, Typography, Stack } from '@mui/material';
import { useHabits } from '../../providers/habits';
import ModalBase from '../ModalBase';
import HabitForm from '../HabitForm';

export default function CardHabit({ habit, edit }) {
  const { habitDelete } = useHabits();
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Hábito
        </Typography>
        <Typography variant="h5" component="div">
          {habit.title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {habit.category}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {habit.frequency}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {habit.difficulty}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {habit.how_much_achieved}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {habit.achieved}
        </Typography>
      </CardContent>
      <Stack direction="row" spacing={2}>
        <CardActions>
          <Button size="small">Completo</Button>
        </CardActions>
        <CardActions>
          <Button 
            size="small" 
            onClick={() => {
              console.log('habit id: ', habit.id)
              habitDelete(habit.id);
            }}>
            Deletar
          </Button>
        </CardActions>
        <ModalBase
          labelToCallModal={
            <CardActions>
              <Button
                size="small">
                Atualizar
              </Button>
            </CardActions>
          }
          titleModal='Editar Hábitos'>
          <HabitForm edit habit={habit}/>
        </ModalBase>
      </Stack>
    </Card>
  );
}