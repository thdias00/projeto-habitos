import CardGroup from "../../components/CardGroup";
import { useAuth } from "../../providers/auth";

const HabitsAndGroups = () => {
  const { groups, nextGroupPage, backGroupPage } = useAuth();

  console.log(groups);
  return (
    <div>
      groups
      <button onClick={nextGroupPage}>next</button>
      <button onClick={backGroupPage}>back</button>
      {groups.map((item) => (
        <CardGroup name={item.name} description={item.description} />
      ))}
    </div>
  );
};
export default HabitsAndGroups;
