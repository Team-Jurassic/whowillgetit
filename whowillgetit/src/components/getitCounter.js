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

function GetItCounterUI({
  users,
  onRemoveAll,
  rand,
  upCounter,
  downCounter,
  counter,
}) {
  let navigate = useNavigate();
  let counterNumber = counter;
  let removeNum = 0;

  const returnResult = () => {
    const removeIdList = [];
    const removeNum = users.length - counterNumber;
    if (users.length < counterNumber) {
      // 1명 < 카운터 2명 너무 많아요!
      return alert("To Many!!");
    }
    if (counterNumber === 0) {
      // 카운터가 0이라면안됩니다
      return alert("0!!");
    }

    while (removeNum > removeIdList.length) {
      let randNum = rand(0, users.length - 1);
      if (!removeIdList.includes(randNum)) {
        removeIdList.push(randNum);
      }
    }

    const resultUsers = onRemoveAll(removeIdList);
    navigate("/result", { state: { resultUsers } });
  };

  return (
    <>
      <CounterBtnUp onClick={() => upCounter()} />
      <GetItCounter onClick={() => returnResult()}>
        {counter} GET IT
      </GetItCounter>
      <CounterBtndown onClick={() => downCounter()} />
    </>
  );
}

export default GetItCounterUI;
