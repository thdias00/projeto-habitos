import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import ComponentButton from "../Button";
import { useHistory } from "react-router-dom";
import { CardGroupButton } from "../../components/CardGroupButton/index";
import { useAuth } from "../../providers/auth";
import { StyledContainer } from "./style";
export default function CardGroup({
  group,
  name,
  id,
  description,
  category,
  creatorId,
}) {
  const { mobileVersion } = useAuth();
  function updateGroupOnLocalStorage() {
    history.push(`/groups/${id}`);
    localStorage.removeItem("@happyhabits:group");
    localStorage.setItem("@happyhabits:group", JSON.stringify({ group }));
  }
  const history = useHistory();
  return (
    <StyledContainer>
      <Card
        sx={{
          width: "100%",
          padding: ".2rem",
          margin: mobileVersion ? "0 0 .8rem 0" : "0 0 2rem 0",
        }}
      >
        <CardContent>
          <Typography variant="h6" component="div">
            {name}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            categoria: {category}
          </Typography>
          <p>descrição: {description}</p>
        </CardContent>
        <CardActions>
          <CardGroupButton id={id} creator={creatorId} />
          <ComponentButton onClick={updateGroupOnLocalStorage}>
            ver mais
          </ComponentButton>
        </CardActions>
      </Card>
    </StyledContainer>
  );
}
