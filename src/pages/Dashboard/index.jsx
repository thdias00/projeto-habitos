
import ComponentButton from "../../components/Button";
import ModalBase from "../../components/ModalBase";
import ResponsiveAppBar from "../../components/Header";

const Dashboard = () => {
  return (
    <div>
      <ResponsiveAppBar />
      Dashboard
      <ModalBase
        labelToCallModal='+'
        titleModal='Adicionar Hábito'>
        <p>conteúdo do componente</p>
      </ModalBase>
    </div>
  )
}
export default Dashboard;