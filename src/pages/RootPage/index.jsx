import { Link } from "react-router-dom";
import { RootPageContainer } from "./styles";

const Root = () => {
  return (
    <RootPageContainer>
      <Link to='/login'>Login</Link>
      <Link to='/signup'>Signup</Link>
    </RootPageContainer>
  )
}

export default Root