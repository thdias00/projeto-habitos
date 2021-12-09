import styled from "styled-components";
import { Link } from "react-router-dom";

export const FormRegisterContainer = styled.div`
  background-color: #FFFFFF;
  border: 2px solid var(--gray-0);
  border-radius: 5px;
  width: 310px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .links {
    font-size: 10px;
    margin: 1rem 0;
  }

  .subtitle {
    font-size: 12px;
    font-weight: bold;
    color: var(--green);
  }
  span, .highlight {
    color: var(--green);
    font-size: 12px;
    text-align: center;
    margin: auto;
  }
  .upper-title {
    display: flex;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem 0;
  }

  input {
    padding: .4rem 0;
    margin: 0.4rem;

    border: none;

    border-radius: 8px;

    width: 200px;
    height: 20px;
  }

  @media (min-width: 768px) {
    width: 500px;
  }
  
`;

export const LinkContainer = styled(Link)`
  font-size: 10px;
  text-decoration: none;
`;