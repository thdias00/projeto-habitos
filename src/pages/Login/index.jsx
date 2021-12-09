import FormLogin from "../../components/FormLogin";
import { LoginPageContainer, Background, MainContainer, SideLeft, SideRight } from "./style";

const LoginPage = () => {
  return (
    <LoginPageContainer>
      <Background>
        <MainContainer>
          <SideLeft>
            <FormLogin/>
          </SideLeft>
          <SideRight/>
        </MainContainer>
      </Background>
      
    </LoginPageContainer>
  )
}

export default LoginPage