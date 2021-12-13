import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
export default function CardGroup({ name, description, category, id }) {
  const history = useHistory();
  const goToGroupPage = () => history.push("/groups");
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
        <Button onClick={goToGroupPage} size="small">
          sub
        </Button>
        <Link key={id} to={`/groups/${id}`}>
          view group
        </Link>
      </CardActions>
    </Card>
  );
}
