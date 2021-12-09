
import ComponentButton from "../../components/Button";
import { useAuth } from "../../providers/auth";

const Dashboard = () => {
  const { logout } = useAuth();
    return (
        <div>
        Dashboard
        <ComponentButton onClick={logout}>logout</ComponentButton>
        </div>
    )
}
export default Dashboard;