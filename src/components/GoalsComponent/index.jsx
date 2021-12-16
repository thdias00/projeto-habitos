import { Fab, Box, Stack } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ModalBase from '../ModalBase';
import GoalForm from '../GoalForm';
import GoalCard from '../GoalCard';
import { useGoals } from '../../providers/goals';
import { useEffect } from 'react';
import { useAuth } from "../../providers/auth";
import api from "../../services/api";
import toast from 'react-hot-toast';

const GoalsComponent = ({ groupId }) => {
  const { token } = useAuth();
  const { goals, setGoals } = useGoals();
  useEffect(() => {
    token !== '' &&
      api.get(`/goals/?group=${groupId}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
        .then(response => {
          setGoals(response.data.results);
        })
        .catch(err => {
          toast.error('Erro ao recuperar metas!');
          console.log(err);
        })
  }, [setGoals, token, groupId]);
  return (<>
    <Box
      sx={{
        height: '100%',
        overFlowY: 'scroll',
        width: '80%',
        margin: 'auto',
      }}>
      <Box
        sx={{
          height: '75vh',
          overflowY: 'scroll',
        }}>
        {goals.length === 0 ?
          'Você não tem metas cadastradas. Clique para adicionar.' :
          goals.map(el => <GoalCard key={el.id} goal={el} groupId={groupId} />)}
      </Box>
      <Stack
        alignItems="flex-end">
        <ModalBase
          labelToCallModal={
            <Fab color="primary" aria-label="add">
              <AddIcon />
            </Fab>}
          titleModal='Adicionar Meta'>
          <GoalForm groupId={groupId} />
        </ModalBase>
      </Stack>
    </Box>
  </>)
}

export default GoalsComponent