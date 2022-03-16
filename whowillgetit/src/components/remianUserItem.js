import React from "react";
import styled from "styled-components";
import { Users, UserName, UserBox, UserImge } from "./userItem";
const RemainUserBox = styled(UserBox)`
  width: 100%;
  height: 100%;
  margin-top: 3.125rem;
`;
const ReMainUsers = styled(Users)`
  /* 크기 */
  width: 16.375rem;
  height: 16.375rem;
`;

const Congratulation = styled.div`
  /* 크기 */
  width: 5.5rem;
  height: 5.5rem;
  border: 0px;
  border-radius: 50%;

  /* 색상 */
  background: #c548ff;

  /* 위치 */
  position: relative;
  top: -18rem;
  left: 11.5rem;

  /* 폰트 */
  font-size: 2.625rem;
  line-height: 5.5rem;
  text-align: center;
`;

function RemainUserItem({ user }) {
  const { id, name, img } = user;
  return (
    <RemainUserBox key={id}>
      <ReMainUsers>
        <UserImge src={img} />
        <Congratulation>🎉</Congratulation>
      </ReMainUsers>
      <UserName>{name}</UserName>
    </RemainUserBox>
  );
}

export default RemainUserItem;
