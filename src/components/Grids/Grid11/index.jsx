import Grid from "@mui/material/Grid";

function Grid11({ children, width }) {
  return <Grid xs={11} sm={11} md={11} lg={11} xl={11} sx={{ width: `${width}` }}>
    {children}
  </Grid>;
}

export default Grid11;

/*
Cada ponto de interrupção (uma chave) corresponde a uma largura de tela fixa (um valor):

xs, extra pequeno: 0 px
sm, pequeno: 600px
md, médio: 900px
lg, grande: 1200px
xl, extragrande: 1536px

*/
