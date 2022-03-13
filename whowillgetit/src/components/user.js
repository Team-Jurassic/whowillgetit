import React from "react";
import styled from "styled-components";

const Users = styled.div`
  /* 화면 */

  /* 크기 */
  width: 7.5rem;
  height: 7.5rem;

  /* 테투리 */
  border: 0.188rem solid transparent;
  border-radius: 50%;
  background-image: linear-gradient(#fff, #fff),
    linear-gradient(to right, #ff00ec, #b20fff);
  background-origin: border-box;
  background-clip: content-box, border-box;

  /* 폰트 */
  text-align: center;
  font-size: 1rem;
  vertical-align: middle;
  /* 기타 */
  & + & {
    margin-left: 1rem;
  }
`;

const RemoveBtn = styled.button`
  /* 크기 */
  width: 2.688rem;
  height: 2.688rem;
  border: 0px;
  border-radius: 50%;

  /* 색상 */
  background: #c548ff;

  /* 위치 */
  position: relative;
  top: -0.75rem;
  left: 2.5rem;

  &:active {
    background: #8600c6;
  }
`;

const MiusDiv = styled.div`
  /* 크기 */
  width: 1.563rem;
  height: 0.188rem;
  border: 0px;
  border-radius: 20px;

  /* 위치 */
  margin: 0 auto;

  /* 색상 */
  background: #ffffff;
`;

const UserName = styled.h1`
  /* 크기 */
  font-size: 1.625rem;
  color: #ffffff;
  margin: 0 auto;
`;

const UsersContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const UserBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
`;

function usersContainer({ children }) {
  return (
    <UsersContainer>
      <UserBox>
        <Users>
          <RemoveBtn>
            <MiusDiv></MiusDiv>
          </RemoveBtn>
        </Users>
        <UserName>sangwoo</UserName>
      </UserBox>
      <UserBox>
        <Users>
          <RemoveBtn>
            <MiusDiv></MiusDiv>
          </RemoveBtn>
        </Users>
        <UserName>sangwoo</UserName>
      </UserBox>
      <UserBox>
        <Users>
          <RemoveBtn>
            <MiusDiv></MiusDiv>
          </RemoveBtn>
        </Users>
        <UserName>sangwoo</UserName>
      </UserBox>
    </UsersContainer>
  );
}

export default usersContainer;
