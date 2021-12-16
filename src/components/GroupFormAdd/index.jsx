import { useState } from "react";
import { useGroups } from "../../providers/groups";
import { TextField, Stack, CardActions } from "@mui/material";
import ComponentButton from "../Button";
import { useAuth } from "../../providers/auth";

const GroupFormAdd = ({edit, group}) => {
  const { groupUpdate, groupCreate } = useGroups();
  const [name, setName] = useState(() => {
    return group ? group.name : ''; 
  });
  const [description, setDescription] = useState(() => {
    return group ? group.description : ''; 
  });
  const [category, setCategory] = useState(() => {
    return group ? group.category : ''; 
  });
  return (
    <>
      <Stack>
        <TextField
          variant="standard"
          type="text"
          label="nome do grupo"
          value={name}
          onChange={e => setName(e.target.value)}/>
        <TextField
          variant="standard"
          type="text"
          label="descrição"
          value={description}
          onChange={e => setDescription(e.target.value)}/>
        <TextField
          variant="standard"
          type="text"
          label="categoria"
          value={category}
          onChange={e => setCategory(e.target.value)}/>
      </Stack>
      <Stack direction="row" spacing={2}>
      {edit ? <CardActions>
          <ComponentButton
            size="small"
            onClick={() => groupUpdate({name, description, category}, group.id)}>
            Atualizar
          </ComponentButton>
      </CardActions> :
      <CardActions>
          <ComponentButton
            size="small"
              onClick={() => {
                groupCreate({name, description, category});
              }}>
            Adicionar
          </ComponentButton>
      </CardActions>}
    </Stack>
    </>
  )
}

export default GroupFormAdd