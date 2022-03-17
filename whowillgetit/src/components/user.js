import React from "react";
import styled from "styled-components";
import UserItem from "./userItem";

export const UsersContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

function usersContainer({ users, onRemove }) {
  return (
    <UsersContainer>
      {users.map((user, idx) => {
        return <UserItem key={user.id} user={user} onRemove={onRemove} />;
      })}
      {/* <UserBox>
        <Users>
          <RemoveBtn>
            <MiusDiv></MiusDiv>
          </RemoveBtn>
        </Users>
        <UserName></UserName>
      </UserBox> */}
    </UsersContainer>
  );
}

export default usersContainer;
