import styled from "styled-components";
import backGroundText from "../assets/images/backgroundtext.svg";

const Marquee = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const BackGroundMarqueeLeft = styled.marquee`
  z-index: 1;
`;
const BackGroundText = styled.img``;

function MarqueeUi() {
  return (
    <>
      <Marquee>
        <BackGroundMarqueeLeft>
          <BackGroundText src={backGroundText} />.
        </BackGroundMarqueeLeft>
        <BackGroundMarqueeLeft>
          <BackGroundText src={backGroundText} />.
        </BackGroundMarqueeLeft>
      </Marquee>
    </>
  );
}

export default MarqueeUi;
