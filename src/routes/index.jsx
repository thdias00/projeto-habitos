import { Switch, Route } from 'react-router-dom';
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Dashboard from "../pages/Dashboard";
import HabitsAndGroups from "../pages/HabitsAndGroups";
import Groups from "../pages/Groups";

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/">
                <Login />
            </Route>
            <Route path="/signup">
                <Signup />
            </Route>
            <Route path="/dashboard">
                <Dashboard />
            </Route>
            <Route path="/habitsandgroups">
                <HabitsAndGroups />
            </Route>
            <Route path="/groups">
                <Groups />
            </Route>
        </Switch>
    )
}
export default Routes;