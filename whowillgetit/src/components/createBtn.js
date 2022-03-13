import React from "react";
import styled from "styled-components";

export const CreateUserBtn = styled.input`
  /* 화면 */

  /* 크기 */
  width: 16.063rem;
  height: 3.188rem;
  border-radius: 3.125rem;

  /* 폰트 */
  text-align: center;
  font-size: 1rem;
  vertical-align: middle;

  /* 색상 */
  background: #cbb2ff;
  border: solid #c448ff;
`;
function createBtn({ children }) {
  return <CreateUserBtn></CreateUserBtn>;
}

export default createBtn;
