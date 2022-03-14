import React from "react";
import styled from "styled-components";
import { CreateUserInput } from "./createBtn";

const GetItCounter = styled(CreateUserInput)`
  /* 크기 */
  width: 11.375rem;
  height: 2.438rem;
`;
function getItCounter({ children }) {
  return <GetItCounter></GetItCounter>;
}

export default getItCounter;
