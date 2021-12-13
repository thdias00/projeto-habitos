import Participantes from "../../components/Participants";
import { Grid, Box, Typography } from "@mui/material";
import Grid6 from "../../components/Grids/Grid6";
import Activities from "../../components/Atividades";
import ResponsiveAppBar from "../../components/Header"

const Groups = () => {
    const groups = JSON.parse(localStorage.getItem("@happyhabits:group")) || {};

    return (
        <>
            <ResponsiveAppBar />
            <Grid container>
                <Grid6>
                    <Box
                        sx={{
                            padding: "1rem",
                            margin: "2rem",
                            height: "90vh",
                            width: "auto",
                            backgroundColor: "#1B5E20",
                        }}
                    >Metas</Box>
                </Grid6>
                <Grid6>
                    <Box
                        sx={{
                            padding: "1rem",
                            margin: "2rem",
                            height: "90vh",
                            width: "auto",
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
                        <Activities />
                    </Box>
                </Grid6>
            </Grid>
        </>
    )
};
export default Groups;
