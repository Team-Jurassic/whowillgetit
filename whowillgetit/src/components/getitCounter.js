import React from "react";
import styled from "styled-components";
import upCounter from "../assets/images/counter/upCounter.svg";
import upCounterActive from "../assets/images/counter/upCounterActive.svg";
import downCounter from "../assets/images/counter/downCounter.svg";
import downCounterActive from "../assets/images/counter/downCounterActive.svg";

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

function getItCounter({ value, CountUp, CountDown }) {
  const tempNumber = value;
  return (
    <>
      <CounterBtnUp onClick={()=>CountUp()} />
      <GetItCounter>{tempNumber} GET IT</GetItCounter>
      <CounterBtndown onClick={()=>CountDown()}/>
    </>
  );
}

export default getItCounter;
