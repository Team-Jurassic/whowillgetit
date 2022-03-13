import React from "react";
import styled from "styled-components";
import { CreateUserBtn } from "./createBtn";

const GetItCounterBtn = styled(CreateUserBtn)`
  /* 크기 */
  width: 11.375rem;
  height: 2.438rem;
`;
function getItCounter({ children }) {
  return <GetItCounterBtn></GetItCounterBtn>;
}

export default getItCounter;
