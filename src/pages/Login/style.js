import styled from 'styled-components';
// import LoginSide from "../../assets/login.png";

export const LoginPageContainer = styled.div`
  height: 100vh;
`;

export const Background = styled.div`
  background-color: #458E82;
  width: 100vw;
  /* max-width: 100%; */
  height: 100vh;
  overflow: hidden;
  /* max-height: 100%; */

  /* margin: 0;
  padding: 0;
  box-sizing: border-box; */

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
    width: 700px;
    height: 400px;
  }
`;
export const SideLeft = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const SideRight = styled.div`
  display: none;
  @media (min-width: 768px) {
    width: 50%;
    /* height: 100vh; */
    display: block;
    background: url("https://picsum.photos/400") no-repeat center;
    border-radius: 0 8px 8px 0;
  }
`;