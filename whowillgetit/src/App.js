import styled from "styled-components";
import CreateUserBtn from "./components/createBtn";
import UsersContainer from "./components/user";
import GetItCounter from "./components/getitCounter";

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
  return (
    <>
      <BackGround className="container">
        <CreateUserBtn className="btn">버튼입니다</CreateUserBtn>
        <UsersContainer></UsersContainer>
        <GetItCounter></GetItCounter>
      </BackGround>
    </>
  );
}

export default App;
