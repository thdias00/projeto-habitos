import { Card, CardActions, CardContent, Button, Typography, Stack, Box } from '@mui/material';
import { useGoals } from '../../providers/goals';
import ModalBase from '../ModalBase';
import GoalForm from '../GoalForm';
import CircularProgressWithLabel from '../CircularProgressWithLabel';

export default function GoalCard({ goal, groupId }) {
  const { goalDelete, goalUpdate } = useGoals();
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
            {goal.title}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {goal.difficulty}
            <br />
            <CircularProgressWithLabel
              value={goal.how_much_achieved}
            />
          </Typography>
          
        </CardContent>
        <Stack direction="row" spacing={2}>
          <CardActions>
            <Button
              onClick={() => {
                goalUpdate({
                  "achieved": true,
                  "how_much_achieved": 100
                }, goal.id)
              }}
              size="small">
              Completo
            </Button>
          </CardActions>
          <CardActions>
            <Button 
              size="small" 
              onClick={() => {
                // console.log('goal id: ', goal.id);
                goalDelete(goal.id);
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
            titleModal='Editar Metas'>
            <GoalForm edit groupId={groupId} goal={goal}/>
          </ModalBase>
        </Stack>
      </Card>

    </Box>
  );
}