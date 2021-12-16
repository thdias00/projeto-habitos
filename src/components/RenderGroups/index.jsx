import CardGroup from "../CardGroup";
import { useColors } from "../../providers/colors";
import { useGroups } from "../../providers/groups";
import { DivGroups } from "./style";
import { color } from "@mui/system";
const RenderGroups = () => {
  const { desktopVersion } = useColors();
  const { groups } = useGroups();
  return (
    <DivGroups>
      {groups.map((item) => (
        <CardGroup
          key={item.id}
          group={item}
          idCreator={item}
          name={item.name}
          id={item.id}
          activities={item.activities}
          users_on_group={item.users_on_group}
          description={item.description}
          category={item.category}
          creatorId={item.creator.id}
        />
      ))}
    </DivGroups>
  );
};
export default RenderGroups;
