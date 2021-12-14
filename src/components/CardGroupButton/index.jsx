import * as React from "react";
import Button from "@mui/material/Button";
import { useGroups } from "../../providers/groups";
import { Box } from "@mui/material";
import { useAuth } from "../../providers/auth";
export const CardGroupButton = ({ id, idCreator }) => {
  const { groups, subscribe, unsubscribe, myGroups, myCreatedGroups } =
    useGroups();
  const { user } = useAuth();
  console.log(user.id, idCreator);
  console.log(myCreatedGroups);
  // const include = myGroups.includes(id);
  console.log(myGroups);
  return (
    <>
      <Box></Box>
      <Box>
        {/* include === true ? // ( */}
        <Button
          variant="contained"
          disableElevation
          onClick={() => unsubscribe(id)}
        >
          unsubscribe
        </Button>
        {/* // ) : ( */}
        <Button
          variant="contained"
          disableElevation
          onClick={() => subscribe(id)}
        >
          subscribe
        </Button>
      </Box>
    </>
  );
};
