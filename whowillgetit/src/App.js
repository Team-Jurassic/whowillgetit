import styled from "styled-components";
import CreateUser from "./components/createBtn";
import UsersContainer from "./components/user";
import GetItCounter from "./components/getitCounter";
import { useCallback, useRef, useState } from "react";
import userImage1 from "./assets/images/users/user1.svg";
import userImage2 from "./assets/images/users/user2.svg";
import userImage3 from "./assets/images/users/user3.svg";

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
console.log("app is running!!");
function App() {
  const [users, setUsers] = useState([
    {
      id: 0,
      name: "default",
      img: `${userImage1}`,
    },
  ]);

  const images = [userImage1, userImage2, userImage3];

  const nextId = useRef(1);

  const rand = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const makeIamge = useCallback(() => {
    const randomNumber = rand(0, 2);
    return images[randomNumber];
  }, []);

  const createUser = useCallback(
    (name) => {
      const url = "./assets/images/users/user1.svg";
      const user = {
        id: nextId.current,
        name,
        img: makeIamge(),
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
        <UsersContainer users={users}></UsersContainer>
        <GetItCounter></GetItCounter>
      </BackGround>
    </>
  );
}

export default App;
