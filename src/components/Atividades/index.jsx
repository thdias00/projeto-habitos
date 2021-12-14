import {
  Card,
  CardActions,
  CardContent,
  Typography,
  Button,
  Stack,
  Fab,
} from "@mui/material";
import ModalBase from "../../components/ModalBase";
import ActivitiesForm from "../ActivitiesForm";
import AddIcon from "@mui/icons-material/Add";
import api from "../../services/api";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { useAuth } from "../../providers/auth";

import { useActivities } from "../../providers/activities";

const Activities = ({ groupId }) => {
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
          toast.error("Error during goal retrieving!");
        });
  }, [setActivities, token, groupId]);

  return (
    <div>
      {activities.length > 0 ? (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {activities.map((item) => (
            <Card key={item.id} sx={{ margin: "1%", width: "30%" }}>
              <CardContent>
                <Typography variant="h6" component="div">
                  {item.title}
                </Typography>
                <CardActions>
                  <Button
                    size="small"
                    onClick={() => {
                      activitieDelete(item.id);
                    }}
                  >
                    Deletar
                  </Button>
                </CardActions>
              </CardContent>
            </Card>
          ))}
        </div>
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
            <Fab color="primary" aria-label="add">
              <AddIcon />
            </Fab>
          }
          titleModal="Adicionar Atividade"
        >
          <ActivitiesForm groupId={groupId} />
        </ModalBase>
      </Stack>
    </div>
  );
};
export default Activities;
