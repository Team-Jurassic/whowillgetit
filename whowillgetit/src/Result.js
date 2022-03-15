import styled from "styled-components";
import { BackGround } from "./App";
import { useLocation, useNavigate } from "react-router-dom";
import RemainUsers from "./components/remainUsers";
import BackArrow from "./assets/images/backarrow.svg";
import "./result.css";
const ResultBackGround = styled(BackGround)``;
const BackButton = styled.button`
  /* 크기 */
  background: url(${BackArrow}) no-repeat;
  width: 9.375rem;
  height: 1.688rem;
  border: none;
  margin-top: 10px;

  /* 위치 */
  position: absolute;
  top: 4.375rem;
  left: 2.5rem;
`;
function Result({ state }) {
  let location = useLocation();
  let navigate = useNavigate();

  // 애니메이션
  for (let i = 0; i < 30; i++) {
    // Random rotation
    let randomRotation = Math.floor(Math.random() * 360);
    // Random width & height between 0 and viewport
    let randomWidth = Math.floor(
      Math.random() *
        Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
    );
    let randomHeight = Math.floor(
      Math.random() *
        Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
    );

    // Random animation-delay
    let randomAnimationDelay = Math.floor(Math.random() * 10);

    // Random colors
    let colors = [
      "#0CD977",
      "#FF1C1C",
      "#FF93DE",
      "#5767ED",
      "#FFC61C",
      "#8497B0",
    ];
    let randomColor = colors[Math.floor(Math.random() * colors.length)];

    // Create confetti piece
    let confetti = document.createElement("div");
    confetti.className = "confetti";
    confetti.style.top = randomHeight + "px";
    confetti.style.left = randomWidth + "px";
    confetti.style.backgroundColor = randomColor;
    confetti.style.transform = "skew(15deg) rotate(" + randomRotation + "deg)";
    confetti.style.animationDelay = randomAnimationDelay + "s";
    document.getElementById("confetti-wrapper").appendChild(confetti);
  }
  const BackHistory = () => {
    navigate(-1);
  };
  return (
    <>
      <ResultBackGround>
        <BackButton onClick={() => BackHistory()}></BackButton>
        <RemainUsers remainUsers={location.state.resultUsers} />
      </ResultBackGround>
    </>
  );
}

export default Result;
