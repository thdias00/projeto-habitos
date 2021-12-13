import Grid from "@mui/material/Grid";

function Grid9({ children }) {
  return <Grid xs={9} sm={9} md={9} lg={9} xl={9}>
    {children}
  </Grid>;
}

export default Grid9;

/*
Cada ponto de interrupção (uma chave) corresponde a uma largura de tela fixa (um valor):

xs, extra pequeno: 0 px
sm, pequeno: 600px
md, médio: 900px
lg, grande: 1200px
xl, extragrande: 1536px

*/
