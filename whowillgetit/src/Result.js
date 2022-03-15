import styled from "styled-components";
import { BackGround } from "./App";
import { useLocation } from "react-router-dom";
import RemainUsers from "./components/remainUsers";
const ResultBackGround = styled(BackGround)``;

function Result({ state }) {
  let location = useLocation();

  return (
    <>
      <ResultBackGround>
        <RemainUsers remainUsers={location.state.resultUsers} />
        {/* <Back />
        <HeaderContent />
        <ResultUser /> */}
      </ResultBackGround>
    </>
  );
}

export default Result;
