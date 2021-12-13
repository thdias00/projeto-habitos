import { useParams } from "react-router-dom";
const Groups = () => {
  const { id } = useParams();
  console.log(id);
  return <div>{id}id aqui</div>;
};
export default Groups;
