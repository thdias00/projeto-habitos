import { Card, CardActions, CardContent, Button, Typography, Stack, Box } from '@mui/material';
import { useHabits } from '../../providers/habits';
import ModalBase from '../ModalBase';
import HabitForm from '../HabitForm';
import CircularProgressWithLabel from '../CircularProgressWithLabel';
import { useAuth } from "../../providers/auth";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export default function HabitCard({ habit }) {
  const { desktopVersion } = useAuth();
  const { habitDelete, habitUpdate } = useHabits();
  return (
    <Box
      sx={{
        margin: desktopVersion ? '0 0 2rem 0' : '0 0 .8rem 0',
    }}>
      <Card sx={{
        // minWidth: 275,
        width: '100%',
        height: '100%',
      }}>
        <CardContent sx={{padding: '.8rem .8rem 0 .8rem'}}>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Hábito
          </Typography>
          <Typography
            variant="h5"
            component="div"
            sx={{
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              // display: '-webkit-box',
              whiteSpace: 'nowrap',
              display: 'block',
              // width: '13ch',
              // webkitLineClamp: 2, 
              // webkitBoxOrient: 'vertical',
            }}>
            {habit.title}
          </Typography>
          <Typography color="text.secondary">
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
        <Stack direction="row" spacing={2} alignItems="center">
          {desktopVersion ? <CardActions>
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
          </CardActions> :
            <CheckCircleIcon sx={{margin: '1rem'}} onClick={() => {
                habitUpdate({
                  "achieved": true,
                  "how_much_achieved": 100
                }, habit.id)
              }}/>}
          {desktopVersion ?
            <CardActions>
              <Button
                size="small"
                onClick={() => {
                  // console.log('habit id: ', habit.id)
                  habitDelete(habit.id);
                }}>
                Deletar
              </Button>
            </CardActions> :
            <DeleteForeverIcon onClick={() => {
                  habitDelete(habit.id);
                }}/>}
          <ModalBase
            labelToCallModal={
              desktopVersion ? <CardActions>
                <Button
                  size="small">
                  Atualizar
                </Button>
              </CardActions> : 
                <EditIcon sx={{ color: 'black' }}/>
            }
            titleModal='Editar Hábitos'>
            <HabitForm edit habit={habit}/>
          </ModalBase>
        </Stack>
      </Card>
    </Box>
  );
}