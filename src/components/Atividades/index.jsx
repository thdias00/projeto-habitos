import {
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
import PinnedSubheaderList from "../ListaAtividades"
import { useActivities } from "../../providers/activities";

const Activities = ({ groupId }) => {
  const { theme } = useColors();
  const { token } = useAuth();
  const { activities, setActivities } = useActivities();

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
          toast.error("Erro ao recuperar atividades");
        });
  }, [setActivities, token, groupId]);

  return (
    <ThemeProvider theme={theme}>
      <div style={{ height: "35%" }}>
        {activities.length > 0 ?
          <PinnedSubheaderList atividades={activities} />
          :
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
