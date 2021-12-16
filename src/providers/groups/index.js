import { createContext, useContext, useEffect, useState } from "react";
import api from "../../services/api";
import toast from "react-hot-toast";
import { useAuth } from "../auth";

export const GroupsContext = createContext();
export const GroupsProvider = ({ children }) => {
  const [myGroupsIds, setMyGroupsIds] = useState([]);
  const [myGroups, setMyGroups] = useState([]);
  const [myCreatedGroups, setMyCreatedGroups] = useState([]);
  const [groups, setGroups] = useState([]);
  const [page, setPage] = useState(1);

  const nextGroupPage = () => {
    setPage(page + 1);
  };
  const backGroupPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const { token, user } = useAuth();

  useEffect(() => {
    api
      .get(`/groups/?page=${page}`)
      .then((response) => {
        setGroups(response.data.results);
      })

      .catch((error) => console.log(error));
  }, [page, user.id, myGroupsIds]);

  const getMyGroups = () => {
    api
      .get("/groups/subscriptions/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setMyGroups(response.data);
        setMyGroupsIds(response.data.map((item) => item.id));
      });
  };

  const unsubscribe = (id) => {
    api
      .delete(`/groups/${id}/unsubscribe/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((_) => {
        getMyGroups();
        toast.success("Você saiu do grupo");
      })
      .catch((err) => console.log(err, "ERRO AO DESINSCREVER"));
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
        (_) => {
          getMyGroups();

          toast.success("Você entrou no grupo");
        }
        /*Add toast here*/
      )
      .catch((error) => console.log(error, "ERRO AO INSCREVER"));
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

  const groupCreate = (obj) => {
    api
      .post(`/groups/`, obj, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((_) => toast.success("Grupo criado com sucesso"))
      .catch((err) => console.log(err));
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
        myGroupsIds,
        groupCreate,
      }}
    >
      {children}
    </GroupsContext.Provider>
  );
};

export const useGroups = () => useContext(GroupsContext);
