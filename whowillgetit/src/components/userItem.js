import React from "react";
import styled from "styled-components";
// import tempImage from "../assets/images/users/user1.svg";
export const Users = styled.div`
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

export const UserImge = styled.img`
  width: 100%;
  hight: 100%;
`;

export const RemoveBtn = styled.button`
  /* 크기 */
  width: 2.688rem;
  height: 2.688rem;
  border: 0px;
  border-radius: 50%;

  /* 색상 */
  background: #c548ff;

  /* 위치 */
  position: relative;
  top: -8.8rem;
  left: 3rem;

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

export const UserName = styled.h1`
  /* 크기 */
  font-size: 1.625rem;
  color: #ffffff;
  margin: 0 auto;
`;

export const UserBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
`;

function userItem({ user, onRemove }) {
  const { id, name, img } = user;
  return (
    <UserBox key={id}>
      <Users>
        <UserImge src={img} />
        <RemoveBtn onClick={() => onRemove(id)}>
          <MiusDiv></MiusDiv>
        </RemoveBtn>
      </Users>
      <UserName>{name}</UserName>
    </UserBox>
  );
}

export default userItem;
