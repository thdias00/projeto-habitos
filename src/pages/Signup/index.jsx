import FormRegister from "../../components/FormRegister";
import { SignupContainer, Background, MainContainer, SideForm, SideImage } from "./style";

const Signup = () => {
  return (
    <SignupContainer>
      <Background>
        <MainContainer>
          <SideImage/>
          <SideForm>
            <FormRegister/>
          </SideForm>
        </MainContainer>
      </Background>
    </SignupContainer>
  )
}

export default Signup