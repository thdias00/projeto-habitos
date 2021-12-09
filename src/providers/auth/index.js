import { createContext, useContext, useState } from "react";
import api from "../../services/api";
import jwt_decode from "jwt-decode";
import toast from 'react-hot-toast';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [data, setData] = useState(() => {
    const token = localStorage.getItem("@happyhabits:token");
    const user = localStorage.getItem("@happyhabits:user");

    if (token && user) {
      return { token, user: JSON.parse(user) };
    }

    return {};
  });

  const login = (userData, history) => {
    api.post('/sessions/', userData)
      .then(response => {
        toast.success('Success!');
        const userId = jwt_decode(response.data.access).user_id;
        const { access } = response.data;
        localStorage.setItem("@happyhabits:token", access);
        api.get(`/users/${userId}/`)
          .then(response => {
            const user = response.data;
            localStorage.setItem("@happyhabits:user", JSON.stringify(user));
            setData({ token: access, user });
          })
          .catch(err => {
            toast.error('Error retrieving user detaisl!')
            console.log(err);
          });
        history.push('/dashboard');
      })
      .catch(err => {
        toast.error('Error during login!')
        console.log(err);
      })
  }
  const updateUser = (userData) => {
    const user = JSON.parse(localStorage.getItem("@kenziehub:user")) || {};
    const token = localStorage.getItem("@kenziehub:token") || '';
    api.patch(`/users/${user.id}`, userData, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(response => {
        toast.success('Success!')
        console.log(response);
      })
      .catch(err => {
        toast.error('Error!')
        console.log(err)
      })
  }
  const logout = () => {
    localStorage.removeItem("@happyhabits:token");
    localStorage.removeItem("@happyhabits:user");

    setData({});
  }

  return (
    <AuthContext.Provider value={{login, updateUser, logout, user: data.user, token: data.token}}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext);