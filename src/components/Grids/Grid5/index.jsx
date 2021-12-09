import Grid from "@mui/material/Grid";

function Grid5({ children }) {
  return;
  <Grid xs={5} sm={5} md={5} lg={5} xl={5}>
    {children}
  </Grid>;
}

export default Grid5;

/*
Cada ponto de interrupção (uma chave) corresponde a uma largura de tela fixa (um valor):

xs, extra pequeno: 0 px
sm, pequeno: 600px
md, médio: 900px
lg, grande: 1200px
xl, extragrande: 1536px

*/
