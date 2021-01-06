import React from "react";
import * as S from "./Style";
import Logo from "assets/svg/Logo";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <S.Positioner>
      <S.ContentWrapper>
        <S.Logo>
          <Link to="/">
            <Logo width={100} height={37} />
          </Link>
        </S.Logo>
        <S.NavBarWrapper>
          <S.Content to="/direction">API 사용법</S.Content>
          <S.Content to="/service/apps/default">API 서비스</S.Content>
        </S.NavBarWrapper>
        <S.AuthWrapper>
          <S.AuthContent to="/auth/login">로그인</S.AuthContent>
        </S.AuthWrapper>
      </S.ContentWrapper>
    </S.Positioner>
  );
};

export default Header;
