import React from "react";
import * as S from "./Style";
import Logo from "assets/svg/Logo";
import AuthIcon from "assets/svg/AuthIcon";
import { MatchType } from "styles/Styled";
import Login from "./Login/Login";
import Register from "./Register/Register";

interface AuthProps {
  match: MatchType;
}

const AuthData = (url: string) => {
  console.log(url);
  switch (url) {
    case "/auth/login":
      return <Login />;
    case "/auth/register":
      return <Register />;
  }
};

const AuthTemplate: React.FC<AuthProps> = ({ match }) => {
  return (
    <S.Positioner>
      <S.AuthTitleWrapper>
        <S.AuthTitleContent>
          <S.AuthTitle>
            <Logo width={212} height={102} />
            <div>계정 하나로 충분합니다.</div>
          </S.AuthTitle>
          <S.SubTitle>
            GSM의 모든 서비스를 MADI 계정으로 이용해 보세요!
          </S.SubTitle>
        </S.AuthTitleContent>
        <S.AuthIcon>
          <AuthIcon />
        </S.AuthIcon>
      </S.AuthTitleWrapper>
      <S.AuthWrapper>
        <S.AuthContent>
          <S.AuthKind>Sign In to MADI</S.AuthKind>
          <S.LogoWrapper>
            <Logo width={145} height={64} />
          </S.LogoWrapper>
          <S.AuthBox match={match}>{AuthData(match.url)}</S.AuthBox>
        </S.AuthContent>
      </S.AuthWrapper>
      {match.url === "/auth/login" ? (
        <S.Password to="/auth/register">아직 계정이 없으신가요?</S.Password>
      ) : (
        <S.Password to="/auth/login">이미 계정이 있으신가요?</S.Password>
      )}
    </S.Positioner>
  );
};

export default AuthTemplate;
