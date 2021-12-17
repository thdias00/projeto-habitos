import FormLogin from "../../components/FormLogin";
import { LoginPageContainer, Background, MainContainer, SideForm, SideImage } from "./style";

const LoginPage = () => {
  return (
    <LoginPageContainer>
      <Background>
        <MainContainer>
          <SideForm>
            <FormLogin/>
          </SideForm>
          <SideImage/>
        </MainContainer>
      </Background>
      
    </LoginPageContainer>
  )
}

export default LoginPage