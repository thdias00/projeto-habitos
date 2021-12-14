//
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { CardGroupButton } from "../../components/CardGroupButton/index";
import { useGroups } from "../../providers/groups";
export default function CardGroup({
  name,
  id,
  activities,
  users_on_group,
  description,
  category,
  creatorId,
}) {
  function updateGroupOnLocalStorage() {
    localStorage.removeItem("@happyhabits:group");
    localStorage.setItem(
      "@happyhabits:group",
      JSON.stringify({ tittle: name, id, activities, users_on_group })
    );
  }
  return (
    <Card sx={{ width: "200px" }}>
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
