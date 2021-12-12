import { Box, Typography, Stack, Paper } from "@mui/material";
import { useHabits } from "../../providers/habits";
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import { LinkContainer } from './styles';
import CircularProgressWithLabel from '../CircularProgressWithLabel';

const DashboardCardHabits = () => {
  const { habits } = useHabits();
  return (<>
    <Stack>
      <Paper
        elevation={4}
        sx={{
          padding: '1rem',
          width: 300,
          height: 140,
          backgroundColor: 'white'
        }}>
        <Stack
          direction="row"
          justifyContent="space-around"
          alignItems="center">
          <Box>
            <Box>
              <Typography  component="div" color="text.secondary">
                <Stack
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="center"
                  spacing={1}>
                  <FitnessCenterIcon />
                  <Typography
                    variant="h6"
                    component="div" >
                    Hábitos
                  </Typography>
                </Stack>
              </Typography>
            </Box>
            {habits.length === 0 ?
              <Stack color="text.secondary" alignItems="center">
                <ErrorOutlineIcon />
                <Typography component="div">
                  "Dados não disponíveis" 
                </Typography>
              </Stack> :
              <Box>
                <Typography component="span" sx={{
                  fontWeight: 900,
                  fontSize: '24px',
                  }}>
                    {habits.filter(el => el.achieved === true).length}
                  </Typography>
                <Typography component="span" color="text.secondary">
                  /{habits.length} hábitos completados
                </Typography>
                <Stack
                  direction="row"
                  justifyContent="space-around"
                  alignItems="center">
                  <CircularProgressWithLabel
                  value={Math.round(habits.reduce((acc, val) => acc + val.how_much_achieved, 0)/habits.length)}
                  />
                  <Typography color="text.secondary">
                    &nbsp; total hábitos atingidos
                  </Typography>
                </Stack>
              </Box>}
          </Box>
          <LinkContainer
            to="/habitsandgroups">
            <ArrowForwardIosIcon
              fontSize="small" />
          </LinkContainer>
        </Stack>
      </Paper>
    </Stack>
  </>)
}

export default DashboardCardHabits
