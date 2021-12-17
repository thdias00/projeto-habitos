import Grid from "@mui/material/Grid";

function Grid4({ children }) {
  return <Grid xs={4} sm={4} md={4} lg={4} xl={4}>
    {children}
  </Grid>;
}

export default Grid4;

/*
Cada ponto de interrupção (uma chave) corresponde a uma largura de tela fixa (um valor):

xs, extra pequeno: 0 px
sm, pequeno: 600px
md, médio: 900px
lg, grande: 1200px
xl, extragrande: 1536px

*/
