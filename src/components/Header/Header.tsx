import React from "react";
import * as S from "./Style";
import Logo from "assets/svg/Logo";

const Header: React.FC = () => {
  return (
    <S.Positioner>
      <S.ContentWrapper>
        <S.Logo>
          <Logo />
        </S.Logo>
        <S.NavBarWrapper>
          <S.Content to="/">API 사용법</S.Content>
          <S.Content to="/">API 서비스</S.Content>
        </S.NavBarWrapper>
        <S.AuthWrapper>
          <S.AuthContent to="/">로그인</S.AuthContent>
        </S.AuthWrapper>
      </S.ContentWrapper>
    </S.Positioner>
  );
};

export default Header;
