import Grid from "@mui/material/Grid";

function Grid6({ children }) {
  return;
  <Grid xs={6} sm={6} md={6} lg={6} xl={6}>
    {children}
  </Grid>;
}

export default Grid6;

/*
Cada ponto de interrupção (uma chave) corresponde a uma largura de tela fixa (um valor):

xs, extra pequeno: 0 px
sm, pequeno: 600px
md, médio: 900px
lg, grande: 1200px
xl, extragrande: 1536px

*/
