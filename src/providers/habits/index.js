import { createContext, useContext, useState, useEffect } from "react";
import api from "../../services/api";
import toast from 'react-hot-toast';
export const HabitsContext = createContext();

export const HabitsProvider = ({ children }) => {
  const [habits, setHabits] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("@happyhabits:token") || '';
    api.get('/habits/personal/', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(response => {
        console.log('response from HabitsProvider: ', response.data);
        setHabits(response.data);
        toast.success('Success!');
      })
      .catch(err => {
        toast.error('Error!');
        setHabits([]);
        console.log(err);
      })
  }, [])

  const getHabits = () => {
    const token = localStorage.getItem("@happyhabits:token") || '';
    api.get('/habits/personal/', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(response => {
        console.log('response from HabitsProvider: ', response.data);
        setHabits(response.data);
        toast.success('Success!');
      })
      .catch(err => {
        toast.error('Error!');
        setHabits([]);
        console.log(err);
      })
  }

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
        toast.success('Success!');
      })
      .catch(err => {
        toast.error('Error!')
        console.log(err);
      })
  }
  const habitUpdate = (obj, habitId) => {
    const token = localStorage.getItem("@happyhabits:token") || '';
    console.log('obj received at habitUpdate: ', obj);
    console.log('habitId received at habitUpdate: ', habitId);
    api.patch(`/habits/${habitId}/`, obj, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(response => {
        getHabits();
        toast.success('Success!')
        console.log(response);
      })
      .catch(err => {
        toast.error('Error!')
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
        toast.success('Success!')
        console.log(response);
      })
      .catch(err => {
        toast.error('Error!')
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