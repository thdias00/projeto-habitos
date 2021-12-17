//Criar um botão que tem função de inscrever e desinscrever um usuário, no entanto
//se o usuario for o dono, permite editar/ excluir o grupo.

// 1 - criar funcionalidade de inscrever/desinscrever

// 2 - criar funcionalidades do criador

import * as React from "react";
import ComponentButton from "../Button";
import { useGroups } from "../../providers/groups";
import { Box } from "@mui/material";
import { useAuth } from "../../providers/auth";
import { GroupFormEdit } from "../GroupFormEdit";
import ModalBase from "../ModalBase";
export const CardGroupButton = ({ id, creator }) => {
  const { subscribe, unsubscribe, myGroupsIds } = useGroups();
  const { user } = useAuth();

  return user.id === creator ? (
    <Box>
      <span> você é o criador desse grupo</span>
      <ModalBase labelToCallModal="editar Grupo" titleModal="Edite seu grupo">
        <GroupFormEdit edit={"editGroup"} id={id} />
      </ModalBase>
    </Box>
  ) : (
    <Box>
      {myGroupsIds.includes(id) ? (
        <ComponentButton color='success' size="small" onClick={() => unsubscribe(id)}>
          sair
        </ComponentButton>
      ) : (
        <ComponentButton color='success' size="small" onClick={() => subscribe(id)}>
          entrar
        </ComponentButton>
      )}
    </Box>
  );
};
