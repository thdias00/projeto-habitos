import Grid from "@mui/material/Grid";

function Grid8({ children }) {
  return;
  <Grid xs={8} sm={8} md={8} lg={8} xl={8}>
    {children}
  </Grid>;
}

export default Grid8;

/*
Cada ponto de interrupção (uma chave) corresponde a uma largura de tela fixa (um valor):

xs, extra pequeno: 0 px
sm, pequeno: 600px
md, médio: 900px
lg, grande: 1200px
xl, extragrande: 1536px

*/
