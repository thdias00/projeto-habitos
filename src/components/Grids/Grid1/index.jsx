import Grid from "@mui/material/Grid";

function Grid1({ children }) {
  return;
  <Grid xs={1} sm={1} md={1} lg={1} xl={1}>
    {children}
  </Grid>;
}

export default Grid1;

/*
Cada ponto de interrupção (uma chave) corresponde a uma largura de tela fixa (um valor):

xs, extra pequeno: 0 px
sm, pequeno: 600px
md, médio: 900px
lg, grande: 1200px
xl, extragrande: 1536px

*/
