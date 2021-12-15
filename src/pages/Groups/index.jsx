import { Grid, Box, Typography, Stack, ThemeProvider } from "@mui/material";
import ResponsiveAppBar from "../../components/Header";
import Grid6 from "../../components/Grids/Grid6";
import { useParams } from "react-router-dom";
import GoalsComponent from "../../components/GoalsComponent";
import { useGoals } from "../../providers/goals";
import LinearProgressWithLabel from "../../components/LinearProgressWithLabel";
import Participantes from "../../components/Participants";
import Activities from "../../components/Atividades";
import { useColors } from "../../providers/colors";
import { useAuth } from "../../providers/auth";

const Groups = () => {

    const { theme } = useColors()
    const { id } = useParams();
    const { goals } = useGoals();
    const { mobileVersion, desktopVersion } = useAuth();

    const groups = JSON.parse(localStorage.getItem("@happyhabits:group")) || {};
    return (
        <div>
            <ThemeProvider theme={theme}>
                <ResponsiveAppBar color={mobileVersion ? theme.palette.primary.light : theme.palette.primary.main} />
                <Grid container spacing={2}>
                    <Grid6>
                        <Box
                            sx={{
                                padding: "1rem",
                                margin: "2rem",
                                height: "90vh",
                                backgroundColor: "#1B5E20",
                            }}
                        >
                            <Typography
                                color="white"
                                padding="1rem 0 .6rem 0"
                                align="center"
                                component="h1"
                                variant="h5"
                            >
                                Metas
                            </Typography>
                            {goals.length !== 0 && <Stack
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    backgroundColor: 'black',
                                    padding: '.8rem',
                                    margin: '.8rem auto',
                                    width: '80%',
                                }}
                            >
                                <Box>
                                    <LinearProgressWithLabel
                                        white='true'
                                        value={Math.round(goals.reduce((acc, val) => acc + val.how_much_achieved, 0) / goals.length)} />
                                </Box>
                            </Stack>}
                            <GoalsComponent groupId={id} />
                        </Box>
                    </Grid6>
                    <Grid6>
                        <Box
                            sx={{
                                padding: "1rem",
                                margin: "2rem",
                                height: "90vh",
                                backgroundColor: "#1B5E20",
                            }}
                        >
                            <Typography
                                color="white"
                                padding="1rem 0 .6rem 0"
                                align="center"
                                component="h1"
                                variant="h5"
                            >
                                Grupo - {groups.tittle}
                            </Typography>
                            <Typography
                                color="white"
                                padding="1rem 0 .6rem 0"
                                align="center"
                                component="h2"
                                variant="h5"
                            >
                                Participantes
                            </Typography>
                            <Participantes />
                            <Typography
                                color="white"
                                padding="1rem 0 .6rem 0"
                                align="center"
                                component="h2"
                                variant="h5"
                            >
                                Atividades
                            </Typography>
                            <Activities groupId={id} />
                        </Box>
                    </Grid6>
                </Grid>
            </ThemeProvider>
        </div>
    )
}
export default Groups;
