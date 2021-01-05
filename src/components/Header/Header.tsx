import React from "react";
import * as S from "./Style";
import Logo from "assets/svg/Logo";

const Header: React.FC = () => {
  return (
    <S.ContentWrapper>
      <S.Logo>
        <Logo />
      </S.Logo>
    </S.ContentWrapper>
  );
};

export default Header;
