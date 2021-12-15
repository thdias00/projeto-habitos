import {
  Card,
  CardActions,
  CardContent,
  Typography,
  Button,
  Stack,
  Fab,
  ThemeProvider,
} from "@mui/material";
import ModalBase from "../../components/ModalBase";
import ActivitiesForm from "../ActivitiesForm";
import AddIcon from "@mui/icons-material/Add";
import api from "../../services/api";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { useAuth } from "../../providers/auth";
import { useColors } from "../../providers/colors";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

import { useActivities } from "../../providers/activities";

const Activities = ({ groupId }) => {
  const { theme } = useColors();
  const { token } = useAuth();
  const { activities, setActivities, activitieDelete } = useActivities();

  useEffect(() => {
    token !== "" &&
      api
        .get(`/activities/?group=${groupId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          setActivities(response.data.results);
        })
        .catch((err) => {
          toast.error("Error during activities retrieving!");
        });
  }, [setActivities, token, groupId]);

  return (
    <ThemeProvider theme={theme}>
      <div>
        {activities.length > 0 ?
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "flex-start" }}>
            {activities.map((item) =>
              <Card key={item.id} sx={{ margin: "1%", width: "30%" }}>
                <CardContent sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <Typography variant="h6" component="div">
                    {item.title}
                  </Typography>
                  <CardActions>
                    <Button
                      color="grey"
                      size="small"
                      onClick={() => {
                        activitieDelete(item.id);
                      }}>
                      <DeleteForeverIcon />
                    </Button>
                  </CardActions>
                </CardContent>
              </Card>
            )}
          </div> :
          <h2 style={{ textAlign: "center", padding: "10%", background: "#ffffff", borderRadius: "8px" }}>Nenhuma Atividade Cadastrada</h2>}
        <Stack
          alignItems="flex-end">
          <ModalBase
            labelToCallModal={
              <Fab sx={{ background: "#26C6DA" }} aria-label="add">
                <AddIcon />
              </Fab>}
            titleModal='Adicionar Atividade'>
            <ActivitiesForm groupId={groupId} />
          </ModalBase>
        </Stack>
      </div>
    </ThemeProvider>
  );
};
export default Activities;
