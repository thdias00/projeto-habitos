import { Link } from "react-router-dom";
import styled from "styled-components";

export const LinkContainer = styled(Link)`
  text-decoration: none;

  &:visited {
    color: none;
  }
`;