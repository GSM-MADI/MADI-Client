import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

export const FadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const Move = keyframes`
    from {
      transform: translateY(10vh);
    }
    to {
      transform: translateY(0px);
    }
`;

export const Positioner = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

export const IconWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  animation-name: ${FadeIn}, ${Move};
  animation-timing-function: ease-in;
  animation-duration: 1.6s;
`;

export const TitleWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  span {
    font-weight: 700;
    font-size: 40px;
    color: black;
  }
`;

export const TitleContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  flex: 2.25;
  animation-name: ${FadeIn}, ${Move};
  animation-timing-function: ease-in;
  animation-duration: 1s;
`;

export const DocsWrapper = styled.div`
  display: flex;
  flex: 1;
  width: 563.95px;
  animation-name: ${FadeIn}, ${Move};
  animation-timing-function: ease-in;
  animation-duration: 1.2s;
`;

export const Document = styled(Link)`
  display: flex;
  width: 380px;
  height: 60px;
  border: 3px solid #000000;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background-color: white;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  color: #000000;
  transition: all 1s, color 0.5s;
  text-decoration: none;

  &:hover {
    background-color: black;
    color: white;
    box-shadow: 200px 0 0 0 #000000 inset, -200px 0 0 0 #000000 inset;
  }
`;
export const MainTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;

  div {
    font-weight: 700;
    font-size: 40px;
    color: black;
    padding-top: 35px;
  }
`;

export const SubTitle = styled.div`
  padding-top: 35px;
  font-size: 20px;
  font-weight: 400;
  color: #575757;
`;
