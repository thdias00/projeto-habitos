import styled from 'styled-components';
import LoginSide from "../../assets/decision_making2.png";

export const SignupContainer = styled.div`
  height: 100vh;
`;

export const Background = styled.div`
  background-color: var(--green);
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const MainContainer = styled.div`
  background-color: white;
  border-radius: 8px;
  width: 93%;
  height: 97%;
  display: flex;
  justify-content: center;
  @media (min-width: 768px) {
    width: 750px;
    height: 500px;
  }
`;
export const SideForm = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const SideImage = styled.div`
  display: none;
  @media (min-width: 768px) {
    width: 50%;
    display: block;
    background: url(${LoginSide}) no-repeat center;
    background-size: cover;
    border-radius: 8px 0 0 8px;
  }
`;