import { useEffect, useState } from "react";
import { useAuth } from "../../providers/auth/index";
import api from "../../services/api";
import toast from "react-hot-toast";
import DashboardCardHabits from "../../components/DashboardCardHabits";
import CardGroup from "../CardGroup";
import { Grid, Box, List, ListSubheader, ListItem, Button, Typography } from "@mui/material";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useActivities } from "../../providers/activities";

export default function DashboardVersion() {
    const { token, mobileVersion } = useAuth();
    const [groups, setGroups] = useState([]);
    const [activities, setActivities] = useState([]);
    const { activitieDelete } = useActivities();

    useEffect(() => {
        token !== "" &&
            api
                .get("/groups/subscriptions/", {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                })
                .then((response) => {
                    setGroups(response.data);
                })
                .catch((err) => {
                    toast.error("Erro ao recuperar grupos!");
                });
    }, [token])

    return (
        (mobileVersion ?
            <Grid sx={{ width: "100%", height: "100%" }}>
                <DashboardCardHabits style={{ width: "100%", marginBottom: "1rem" }} />
                <Box sx={{ height: "81%" }}>
                    {groups.length === 0 ?
                        <>
                            <Box sx={{ background: "white", margin: "1rem", padding: "1rem", textAlign: "center", borderRadius: "5px" }}>Nenhuma atividade cadastrada</Box>
                            <Box sx={{ background: "white", margin: "1rem", padding: "1rem", textAlign: "center", borderRadius: "5px" }}>Você não faz parte de nenhum grupo</Box>
                        </>
                        :
                        <>
                            <Box sx={{ display: "flex", justifyContent: "center" }}>
                                <Typography
                                    color="white"
                                    padding="1rem 0 .6rem 0"
                                    align="center"
                                    component="h1"
                                    variant="h5">
                                    Suas Atividades
                                </Typography>
                            </Box>
                            <List
                                sx={{
                                    width: '100%',
                                    bgcolor: 'background.paper',
                                    position: 'relative',
                                    overflow: 'auto',
                                    height: "35%",
                                    textAlign: "center",
                                    '& ul': { padding: 0 },
                                }}
                                subheader={<li />}
                            >
                                {groups.map(item => item.activities.map((element) => (
                                    <li key={`section-${element}`}>
                                        <ul>
                                            <ListSubheader>{element.title}</ListSubheader>
                                            <ListItem sx={{ justifyContent: "center" }}>
                                                <Button
                                                    size="small"
                                                    onClick={() => {
                                                        activitieDelete(element.id);
                                                    }}>
                                                    <DeleteForeverIcon />
                                                </Button>
                                            </ListItem>
                                            <hr />
                                        </ul>
                                    </li>
                                )))}
                            </List>
                            <Box sx={{ height: "55%" }}>
                                <Typography
                                    color="white"
                                    padding="1rem 0 .6rem 0"
                                    align="center"
                                    component="h1"
                                    variant="h5">
                                    Seus Grupos
                                </Typography>
                                <Box sx={{ height: "53%", overflow: "scroll" }}>
                                    {groups.map((item) =>
                                        <CardGroup
                                            key={item.id}
                                            group={item}
                                            idCreator={item}
                                            name={item.name}
                                            id={item.id}
                                            activities={item.activities}
                                            users_on_group={item.users_on_group}
                                            description={item.description}
                                            category={item.category}
                                            creatorId={item.creator.id}
                                        />
                                    )}
                                </Box>
                            </Box>
                        </>
                    }

                </Box>
            </Grid>
            :
            <Grid sx={{ width: "100%", height: "100%" }}>
                <Box sx={{ display: "flex", flexDirection: groups.length > 0 ? "row" : "column", alignItems: "center", width: "100%", height: "45%" }}>
                    <DashboardCardHabits style={{ width: "99%", marginRight: "1%" }} />
                    <Box sx={{ height: "100%", width: "49%", marginLeft: "1%" }}>
                        {groups.length === 0 ?
                            <Box>
                                <Box sx={{ background: "white", margin: "1rem", padding: "1rem", textAlign: "center", borderRadius: "5px" }}>Nenhuma atividade cadastrada</Box>
                                <Box sx={{ background: "white", margin: "1rem", padding: "1rem", textAlign: "center", borderRadius: "5px" }}>Você não faz parte de nenhum grupo</Box>
                            </Box>
                            :
                            <>
                                <Box sx={{ display: "flex", justifyContent: "center" }}>
                                    <Typography
                                        color="white"
                                        padding="1rem 0 .6rem 0"
                                        align="center"
                                        component="h1"
                                        variant="h5">
                                        Suas Atividades
                                    </Typography>
                                </Box>
                                <List
                                    sx={{
                                        width: '100%',
                                        bgcolor: 'background.paper',
                                        position: 'relative',
                                        overflow: 'auto',
                                        height: "72%",
                                        textAlign: "center",
                                        '& ul': { padding: 0 },
                                    }}
                                    subheader={<li />}
                                >
                                    {groups.map(item => item.activities.map((element) => (
                                        <li key={`section-${element}`}>
                                            <ul>
                                                <ListSubheader>{element.title}</ListSubheader>
                                                <ListItem sx={{ justifyContent: "center" }}>
                                                    <Button
                                                        size="small"
                                                        onClick={() => {
                                                            activitieDelete(element.id);
                                                        }}>
                                                        <DeleteForeverIcon />
                                                    </Button>
                                                </ListItem>
                                                <hr />
                                            </ul>
                                        </li>
                                    )))}
                                </List>
                            </>
                        }
                    </Box>
                </Box>
                {groups.length > 0 && <Box sx={{ height: "55%" }}>
                    <Typography
                        color="white"
                        padding="1rem 0 .6rem 0"
                        align="center"
                        component="h1"
                        variant="h5">
                        Seus Grupos
                    </Typography>
                    <Box sx={{ height: "82%", overflow: "scroll" }}>
                        {groups.map((item) =>
                            <CardGroup
                                key={item.id}
                                group={item}
                                idCreator={item}
                                name={item.name}
                                id={item.id}
                                activities={item.activities}
                                users_on_group={item.users_on_group}
                                description={item.description}
                                category={item.category}
                                creatorId={item.creator.id}
                            />
                        )}
                    </Box>
                </Box>}
            </Grid>
        )
    )
}