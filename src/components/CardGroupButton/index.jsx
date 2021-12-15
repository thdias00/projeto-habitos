//Criar um botão que tem função de inscrever e desinscrever um usuário, no entanto
//se o usuario for o dono, permite editar/ excluir o grupo.

// 1 - criar funcionalidade de inscrever/desinscrever

// 2 - criar funcionalidades do criador

import * as React from "react";
import Button from "@mui/material/Button";
import { useGroups } from "../../providers/groups";
import { Box } from "@mui/material";
import { useAuth } from "../../providers/auth";
import { useEffect } from "react";
import { GroupForm } from "../groupForm";
import ModalBase from "../ModalBase";
import { useState } from "react";
export const CardGroupButton = ({ id, creator }) => {
  const {
    groups,
    subscribe,
    unsubscribe,
    myGroups,
    myCreatedGroups,
    getMyGroups,
    groupUpdate,
    groupUpdated,
    myGroupsIds,
  } = useGroups();
  const { user } = useAuth();

  console.log(myGroupsIds);

  return user.id === creator ? (
    <Box>
      <span> você é o criador desse grupo</span>
      <ModalBase labelToCallModal="editar Grupo" titleModal="Edite seu grupo">
        <GroupForm edit={"editGroup"} id={id} />
      </ModalBase>
    </Box>
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
