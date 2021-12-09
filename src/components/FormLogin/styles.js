import styled from "styled-components";
import { Link } from "react-router-dom";

export const FormLoginContainer = styled.div`

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
  display: flex;
}
.button{
  /* margin: auto; */
  /* display: flex;
  justify-content: center; */
}
  /* background-color: #FFFFFF;
  border: 2px solid var(--gray-0);
  border-radius: 5px; */

  /* box-shadow: inset 0 0 1em #F0F0F0; */

  /* width: 310px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; */

  /* span{
    font-size: 12px;
  } */

  /* form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; */

    /* border-radius: 8px; */

    /* padding: 1rem 0;
  } */

  /* input {
    padding: 1rem 0;
    margin: 0.4rem;

    border: none;

    border-radius: 8px;

    width: 200px;
    height: 20px;
  }

  @media (min-width: 768px) {
    width: 500px;
  } */

  /* button {
    background-color: none;
    border: none;

    border-radius: 8px;
    background-color: lightblue;

    padding: 1rem;
    margin: 0.4rem;

    width: 232px;
    height: 52px;

    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;

    :hover{
      filter: brightness(0.9);
    }

  
    
  } */





  /* .comment-top {
    color: var(--gray-50)
  }
  .comment-bottom {
    margin: 0 0 .6rem 0;
  } */
`;

export const LinkContainer = styled(Link)`
  font-size: 10px;
  text-decoration: none;
`;