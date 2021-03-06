import styled from "styled-components";
import CreateUser from "./components/createBtn";
import UsersContainer from "./components/user";
import GetItCounterUI from "./components/getitCounter";
import MarqueeUi from "./components/marqueeUi";
import { useCallback, useRef, useState } from "react";
import userImage1 from "./assets/images/users/user1.svg";
import userImage2 from "./assets/images/users/user2.svg";
import userImage3 from "./assets/images/users/user3.svg";
import userImage4 from "./assets/images/users/user4.svg";
import userImage5 from "./assets/images/users/user5.svg";
import userImage6 from "./assets/images/users/user6.svg";
import userImage7 from "./assets/images/users/user7.svg";

console.log("app is running!!");

export const BackGround = styled.div`
  /* 화면 */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  /* 크기 */
  width: 100vw;
  height: 100vh;
  background: #6768a6;

  animation: color-change-2x 2s linear infinite alternate both;
  @keyframes color-change-2x {
    0% {
      background: #6768a6;
    }
    100% {
      background: #b22cff;
    }
  }
`;

const Content = styled.div`
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function App() {
  document.getElementById("confetti-wrapper").innerHTML = "";
  const [users, setUsers] = useState([]);
  const [counter, setCounter] = useState(0);
  const images = [
    userImage1,
    userImage2,
    userImage3,
    userImage4,
    userImage5,
    userImage6,
    userImage7,
  ];

  const nextId = useRef(1);

  const rand = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const makeIamge = useCallback(() => {
    // console.log(rand(0, images.length - 1));
    const randomNumber = rand(0, images.length - 1);
    return images[randomNumber];
  }, [images]);

  const createUser = useCallback(
    (name) => {
      if (users.length >= 10) return alert("⚠️ Too Many User! ⚠️");
      const user = {
        id: nextId.current,
        name,
        img: makeIamge(),
      };
      setUsers([...users, user]);
      nextId.current++;
    },
    [users, makeIamge]
  );

  const onRemove = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };
  const onRemoveAll = (list) => {
    return users.filter((user) => !list.includes(user.id));
  };

  return (
    <>
      <BackGround className="container">
        <MarqueeUi />
        <Content>
          <CreateUser className="btn" createUser={createUser}></CreateUser>
          <UsersContainer users={users} onRemove={onRemove}></UsersContainer>
          <GetItCounterUI
            users={users}
            onRemoveAll={onRemoveAll}
            rand={rand}
          ></GetItCounterUI>
        </Content>
      </BackGround>
    </>
  );
}

export default App;
