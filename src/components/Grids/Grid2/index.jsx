import Grid from "@mui/material/Grid";

function Grid2({ children }) {
  return;
  <Grid xs={2} sm={2} md={2} lg={2} xl={2}>
    {children}
  </Grid>;
}

export default Grid2;

/*
Cada ponto de interrupção (uma chave) corresponde a uma largura de tela fixa (um valor):

xs, extra pequeno: 0 px
sm, pequeno: 600px
md, médio: 900px
lg, grande: 1200px
xl, extragrande: 1536px

*/
