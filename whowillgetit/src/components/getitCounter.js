import React from "react";
import styled from "styled-components";
import upCounter from "../assets/images/counter/upCounter.svg";
import upCounterActive from "../assets/images/counter/upCounterActive.svg";
import downCounter from "../assets/images/counter/downCounter.svg";
import downCounterActive from "../assets/images/counter/downCounterActive.svg";
import { useNavigate } from "react-router-dom";
const GetItCounter = styled.button`
  /* 크기 */
  width: 11.375rem;
  height: 2.438rem;
  border-radius: 3.125rem;

  /* 폰트 */
  text-align: center;
  font-size: 1rem;
  vertical-align: middle;

  /* 색상 */
  background: #cbb2ff;
  border: solid #c548ff;

  /* 활성화 */
  &:active {
    background: #8600c6;
  }
`;

const CounterBtnUp = styled.button`
  /* 크기 */
  background: url(${upCounter}) no-repeat;
  width: 4.125rem;
  height: 1.688rem;
  border: none;
  margin-top: 10px;

  &:active {
    background: url(${upCounterActive}) no-repeat;
  }
`;

const CounterBtndown = styled(CounterBtnUp)`
  background: url(${downCounter}) no-repeat;
  &:active {
    background: url(${downCounterActive}) no-repeat;
  }
`;

function GetItCounterUI({ users, onRemoveAll, rand }) {
  let navigate = useNavigate();
  let counterNumber = 2;
  const tempNumber = users.length - counterNumber;
  if (tempNumber > users.length - 1) {
    alert("To Many!!");
  }
  // console.log(rand(0, users.length));

  const returnResult = () => {
    const removeIdList = [];

    while (tempNumber > removeIdList.length) {
      let randNum = rand(0, users.length - 1);
      if (!removeIdList.includes(randNum)) {
        removeIdList.push(randNum);
        console.log(randNum, users[randNum].id);
      }
    }

    const resultUsers = onRemoveAll(removeIdList);
    navigate("/result", { state: { resultUsers } });
  };

  return (
    <>
      <CounterBtnUp />
      <GetItCounter onClick={() => returnResult()}>
        {counterNumber} GET IT
      </GetItCounter>
      <CounterBtndown />
    </>
  );
}

export default GetItCounterUI;
