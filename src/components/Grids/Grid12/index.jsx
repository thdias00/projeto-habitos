import Grid from "@mui/material/Grid";

function Grid12({ children }) {
  return;
  <Grid xs={12} sm={12} md={12} lg={12} xl={12}>
    {children}
  </Grid>;
}

export default Grid12;

/*
Cada ponto de interrupção (uma chave) corresponde a uma largura de tela fixa (um valor):

xs, extra pequeno: 0 px
sm, pequeno: 600px
md, médio: 900px
lg, grande: 1200px
xl, extragrande: 1536px

*/
