import { Link } from "react-router-dom";
import { RootPageContainer } from "./styles";

const Root = () => {
  return (
    <RootPageContainer>
      <Link to='/login'>Login</Link>
      <Link to='/register'>Register</Link>
    </RootPageContainer>
  )
}

export default Root