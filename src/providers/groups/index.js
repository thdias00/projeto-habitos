import { createContext, useContext, useEffect, useState } from "react";
import api from "../../services/api";
import toast from "react-hot-toast";

import { useAuth } from "../auth";

export const GroupsContext = createContext();

export const GroupsProvider = ({ children }) => {
  const [myGroups, setMyGroups] = useState([]);
  const [myCreatedGroups, setMyCreatedGroups] = useState([]);
  const [myCreatedGroup, setMyCreatedGroup] = useState("");
  const [groups, setGroups] = useState([]);
  const [page, setPage] = useState(1);

  const nextGroupPage = () => {
    setPage(page + 1);
  };
  const backGroupPage = () => {
    setPage(page - 1);
  };

  const { token, user } = useAuth();

  useEffect(() => {
    api
      .get(`/groups/`)
      .then((response) => {
        setGroups([response.data]);
        // console.log(response.data);
        // setMyCreatedGroups(
        //   groups.filter((item) => item.creator.id === userId.id)
        // );
        // setMyCreatedGroup(
        //   groups.find((item) => item.id === id && item.creator.id === user.id)
      })
      .catch((error) => console.log(error));
  }, [page, myGroups]);

  const getMyGroups = () => {
    api
      .get("/groups/subscriptions/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setMyGroups(response.data);
      });
  };

  const unsubscribe = (id) => {
    api
      .delete(`/groups/${id}/unsubscribe/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((_) => getMyGroups());
  };
  const subscribe = (id) => {
    api
      .post(
        `/groups/${id}/subscribe/`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then(
        (_) => getMyGroups()
        /*Add toast here*/
      )
      .catch((error) => console.log(error));
  };

  const [groupUpdated, setGroupUpdated] = useState({});
  const getSpecificGroup = (groupId) => {
    api
      .get(`/groups/${groupId}/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setMyGroups(response.data);
        setGroupUpdated(response.data);
      });
  };
  const groupUpdate = (obj, habitId) => {
    const token = localStorage.getItem("@happyhabits:token") || "";
    api
      .patch(`/groups/${habitId}/`, obj, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        getMyGroups();
        toast.success("grupo editado");

        getSpecificGroup(habitId);
      })
      .catch((err) => {
        toast.error("Error during update!");
        console.log(err);
      });
  };
  return (
    <GroupsContext.Provider
      value={{
        groups,
        nextGroupPage,
        backGroupPage,
        subscribe,
        unsubscribe,
        myGroups,
        myCreatedGroups,
        getMyGroups,
        token,
        groupUpdate,
        groupUpdated,
      }}
    >
      {children}
    </GroupsContext.Provider>
  );
};

export const useGroups = () => useContext(GroupsContext);
