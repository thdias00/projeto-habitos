import { useState } from "react";
import { useGroups } from "../../providers/groups";
import { TextField, Stack, CardActions } from "@mui/material";
import ComponentButton from "../Button";
import { useAuth } from "../../providers/auth";
export const GroupFormEdit = ({ edit, id }) => {
  const { groupUpdate, groupUpdated, groupCreate } = useGroups();
  const { user } = useAuth();
  const [name, setName] = useState(() => {
    return groupUpdated ? groupUpdated.name : "";
  });
  const [category, setCategory] = useState(() => {
    return groupUpdated ? groupUpdated.category : "";
  });
  const [description, setDescription] = useState(() => {
    return groupUpdated ? groupUpdated.description : "";
  });

  const changeGroup = () => {
    console.log();
    groupUpdate(
      {
        name,
        category,
        description,
      },
      id
    );
  };
  console.log(name, category, description);
  return (
    <>
      <Stack>
        <TextField
          variant="standard"
          type="text"
          label="nome do grupo"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          variant="standard"
          type="text"
          label="Descrição"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <TextField
          variant="standard"
          type="text"
          label="categoria"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
      </Stack>
      <Stack direction="row" spacing={2}>
        {edit === "editGroup" ? (
          <CardActions>
            <ComponentButton onClick={changeGroup}>Atualizar</ComponentButton>
          </CardActions>
        ) : (
          <CardActions>
            <ComponentButton size="small" onClick={() => { groupCreate({ name, description, category }) }}>Adicionar</ComponentButton>
          </CardActions>
        )}
      </Stack>
    </>
  );
};
