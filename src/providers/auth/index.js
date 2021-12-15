import { createContext, useContext, useEffect, useState } from "react";
import api from "../../services/api";
import jwt_decode from "jwt-decode";
import toast from "react-hot-toast";
import useMediaQuery from '@mui/material/useMediaQuery';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userId, setUserId] = useState("");
  const [data, setData] = useState(() => {
    const token = localStorage.getItem("@happyhabits:token") || "";
    const user = localStorage.getItem("@happyhabits:user") || {};

    if (token && user) {
      return { token, user: JSON.parse(user) };
    }

    return {};
  });

  const signup = (userData, history, reset) => {
    api
      .post("/users/", userData)
      .then((response) => {
        toast.success("Success signing up");
        reset();
        history.push("/login");
      })
      .catch((err) => {
        toast.error("Error signing up");
      });
  };

  const login = (userData, history) => {
    api
      .post("/sessions/", userData)
      .then((response) => {
        setUserId(jwt_decode(response.data.access).user_id);
        const { access } = response.data;
        localStorage.setItem("@happyhabits:token", access);
        api
          .get(`/users/${userId}/`)
          .then((response) => {
            const user = response.data;
            localStorage.setItem("@happyhabits:user", JSON.stringify(user));
            setData({ token: access, user });
          })
          .catch((err) => {
            toast.error("Error retrieving user details!");
            console.log(err);
          });
        history.push("/dashboard");
      })
      .catch((err) => {
        toast.error("Error during login!");
        console.log(err);
      });
  };
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("@happyhabits:user")) || {}
  );

  const updateUser = (userData) => {
    const token = localStorage.getItem("@happyhabits:token") || "";
    api
      .patch(`/users/${user.id}/`, userData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        toast.success("Usuário atualizado");
        localStorage.setItem(
          "@happyhabits:user",
          JSON.stringify(response.data)
        );
        setUser(JSON.parse(localStorage.getItem("@happyhabits:user")) || {});
      })
      .catch((err) => {
        toast.error("Nome de usuário já existente");
      })
      .catch((err) => {
        toast.error("Nome de usuário já existente");
      });
  };
  const logout = () => {
    localStorage.removeItem("@happyhabits:token");
    localStorage.removeItem("@happyhabits:user");

    setData({});
  };

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

  const mobileVersion = useMediaQuery('(max-width:699px)')
  const desktopVersion = useMediaQuery('(min-width:700px)')

  //Criando
  return (
    <AuthContext.Provider
      value={{
        signup,
        login,
        updateUser,
        logout,
        user,
        token: data.token,
        groups,
        nextGroupPage,
        backGroupPage,
        userId,
        mobileVersion,
        desktopVersion,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
