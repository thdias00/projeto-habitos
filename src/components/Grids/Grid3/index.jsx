import Grid from "@mui/material/Grid";

function Grid3({ children }) {
  return <Grid xs={3} sm={3} md={3} lg={3} xl={3}>
    {children}
  </Grid>;
}

export default Grid3;

/*
Cada ponto de interrupção (uma chave) corresponde a uma largura de tela fixa (um valor):

xs, extra pequeno: 0 px
sm, pequeno: 600px
md, médio: 900px
lg, grande: 1200px
xl, extragrande: 1536px

*/
