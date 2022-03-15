import React from "react";
import styled from "styled-components";
import RemianUserItem from "./remianUserItem";

export const UsersContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

function RemainUsers({ remainUsers }) {
  return (
    <UsersContainer>
      {remainUsers.map((user, idx) => {
        return <RemianUserItem key={user.id} user={user} />;
      })}
    </UsersContainer>
  );
}

export default RemainUsers;
