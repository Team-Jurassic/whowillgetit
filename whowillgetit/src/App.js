import styled from "styled-components";
import CreateUser from "./components/createBtn";
import UsersContainer from "./components/user";
import GetItCounter from "./components/getitCounter";
import { useCallback, useRef, useState } from "react";

const BackGround = styled.div`
  /* 화면 */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  /* 크기 */
  width: 100vw;
  height: 100vh;
  background: #6768a6;
`;

function App() {
  const [users, setUsers] = useState([
    {
      id: 0,
      name: "default",
    },
  ]);

  console.log(users);
  const nextId = useRef(1);
  const createUser = useCallback(
    (name) => {
      const user = {
        id: nextId.current,
        name,
      };
      setUsers([...users, user]);
      nextId.current++;
    },
    [users]
  );

  return (
    <>
      <BackGround className="container">
        <CreateUser className="btn" createUser={createUser}></CreateUser>
        <UsersContainer></UsersContainer>
        <GetItCounter></GetItCounter>
      </BackGround>
    </>
  );
}

export default App;
