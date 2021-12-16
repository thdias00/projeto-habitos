import CardGroup from "../CardGroup";
import { useColors } from "../../providers/colors";
import { useGroups } from "../../providers/groups";
import { DivGroups } from "./style";
const RenderGroups = () => {
  const { desktopVersion } = useColors();
  const { groups } = useGroups();
  return (
    <DivGroups
      style={{
        overflow: "auto",
        height: desktopVersion ? "70vh" : "70vh",
        width: desktopVersion ? "80%" : "none",
        // padding: '.2rem',
      }}
    >
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
