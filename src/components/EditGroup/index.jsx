import { useEffect } from "react";
import api from "../../services/api";
import { useGroups } from "../../providers/groups/index";
import { GroupForm } from "../groupForm";
export const EditGroup = ({ idGroup }) => {
  const { groupUpdate } = useGroups();

  return (
    <button
      onClick={() =>
        groupUpdate(
          {
            achieved: true,
            how_much_achieved: 100,
          },
          idGroup
        )
      }
    >
      editar
    </button>
  );
};
