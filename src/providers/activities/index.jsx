import { createContext, useContext, useState } from "react";
import api from "../../services/api";
import toast from 'react-hot-toast';
import { useAuth } from "../auth";

export const ActivitiesContext = createContext();

export const ActivitiesProvider = ({ children }) => {
    const [activities, setActivities] = useState([]);
    const { token } = useAuth();

    const getActivities = (groupId) => {
        token !== '' &&
            api.get(`/activities/?group=${groupId}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
                .then(response => {
                    setActivities(response.data.results);
                })
                .catch(err => {
                    setActivities([]);
                    toast.error('Error during goal retrieving!');
                })
    }

    const activitieDelete = (activitieId) => {
        const token = localStorage.getItem("@happyhabits:token") || '';
        api.delete(`/activities/${activitieId}/`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(response => {
                toast.success('Success deleted!')
                setActivities(activities.filter(el => el.id !== activitieId));
            })
            .catch(err => {
                toast.error('Error during exclusion!')
            })
    }
    const activitieCreate = (data, groupId) => {
        const token = localStorage.getItem("@happyhabits:token") || '';
        api.post('/activities/', data, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(response => {
                toast.success('Success activitie created!');
                getActivities(groupId);

            })
            .catch(err => {
                toast.error('Error during activitie creation!');
            })
    }

    return (
        <ActivitiesContext.Provider
            value={{
                activities,
                setActivities,
                activitieDelete,
                activitieCreate,
            }}
        >
            {children}
        </ActivitiesContext.Provider>
    );
};

export const useActivities = () => useContext(ActivitiesContext);