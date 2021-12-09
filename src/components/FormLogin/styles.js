import styled from "styled-components";
import { Link } from "react-router-dom";

export const FormLoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .links {
    font-size: 10px;
    margin: 1rem 0;
  }
  span, .highlight {
    color: #458E82;
    font-size: 12px;
    text-align: center;
    margin: auto;
  }
  .upper-title {
    margin: 2rem 0 0 0;
    display: flex;
  }
`;

export const LinkContainer = styled(Link)`
  font-size: 10px;
  text-decoration: none;
`;