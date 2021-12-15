//Criar um botão que tem função de inscrever e desinscrever um usuário, no entanto
//se o usuario for o dono, permite editar/ excluir o grupo.

// 1 - criar funcionalidade de inscrever/desinscrever

// 2 - criar funcionalidades do criador

import * as React from "react";
import Button from "@mui/material/Button";
import { useGroups } from "../../providers/groups";
import { Box } from "@mui/material";
import { useAuth } from "../../providers/auth";
// import { useEffect } from "react";
export const CardGroupButton = ({ id, creator }) => {
  const {
    // groups,
    subscribe,
    unsubscribe,
    myGroups,
    // myCreatedGroups,
    // getMyGroups,
  } = useGroups();

  let myGroupsIds = myGroups.map((item) => item.id);

  const { user } = useAuth();
  return user.id === creator ? (
    <Box>Renderizar dono</Box>
  ) : (
    <Box>
      {myGroupsIds.includes(id) ? (
        <Button
          variant="contained"
          disableElevation
          onClick={() => unsubscribe(id)}
        >
          sair
        </Button>
      ) : (
        <Button
          variant="contained"
          disableElevation
          onClick={() => subscribe(id)}
        >
          entrar
        </Button>
      )}
    </Box>
  );
};
