import styled from "styled-components";
import { BackGround } from "./App";
import { useLocation } from "react-router-dom";
const ResultBackGround = styled(BackGround)``;
function Result({ state }) {
  let location = useLocation();
  console.log(location.state);
  return (
    <>
      <ResultBackGround>
        {/* <Back />
        <HeaderContent />
        <ResultUser /> */}
      </ResultBackGround>
    </>
  );
}

export default Result;
