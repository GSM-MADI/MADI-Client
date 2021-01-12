import React from "react";
import * as S from "./Style";
import Logo from "assets/svg/Logo";
import AuthIcon from "assets/svg/AuthIcon";
import { MatchType } from "styles/Styled";
import { Link } from "react-router-dom";
import Login from "./Login/Login";
import Register from "./Register/Register";

interface AuthProps {
  match: MatchType;
}

type LoginInput = {
  email: string;
  password: string;
};

type RegisterInput = {
  email: string;
  password: string;
  std_no: string;
  gender: string;
  name: string;
};

const AuthData = (url: string) => {
  const LoginonSubmit = (form: LoginInput) => {
    console.log(form);
  };

  const RegisteronSubmit = (form: RegisterInput) => {
    console.log(form);
  };

  console.log(url);
  switch (url) {
    case "/auth/login":
      return <Login onSubmit={LoginonSubmit} />;
    case "/auth/register":
      return <Register onSubmit={RegisteronSubmit} />;
  }
};

const AuthTemplate: React.FC<AuthProps> = ({ match }) => {
  return (
    <S.Positioner>
      <S.AuthTitleWrapper>
        <S.AuthTitleContent>
          <S.AuthTitle>
            <Link to="/">
              <Logo width={212} height={102} />
            </Link>
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
          {match.url === "/auth/login" ? (
            <S.AuthKind>Sign In to MADI</S.AuthKind>
          ) : (
            <S.AuthKind>Sign Up to MADI</S.AuthKind>
          )}
          <S.LogoWrapper>
            <Link to="/">
              <Logo width={145} height={64} />
            </Link>
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
