import Grid from "@mui/material/Grid";

function Grid10({ children }) {
  return <Grid xs={10} sm={10} md={10} lg={10} xl={10}>
    {children}
  </Grid>;
}

export default Grid10;

/*
Cada ponto de interrupção (uma chave) corresponde a uma largura de tela fixa (um valor):

xs, extra pequeno: 0 px
sm, pequeno: 600px
md, médio: 900px
lg, grande: 1200px
xl, extragrande: 1536px

*/
