import Grid from "@mui/material/Grid";

function Grid7({ children }) {
  return;
  <Grid xs={7} sm={7} md={7} lg={7} xl={7}>
    {children}
  </Grid>;
}

export default Grid7;

/*
Cada ponto de interrupção (uma chave) corresponde a uma largura de tela fixa (um valor):

xs, extra pequeno: 0 px
sm, pequeno: 600px
md, médio: 900px
lg, grande: 1200px
xl, extragrande: 1536px

*/
