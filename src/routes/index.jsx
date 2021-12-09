import { Switch} from 'react-router-dom';
import Route from "./route";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Dashboard from "../pages/Dashboard";
import HabitsAndGroups from "../pages/HabitsAndGroups";
import Groups from "../pages/Groups";
import RootPage from "../pages/RootPage";

const Routes = () => {
  return (
    <Switch>
      <Route exact path='/' component={RootPage}/>
      <Route path='/login' component={Login}/>
      <Route path='/signup' component={Signup}/>
      <Route path='/dashboard' component={Dashboard} isPrivate/>
      <Route path='/habitsandgroups' component={HabitsAndGroups} isPrivate/>
      <Route path='/groups' component={Groups} isPrivate/>
    </Switch>
  )
}
export default Routes;