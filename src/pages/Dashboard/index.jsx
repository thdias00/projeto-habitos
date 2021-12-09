
import ComponentButton from "../../components/Button";
import ModalBase from "../../components/ModalBase";
import { useAuth } from "../../providers/auth";

const Dashboard = () => {
  const { logout } = useAuth();
    return (
        <div>
        Dashboard
        <ModalBase
          labelToCallModal='+'
          titleModal='Adicionar Hábito'>
          <p>conteúdo do componente</p>
        </ModalBase>
        <ComponentButton onClick={logout}>logout</ComponentButton>
        </div>
    )
}
export default Dashboard;