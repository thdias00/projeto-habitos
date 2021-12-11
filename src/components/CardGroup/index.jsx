import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function CardGroup({ name, description }) {
  return (
    <Card sx={{ width: "200px" }}>
      <CardContent>
        {/* <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Grupo:
        </Typography> */}
        <Typography variant="h6" component="div">
          {name}
        </Typography>
        {/* <Typography sx={{ mb: 1.5 }} color="text.secondary">
          info
        </Typography> */}
        <Typography variant="body2">{description}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small">ver mais</Button>
      </CardActions>
    </Card>
  );
}
