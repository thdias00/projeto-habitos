import { Switch } from "react-router-dom";
import Route from "./route";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Dashboard from "../pages/Dashboard";
import HabitsAndGroups from "../pages/HabitsAndGroups";
import Groups from "../pages/Groups";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/habitsandgroups" component={HabitsAndGroups} isPrivate />
      <Route path="/groups/:id" component={Groups} isPrivate />
    </Switch>
  );
};
export default Routes;
