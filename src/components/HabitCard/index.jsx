import { Card, CardActions, CardContent, Button, Typography, Stack, Box } from '@mui/material';
import { useHabits } from '../../providers/habits';
import ModalBase from '../ModalBase';
import HabitForm from '../HabitForm';
import CircularProgressWithLabel from '../CircularProgressWithLabel';

export default function HabitCard({ habit }) {
  const { habitDelete, habitUpdate } = useHabits();
  return (
    <Box
      sx={{
        margin: '0 0 2rem 0',
    }}>
      <Card sx={{
        minWidth: 275,
        height: 270,
      }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Hábito
          </Typography>
          <Typography variant="h5" component="div">
            {habit.title}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {habit.category}
            <br/>
            {habit.frequency}
            <br/>
            {habit.difficulty}
            <br />
            <CircularProgressWithLabel
              value={habit.how_much_achieved}
            />
          </Typography>
          
        </CardContent>
        <Stack direction="row" spacing={2}>
          <CardActions>
            <Button
              onClick={() => {
                habitUpdate({
                  "achieved": true,
                  "how_much_achieved": 100
                }, habit.id)
              }}
              size="small">
              Completo
            </Button>
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

    </Box>
  );
}