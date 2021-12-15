import styled from "styled-components";
import { useAuth } from "../../providers/auth";

export const DivGroups = styled.div`
  /* max-height: 70vh; */
  /* overflow: auto; */
`;

export const HabitsAndGroupsContainer = styled.div`
  const { mobileVersion, desktopVersion } = useAuth();
  .test {
    display: ${desktopVersion => desktopVersion && `none`};
    /* display: none; */
  }
`
