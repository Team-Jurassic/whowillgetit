import React from "react";
import styled from "styled-components";
import RemianUserItem from "./remianUserItem";

export const UsersContainer = styled.div`
  width: 100%;
  height: auto;
  overflow: auto;
  overflow-y: hidden;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
`;
const HeaderText = styled.h1`
  text-align: center;
  font-size: 2.313rem;
  vertical-align: middle;
  color: white;
  margin-bottom: 1.875rem;
`;

function RemainUsers({ remainUsers }) {
  const getItUsers = remainUsers.map((user) => user.name).join(", ");
  return (
    <>
      <HeaderText>
        🎉🎉 <span style={{ fontSize: "3rem" }}> {getItUsers} </span> GET IT
        🎉🎉
      </HeaderText>
      <UsersContainer>
        {remainUsers.map((user, idx) => {
          return <RemianUserItem key={user.id} user={user} />;
        })}
      </UsersContainer>
    </>
  );
}

export default RemainUsers;
