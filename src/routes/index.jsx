import { Switch, Route } from 'react-router-dom';

const Route = () => {
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