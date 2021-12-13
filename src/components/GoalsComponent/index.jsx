import { Fab, Box, Stack } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ModalBase from '../ModalBase';
import GoalForm from '../GoalForm';
import GoalCard from '../GoalCard';

const GoalsComponent = (arr, groupId) => {
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
        {arr.length === 0 ?
          'Você não tem metas cadastradas. Clique para adicionar.' :
          arr.map(el => <GoalCard key={el.id} goal={el} groupId={groupId}/>)}
      </Box>
        <Stack
          alignItems="flex-end">
          <ModalBase
            labelToCallModal={
              <Fab color="primary" aria-label="add">
                <AddIcon />
              </Fab>}
            titleModal='Adicionar Hábitos'>
            <GoalForm/>
          </ModalBase>
        </Stack>
    </Box>
  </>)
}

export default GoalsComponent
