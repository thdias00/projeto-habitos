import { useParams } from "react-router-dom";
import GoalsComponent from "../../components/GoalsComponent";
import { useGroups } from '../../providers/groups';

const Groups = () => {
  const { id } = useParams();
  const { groups } = useGroups();
  const group = groups.find(el => el.id === id);
  return (
    <div>
      Groups
      <GoalsComponent arr={group}/>
    </div>
  )
}
export default Groups;