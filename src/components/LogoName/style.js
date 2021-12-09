import styled from "styled-components";

export const LogoNameContainer = styled.div`
display: inline;
  margin: .4rem 0 1rem 0;
  .logo-title {
    font-size: 26px;
    color: var(--black);
  }
  
  .logo-highlight {
    display: inline;
    font-size: 26px;
    color: ${props => props.welcome ? `var(--white)` : `var(--green)`};
    background-color: ${props => props.welcome ? `var(--green)` : `var(--white)`};
  }
`;