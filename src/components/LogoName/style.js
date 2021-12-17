import styled from "styled-components";

export const LogoNameContainer = styled.div`
  background-color: ${props => props.welcome && `#FFB851`};
  padding: ${props => props.welcome && `1rem`};
  margin: ${props => props.welcome && `.2rem 0 .8rem 0`};
  border-radius: 8px;
  display: inline;
  .logo-title {
    font-size: 26px;
    font-weight: ${props => props.welcome && `bold`};
    color: var(--black);
  }
  
  .logo-highlight {
    display: inline;
    font-size: 26px;
    border-radius: 5px;
    color: ${props => props.welcome ? `var(--white)` : `var(--green)`};
    background-color: ${props => props.welcome ? `none` : `var(--white)`};
  }
`;