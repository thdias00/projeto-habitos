import styled from "styled-components";
// import { useAuth } from "../../providers/auth";

export const DivGroups = styled.div`
`;

export const HabitsAndGroupsContainer = styled.div`
  /* position: fixed; */
  .desktop {
    @media (max-width: 767px) {
      display: none;
    }
  }
  .mobile {
    @media (min-width: 768px) {
      display: none;
    }
  }
  .external-component {
    background-color: #1B5E20;
    /* height: 1500px; */
    /* min-width: 300px; */
  }
`

export const ContentContainer = styled.div`
  width: 100vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media (min-width: 768px) {
    min-height: calc(100vh - 69.5px);
    }
  @media (max-width: 768px) {
    justify-content: center;
    min-height: calc(100vh - 68.5px - 49px);
  }
  `
export const SideContainer = styled.div`
  padding: 1rem 2rem;
  background-color: #1B5E20;
  /* max-width: 800px; */
  width: 40%;
  /* min-width: 700px; */
  `

export const UniqueContainer = styled.div`
  padding: 1rem;
  /* background-color: yellow; */
  min-width: 100%;
`