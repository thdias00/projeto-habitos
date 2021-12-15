import { createContext, useContext, useEffect, useState } from "react";
import api from "../../services/api";
import toast from "react-hot-toast";
import { useAuth } from "../auth";

export const GroupsContext = createContext();

export const GroupsProvider = ({ children }) => {
  const [myGroups, setMyGroups] = useState([]);
  const [myCreatedGroups, setMyCreatedGroups] = useState([]);
  const [groups, setGroups] = useState([]);
  const [page, setPage] = useState(1);

  const nextGroupPage = () => {
    setPage(page + 1);
  };
  const backGroupPage = () => {
    setPage(page - 1);
  };

  const { token, userId } = useAuth();

  useEffect(() => {
    api
      .get(`/groups/?page=${page}`)
      .then((response) => {
        setGroups(response.data.results);
        setMyCreatedGroups(
          groups.filter((item) => item.creator.id === userId.id)
        );
      })
      .catch((error) => console.log(error));
  }, [page, userId.id, groups]);

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

  const groupCreate = (obj) => {
    api.post(`/groups/`, obj, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(_ => toast.success("Grupo criado com sucesso"))
      .catch(err => console.log(err));
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
        groupCreate,
      }}
    >
      {children}
    </GroupsContext.Provider>
  );
};

export const useGroups = () => useContext(GroupsContext);
