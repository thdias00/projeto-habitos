import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import {
    BottomNavigationAction,
    Paper,
    Typography,
    ThemeProvider,
    Stack,
    Fab,
    Grid,
    CardContent,
    CardActions,
    Button,
    Avatar,
} from "@mui/material";
import ModalBase from "../ModalBase";
import ActivitiesForm from "../ActivitiesForm";
import AddIcon from "@mui/icons-material/Add";
import GroupsIcon from "@mui/icons-material/Groups";
import ListAltIcon from "@mui/icons-material/ListAlt";
import AssistantPhotoIcon from "@mui/icons-material/AssistantPhoto";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import Grid11 from "../Grids/Grid11";
import { useColors } from "../../providers/colors";
import IconUser from "../../assets/undraw_male_avatar_323b.svg";
import { useGroups } from "../../providers/groups";
import { useState, useEffect } from "react";
import { useAuth } from "../../providers/auth";
import { useActivities } from "../../providers/activities";
import api from "../../services/api";
import toast from "react-hot-toast";
import GoalForm from "../GoalForm";
import { useGoals } from "../../providers/goals";
import CircularProgressWithLabel from "../CircularProgressWithLabel";

export default function MobileGroupVersion() {
    const [first, setFirst] = useState(true);
    const [second, setSecond] = useState(false);
    const [third, setThird] = useState(false);
    const { token } = useAuth();
    const { activities, setActivities, activitieDelete } = useActivities();
    const { goals, setGoals, goalDelete, goalUpdate } = useGoals();
    const { theme } = useColors();
    const { subscribe, unsubscribe, getMyGroups } = useGroups();
    const groups = JSON.parse(localStorage.getItem("@happyhabits:group")) || {};
    const user = JSON.parse(localStorage.getItem("@happyhabits:user")) || {};
    const [users, setUsers] = useState([]);

    useEffect(() => {
        token !== "" &&
            api
                .get(`/activities/?group=${groups.group.id}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                })
                .then((response) => {
                    setActivities(response.data.results);
                })
                .catch((err) => {
                    toast.error("Erro ao carregar atividades!");
                });
    }, [setActivities, token, groups.group.ud]);
    useEffect(() => {
        token !== "" &&
            api
                .get(`/goals/?group=${groups.group.id}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                })
                .then((response) => {
                    setGoals(response.data.results);
                })
                .catch((err) => {
                    toast.error("Erro ao carregar metas");
                });
    }, [setGoals, token, groups.group.id]);
    useEffect(() => {
        token !== "" &&
            api
                .get(`/groups/${groups.group.id}/`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                })
                .then((response) => {
                    setUsers(response.data.users_on_group);
                })
                .catch((err) => {
                    toast.error("Erro ao carregar metas");
                });
    }, [getMyGroups, token]);

    function Groups() {
        setFirst(true);
        setSecond(false);
        setThird(false);
    }
    function Activities() {
        setFirst(false);
        setSecond(true);
        setThird(false);
    }
    function Goals() {
        setFirst(false);
        setSecond(false);
        setThird(true);
    }

    return (
        <ThemeProvider theme={theme}>
            <Box
                sx={{
                    pb: 7,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    width: "100%",
                }}
            >
                <Grid
                    container
                    spacing={2}
                    sx={{ display: "flex", justifyContent: "center" }}
                >
                    <Grid11>
                        <Box
                            sx={{
                                borderRadius: "5px",
                                background: `${theme.palette.secondary.main}`,
                                height: "auto",
                                padding: " 1rem 0.5rem",
                                margin: "2rem",
                            }}
                        >
                            <Typography
                                color="black"
                                align="start"
                                component="p"
                                variant="h6"
                            >
                                {groups.group.name}
                            </Typography>
                            <Typography
                                color="grey.main"
                                align="start"
                                component="p"
                                variant="h6"
                            >
                                Criado por: {groups.group.creator.username}
                            </Typography>
                            {first && (
                                <>
                                    <Typography
                                        color="grey.main"
                                        align="start"
                                        margin="1.5rem 0rem"
                                        component="p"
                                        variant="h6"
                                    >
                                        {groups.group.description}
                                    </Typography>
                                    <div>
                                        {users.map((item) => item.id).includes(user.id) ?
                                            (
                                                <div style={{ display: "flex" }}>
                                                    <RemoveCircleIcon
                                                        onClick={() => unsubscribe(groups.group.id)}
                                                        sx={{ marginRight: "0.5rem" }}
                                                    />
                                                    <Typography> - Sair do Grupo</Typography>
                                                </div>
                                            ) : (
                                                <div style={{ display: "flex" }}>
                                                    <AddCircleIcon
                                                        onClick={() => subscribe(groups.group.id)}
                                                        sx={{ marginRight: "0.5rem" }}
                                                    />
                                                    <Typography> - Entrar no grupo</Typography>
                                                </div>
                                            )}
                                    </div>
                                </>
                            )}
                        </Box>
                    </Grid11>
                    {first && (
                        <Grid11>
                            <Box
                                sx={{
                                    borderRadius: "5px",
                                    background: `${theme.palette.secondary.main}`,
                                    height: "auto",
                                    padding: " 1rem 0.5rem",
                                    margin: "2rem",
                                }}
                            >
                                {users.map((item) => (
                                    <div
                                        key={item.id}
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                            margin: "0.5rem",
                                        }}
                                    >
                                        <Avatar
                                            alt="User"
                                            src={IconUser}
                                            sx={{ width: "20%", height: "100%" }}
                                        />
                                        <div
                                            style={{
                                                display: "flex",
                                                flexDirection: "column",
                                                margin: "0.5rem 1rem",
                                            }}
                                        >
                                            <Typography>{item.username}</Typography>
                                            <Typography>{item.email}</Typography>
                                        </div>
                                    </div>
                                ))}
                            </Box>
                        </Grid11>
                    )}
                </Grid>
                {second && (
                    <Grid
                        container
                        spacing={2}
                        sx={{ display: "flex", justifyContent: "center" }}
                    >
                        {activities.length > 0 ? (
                            activities.map((item) => (
                                <Grid11 key={item.id}>
                                    <Box
                                        sx={{
                                            borderRadius: "5px",
                                            background: `${theme.palette.secondary.main}`,
                                            height: "auto",
                                            padding: " 1rem 0.5rem",
                                            margin: "0.5rem 2rem",
                                        }}
                                    >
                                        <div
                                            style={{
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                            }}
                                        >
                                            <div>
                                                <CardContent
                                                    sx={{ display: "flex", alignItems: "center" }}
                                                >
                                                    <Typography variant="h6" component="div">
                                                        {item.title}
                                                    </Typography>
                                                    <CardActions>
                                                        <Button
                                                            color="grey"
                                                            size="small"
                                                            onClick={() => {
                                                                activitieDelete(item.id);
                                                            }}
                                                        >
                                                            <DeleteForeverIcon />
                                                        </Button>
                                                    </CardActions>
                                                </CardContent>
                                            </div>
                                        </div>
                                    </Box>
                                </Grid11>
                            ))
                        ) : (
                            <h2
                                style={{
                                    textAlign: "center",
                                    padding: "10%",
                                    background: "#ffffff",
                                    borderRadius: "8px",
                                }}
                            >
                                Nenhuma Atividade Cadastrada
                            </h2>
                        )}
                        <Stack alignItems="flex-end">
                            <ModalBase
                                labelToCallModal={
                                    <Fab sx={{ background: "#26C6DA" }} aria-label="add">
                                        <AddIcon />
                                    </Fab>
                                }
                                titleModal="Adicionar Atividade"
                            >
                                <ActivitiesForm groupId={groups.group.id} />
                            </ModalBase>
                        </Stack>
                    </Grid>
                )}
                {third && (
                    <Grid
                        container
                        spacing={2}
                        sx={{ display: "flex", justifyContent: "center" }}
                    >
                        {goals.length > 0 ? (
                            goals.map((item) => (
                                <Grid11 key={item.id}>
                                    <Box
                                        sx={{
                                            borderRadius: "5px",
                                            background: `${theme.palette.secondary.main}`,
                                            height: "auto",
                                            padding: " 1rem 0.5rem",
                                            margin: "0.5rem 2rem",
                                        }}
                                    >
                                        <div
                                            style={{
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                            }}
                                        >
                                            <div style={{ width: "100%" }}>
                                                <CardContent
                                                    sx={{
                                                        display: "flex",
                                                        flexDirection: "column",
                                                        alignItems: "center",
                                                        justifyContent: "center",
                                                        width: "100%",
                                                    }}
                                                >
                                                    <div>
                                                        <Typography
                                                            sx={{ marginBottom: "1rem" }}
                                                            variant="h6"
                                                            component="div"
                                                        >
                                                            {item.title}
                                                        </Typography>
                                                        <CircularProgressWithLabel
                                                            value={item.how_much_achieved}
                                                        />
                                                    </div>
                                                    <div style={{ display: "flex" }}>
                                                        <Button
                                                            onClick={() => {
                                                                goalUpdate(
                                                                    {
                                                                        achieved: true,
                                                                        how_much_achieved: 100,
                                                                    },
                                                                    item.id
                                                                );
                                                            }}
                                                            size="small"
                                                        >
                                                            Completo
                                                        </Button>
                                                        <Button
                                                            size="small"
                                                            onClick={() => {
                                                                goalDelete(item.id);
                                                            }}
                                                        >
                                                            Deletar
                                                        </Button>
                                                        <ModalBase
                                                            labelToCallModal={
                                                                <Button size="small">Atualizar</Button>
                                                            }
                                                            titleModal="Editar Metas"
                                                        >
                                                            <GoalForm
                                                                edit
                                                                groupId={groups.group.id}
                                                                goal={item}
                                                            />
                                                        </ModalBase>
                                                    </div>
                                                </CardContent>
                                            </div>
                                        </div>
                                    </Box>
                                </Grid11>
                            ))
                        ) : (
                            <h2
                                style={{
                                    textAlign: "center",
                                    padding: "10%",
                                    background: "#ffffff",
                                    borderRadius: "8px",
                                }}
                            >
                                Nenhuma Atividade Cadastrada
                            </h2>
                        )}
                    </Grid>
                )}
                {third && (
                    <Stack alignItems="flex-end">
                        <ModalBase
                            labelToCallModal={
                                <Fab sx={{ background: "#26C6DA" }} aria-label="add">
                                    <AddIcon />
                                </Fab>
                            }
                            titleModal="Adicionar Meta"
                        >
                            <GoalForm groupId={groups.group.id} />
                        </ModalBase>
                    </Stack>
                )}
                <Paper
                    sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
                    elevation={3}
                >
                    <BottomNavigation showLabels>
                        <BottomNavigationAction
                            label="Participantes"
                            icon={<GroupsIcon color={first ? "#000000" : "grey"} />}
                            onClick={Groups}
                        />
                        <BottomNavigationAction
                            label="Atividades"
                            icon={<ListAltIcon color={second ? "#000000" : "grey"} />}
                            onClick={Activities}
                        />
                        <BottomNavigationAction
                            label="Metas"
                            icon={<AssistantPhotoIcon color={third ? "#000000" : "grey"} />}
                            onClick={Goals}
                        />
                    </BottomNavigation>
                </Paper>
            </Box>
        </ThemeProvider >
    );
}
