import * as React from "react";
import Button from "@mui/material/Button";
import { useGroups } from "../../providers/groups";

export const CardGroupButton = ({ id }) => {
  const { groups } = useGroups();
  console.log(groups);
  return (
    <Button variant="contained" disableElevation>
      sub
    </Button>
  );
};
