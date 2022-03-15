import styled from "styled-components";
import { BackGround } from "./App";
import { useLocation } from "react-router-dom";
import RemainUsers from "./components/remainUsers";
import "./result.css";
const ResultBackGround = styled(BackGround)``;

function Result({ state }) {
  let location = useLocation();

  // 애니메이션
  for (let i = 0; i < 200; i++) {
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
