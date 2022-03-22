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


  const returnResult = () => {
    const removeIdList = [];
    const removeNum = users.length - counterNumber;
    if (users.length < counterNumber) {
      // 1명 < 카운터 2명 너무 많아요!
      return alert("⚠️ Over Get It ⚠️ ");
    }
    if (counterNumber === 0) {
      // 카운터가 0이라면안됩니다
      return alert("⚠️ No Get It ⚠️");
    }

    while (removeNum > removeIdList.length) {
      // [1,2,3] =  3 < 3
      // 5명중에 2명을 남길거야,removeNum =3명을 빼야겠지
      let randNum = rand(0, users.length - 1); // 5명이야, 0,1,2,3,4 => 0~4 =>  users{ 1,5,19,12,11 } =id,
      if (!removeIdList.includes(users[randNum].id)) {
        removeIdList.push(users[randNum].id); // 1,
      }
    }

    const resultUsers = onRemoveAll(removeIdList);
    navigate("/result", { state: { resultUsers } });
  };


  return (
    <>
      <GetItCounter onClick={() => returnResult()}>
        {counter} GET IT
      </GetItCounter>
    </>
  );
}

export default GetItCounterUI;
