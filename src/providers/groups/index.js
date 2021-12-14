import { createContext, useContext, useEffect, useState } from "react";
import api from "../../services/api";

import { useAuth } from "../auth";
import jwt_decode from "jwt-decode";

export const GroupsContext = createContext();

export const GroupsProvider = ({ children }) => {
  const [myGroups, setMyGroups] = useState([]);
  const [myCreatedGroups, setMyCreatedGroups] = useState([]);
  const [groups, setGroups] = useState([]);
  const [page, setPage] = useState(1);

  const nextGroupPage = () => {
    setPage(page + 1);
    console.log(page);
  };
  const backGroupPage = () => {
    setPage(page - 1);
    console.log(page);
  };

  const { token } = useAuth();
  useEffect(() => {
    const userId = jwt_decode(token).user_id;

    api
      .get(`/groups/?page=${page}`)
      .then((response) => {
        setGroups(response.data.results);
        console.log("foii");
        setMyCreatedGroups(
          groups.filter((item) => item.creator.id === userId.id)
        );
      })
      .catch((error) => console.log(error));
  }, []);

  const getMyGroups = () => {
    api
      .get("/groups/subscriptions/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => setMyGroups(response.data));
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
      }}
    >
      {children}
    </GroupsContext.Provider>
  );
};

export const useGroups = () => useContext(GroupsContext);
