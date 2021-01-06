import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { MatchType } from "styles/Styled";

interface StyleProps {
  match: MatchType;
}

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

export const AuthTitleWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: 5%;
`;

export const AuthTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;

  div {
    font-weight: 700;
    font-size: 42px;
    color: black;
    padding-left: 20px;
    padding-top: 33px;
  }
`;

export const AuthIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 5rem;
`;

export const AuthTitleContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 5rem;
  align-items: flex-start;
`;

export const SubTitle = styled.div`
  padding-top: 20px;
  font-size: 20px;
  font-weight: 400;
  color: #575757;
`;

export const AuthWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const AuthContent = styled.div`
  display: flex;
  width: 586px;
  height: 470px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 7rem;
  margin-right: 13rem;
`;

export const AuthKind = styled.div`
  position: relative;
  width: 150px;
  top: 78px;
  background-color: white;
  z-index: 2;
  font-weight: 200;
  font-size: 18px;
  text-align: center;
`;

export const AuthBox = styled.div<StyleProps>`
  margin-top: 10px;
  display: flex;
  width: 570px;
  height: ${(props) => (props.match.url === "/auth/login" ? "380px" : "680px")};
  border: 0.5px solid #000000;
  border-radius: 20px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const LogoWrapper = styled.div`
  width: 145px;
  height: 100px;
  justify-content: center;
  align-items: center;
`;

export const Password = styled(Link)`
  position: absolute;
  right: 50px;
  bottom: 45px;
  font-weight: bold;
  font-size: 16px;
  color: #414141;
  text-decoration: none;
`;
