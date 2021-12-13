import { createContext, useContext, useState } from "react";
import api from "../../services/api";
import toast from 'react-hot-toast';
import { useAuth } from "../auth";

export const GoalsContext = createContext();

export const GoalsProvider = ({ children }) => {
  const { token } = useAuth();
  const [goals, setGoals] = useState([]);

  // useEffect(() => {
  //   api
  //     .get(`/groups/?page=${page}`)
  //     .then((response) => {
  //       setGroups(response.data.results);
  //     })
  //     .catch((error) => console.log(error));
  // }, [page]);

  const getGoals = (groupId) => {
    // const token = localStorage.getItem("@happyhabits:token") || '';
    token !== '' &&
    api.get(`/goals/group=${groupId}/`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(response => {
        setGoals(response.data);
      })
      .catch(err => {
        setGoals([]);
        toast.error('Error during goal retrieving!');
        console.log(err);
      })
  }

  // useEffect(() => {
  //   getGoals();
  // }, [token])

  const goalDelete = (goalId) => {
    const token = localStorage.getItem("@happyhabits:token") || '';
    api.delete(`/goals/${goalId}/`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(response => {
        // getHabits();
        toast.success('Success deleted!')
        console.log(response);
      })
      .catch(err => {
        toast.error('Error during exclusion!')
        console.log(err)
      })
  }

  const goalCreate = (obj, groupId) => {
    // const {id} = JSON.parse(localStorage.getItem("@happyhabits:user")) || {};
    const token = localStorage.getItem("@happyhabits:token") || '';
    api.post('/goals/', {...obj, "group": groupId}, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(response => {
        // getHabits();
        toast.success('Success goal created!');
      })
      .catch(err => {
        toast.error('Error during goal creation!');
        console.log(err);
      })
  }

  const goalUpdate = (obj, goalId) => {
    const token = localStorage.getItem("@happyhabits:token") || '';
    // console.log('obj received at habitUpdate: ', obj);
    // console.log('habitId received at habitUpdate: ', habitId);
    api.patch(`/goals/${goalId}/`, obj, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(response => {
        // getHabits();
        toast.success('Success updated!')
        console.log(response);
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