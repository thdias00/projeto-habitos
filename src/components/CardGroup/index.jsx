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
export default function CardGroup({ group }) {
  return (
    <Card sx={{ width: "200px" }}>
      <CardContent>
        <Typography variant="h6" component="div">
          {group.name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {group.category}
        </Typography>
        <Typography variant="body2">{group.description}</Typography>
      </CardContent>
      <CardActions>
        <CardGroupButton id={group.id} creator={group.creator.id} />
        <Link size="small" key={group.id} to={`/groups/${group.id}`}>
          view group
        </Link>
      </CardActions>
    </Card>
  );
}
