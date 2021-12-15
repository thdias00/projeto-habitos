// se inscrever, editar e criar grupos, e redirecionar para a
//  pagina de detalhes de um grupo escolhido
//Criar botão que desinscreve/ inscreve o usuário e remove/edita o grupo se dono.
//ajustar tamanho
//ajustar estilização da paginação
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
// import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { CardGroupButton } from "../../components/CardGroupButton/index";
import { useAuth } from "../../providers/auth";

export default function CardGroup({ name, description, category, id, activities, users_on_group }) {
  const { mobileVersion, desktopVersion } = useAuth();

  function Teste() {
    localStorage.removeItem("@happyhabits:group");
    localStorage.setItem("@happyhabits:group", JSON.stringify({ tittle: name, id, activities, users_on_group }))
  }
  return (
    <Card
      sx={{
        width: "100%",
        // width: "550px",
        padding: ".2rem",
        margin: mobileVersion ? "0 0 .8rem 0": "0 0 2rem 0", 
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
        <CardGroupButton />
        <Link onClick={Teste} size="small" key={id} to={`/groups/${id}`}>
          view group
        </Link>
      </CardActions>
    </Card>
  );
}
