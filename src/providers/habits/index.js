import { createContext, useContext, useState, useEffect } from "react";
import api from "../../services/api";
import toast from 'react-hot-toast';
import { useAuth } from "../auth";
export const HabitsContext = createContext();

export const HabitsProvider = ({ children }) => {
  const { token } = useAuth();
  const [habits, setHabits] = useState([]);

  const getHabits = () => {
    const token = localStorage.getItem("@happyhabits:token") || '';
    token !== '' &&
    api.get('/habits/personal/', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(response => {
        setHabits(response.data);
      })
      .catch(err => {
        setHabits([]);
        console.log(err);
      })
  }
  
  useEffect(() => {
    getHabits();
  }, [token])

  const habitCreate = (obj) => {
    const {id} = JSON.parse(localStorage.getItem("@happyhabits:user")) || {};
    const token = localStorage.getItem("@happyhabits:token") || '';
    api.post('/habits/', {...obj, "user": id}, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(response => {
        getHabits();
        toast.success('Success habit created!');
      })
      .catch(err => {
        toast.error('Error during habit creation!')
        console.log(err);
      })
  }
  const habitUpdate = (obj, habitId) => {
    const token = localStorage.getItem("@happyhabits:token") || '';
    api.patch(`/habits/${habitId}/`, obj, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(response => {
        getHabits();
        toast.success('Success updated!')
        console.log(response);
      })
      .catch(err => {
        toast.error('Error during update!')
        console.log(err)
      })
  }
  const habitDelete = (habitId) => {
    const token = localStorage.getItem("@happyhabits:token") || '';
    api.delete(`/habits/${habitId}/`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(response => {
        getHabits();
        toast.success('Success deleted!')
        console.log(response);
      })
      .catch(err => {
        toast.error('Error during exclusion!')
        console.log(err)
      })
  }

  return (
    <HabitsContext.Provider value={{habitCreate, habitUpdate, habitDelete, habits}}>
      {children}
    </HabitsContext.Provider>
  )
}

export const useHabits = () => useContext(HabitsContext);