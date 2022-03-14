import React from "react";
import styled from "styled-components";
import { useCallback, useState } from "react";

export const CreateUserInput = styled.input`
  /* 화면 */

  /* 크기 */
  width: 16.063rem;
  height: 3.188rem;
  border-radius: 3.125rem;

  /* 폰트 */
  text-align: center;
  font-size: 1rem;
  vertical-align: middle;

  /* 색상 */
  background: #cbb2ff;
  border: solid #c548ff;
`;

const CreateBtn = styled.button`
  /* 크기 */
  width: 1.813rem;
  height: 1.813rem;
  border-radius: 100%;

  /* 색상 */
  background: #c548ff;
  border: solid 0px #c548ff;

  /* 위치 */
  position: relative;
  top: -42.5px;
  left: 130px;

  /* 활성화 */
  &:active {
    background: #8600c6;
  }
`;

const CreateDivX = styled.div`
  /* 크기 */
  width: 0.946rem;
  height: 0.079rem;
  border: 0px;
  border-radius: 20px;

  /* 위치 */
  margin: 0 auto;

  /* 색상 */
  background: #ffffff;
`;

const CreateDivY = styled(CreateDivX)`
  transform: rotate(90deg);
`;

function CreateUser({ createUser }) {
  const [name, setName] = useState("");

  const onChange = useCallback((e) => {
    setName(e.target.value);
  }, []);

  const onClick = useCallback(
    (e) => {
      if (name === "") return alert("이름을 입력해주세요");
      createUser(name);
      setName(""); // value 값 초기화

      // submit 이벤트는 브라우저에서 새로고침을 발생시킵니다.
      // 이를 방지하기 위해 이 함수를 호출합니다.
      e.preventDefault();
    },
    [createUser, name]
  );

  const onKeyPress = useCallback(
    (e) => {
      if (e.key === "Enter") {
        onClick(e);
      }
    },
    [onClick]
  );
  return (
    <>
      <CreateUserInput
        placeholder="Enter the User"
        onChange={onChange}
        value={name}
        onKeyPress={onKeyPress} // 한국어는 Press나 up으로..
      ></CreateUserInput>
      <CreateBtn onClick={onClick}>
        <CreateDivX />
        <CreateDivY />
      </CreateBtn>
    </>
  );
}

export default CreateUser;
