import styled from "styled-components";

export const HabitsAndGroupsContainer = styled.div`
  const { mobileVersion, desktopVersion } = useAuth();
  .test {
    display: ${(desktopVersion) => desktopVersion && `none`};
    /* display: none; */
  }
`;
