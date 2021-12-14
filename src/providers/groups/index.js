import { createContext, useContext, useEffect, useState } from "react";
import api from "../../services/api";
// import { useAuth } from "./";
export const GroupsContext = createContext();

export const GroupsProvider = ({ children }) => {
  const [groups, setGroups] = useState([]);
  const [page, setPage] = useState(1);

  const nextGroupPage = () => {
    setPage(page + 1);
  };
  const backGroupPage = () => {
    setPage(page - 1);
  };

  useEffect(() => {
    api
      .get(`/groups/?page=${page}`)
      .then((response) => {
        setGroups(response.data.results);
      })
      .catch((error) => console.log(error));
  }, [page]);
  // const id = 215
  //   useEffect(() => {
  //     api.post(`/groups/${id}/subscribe/`, {}, {headers: {
  //       Authorization: `Bearer ${token}`}}).then()},[])
  // useEffect(() => {
  //   api
  //     .get(`/groups/?page=${page}`)
  //     .then((response) => {
  //       setGroups(response.data.results);
  //     })
  //     .catch((error) => console.log(error));
  // }, [page]);
  return (
    <GroupsContext.Provider
      value={{
        groups,
        nextGroupPage,
        backGroupPage,
      }}
    >
      {children}
    </GroupsContext.Provider>
  );
};

export const useGroups = () => useContext(GroupsContext);
