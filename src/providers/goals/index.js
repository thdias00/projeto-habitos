import { createContext, useContext, useState } from "react";
import api from "../../services/api";
import toast from 'react-hot-toast';
import { useAuth } from "../auth";

export const GoalsContext = createContext();

export const GoalsProvider = ({ children }) => {
  const { token } = useAuth();
  const [goals, setGoals] = useState([]);

  const getGoals = (groupId) => {
    token !== '' &&
    api.get(`/goals/?group=${groupId}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(response => {
        setGoals(response.data.results);
      })
      .catch(err => {
        setGoals([]);
        toast.error('Error during goal retrieving!');
        console.log(err);
      })
  }

  const goalDelete = (goalId) => {
    const token = localStorage.getItem("@happyhabits:token") || '';
    api.delete(`/goals/${goalId}/`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(response => {
        toast.success('Success deleted!')
        console.log(response);
        setGoals(goals.filter(el => el.id !== goalId));
      })
      .catch(err => {
        toast.error('Error during exclusion!')
        console.log(err)
      })
  }

  const goalCreate = (obj, groupId) => {
    console.log("[goalCreate function] groupId: ", groupId);
    console.log("[goalCreate function] obj: ", obj);
    const token = localStorage.getItem("@happyhabits:token") || '';
    api.post('/goals/', {...obj, "group": groupId}, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(response => {
        toast.success('Success goal created!');
        getGoals(groupId);
      })
      .catch(err => {
        toast.error('Error during goal creation!');
        console.log(err);
      })
  }

  const goalUpdate = (obj, goalId) => {
    const token = localStorage.getItem("@happyhabits:token") || '';
    api.patch(`/goals/${goalId}/`, obj, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(response => {
        toast.success('Success updated!')
        console.log(response);
        setGoals([...goals.filter(el => el.id !== goalId), response.data]);
        console.log('goalId: ', goalId);
        console.log('obj: ', obj);
        console.log('response.data updated: ', response.data);
        console.log('goals updated: ', goals);
      })
      .catch(err => {
        toast.error('Error during update!')
        console.log(err)
      })
  }

  return (
    <GoalsContext.Provider
      value={{
        goals,
        setGoals, 
        goalCreate,
        goalUpdate, 
        goalDelete, 
        getGoals
      }}
    >
      {children}
    </GoalsContext.Provider>
  );
};

export const useGoals = () => useContext(GoalsContext);