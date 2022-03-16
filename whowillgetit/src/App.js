import styled from "styled-components";
import CreateUser from "./components/createBtn";
import UsersContainer from "./components/user";
import GetItCounterUI from "./components/getitCounter";
import MarqueeUi from "./components/marqueeUi";
import { useCallback, useRef, useState } from "react";
import userImage1 from "./assets/images/users/user1.svg";
import userImage2 from "./assets/images/users/user2.svg";
import userImage3 from "./assets/images/users/user3.svg";

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
    // console.log(rand(0, images.length - 1));
    const randomNumber = rand(0, images.length - 1);
    return images[randomNumber];
  }, [images]);

  const createUser = useCallback(
    (name) => {
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
    console.log("호출됨");
    setUsers(users.filter((user) => user.id !== id));
  };
  const onRemoveAll = (list) => {
    console.log("호출됨", list);
    console.log(users.filter((user) => !list.includes(user.id)));
    return users.filter((user) => !list.includes(user.id));
  };


const [value, setValue] = useState(1);

  const counterUp = () => {
    return(
      setValue(value + 1)
    )
  }

  const counterDown = () => {
    return(
      value > 0 
      ? setValue(value - 1) : null
    )
  }







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
            value={value}
            counterUp={counterUp}
            counterDown={counterDown}
          ></GetItCounterUI>
        </Content>
      </BackGround>
    </>
  );
}

export default App;
