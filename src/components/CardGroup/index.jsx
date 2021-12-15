import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { CardGroupButton } from "../../components/CardGroupButton/index";
import { useAuth } from "../../providers/auth";
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
    localStorage.removeItem("@happyhabits:group");
    localStorage.setItem(
      "@happyhabits:group",
      JSON.stringify({ group })
    );
  }
  return (
    <Card
      sx={{
        width: "100%",
        padding: ".2rem",
        margin: mobileVersion ? "0 0 .8rem 0" : "0 0 2rem 0",
      }}>
      <CardContent>
        <Typography variant="h6" component="div">
          {name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {category}
        </Typography>
        <Typography variant="body2">{description}</Typography>
      </CardContent>
      <CardActions>
        <CardGroupButton id={id} creator={creatorId} />
        <Link
          onClick={updateGroupOnLocalStorage}
          size="small"
          key={id}
          to={`/groups/${id}`}
        >
          view group
        </Link>
      </CardActions>
    </Card>
  );
}
