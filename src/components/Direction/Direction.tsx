import React from "react";
import * as S from "./Style";

const Direction: React.FC = () => {
  return (
    <S.Positioner>
      <S.SideBarWrapper>API 사용법에 대한 것</S.SideBarWrapper>
      <S.ContentWrapper>각 API 사용법에 대한 내용</S.ContentWrapper>
    </S.Positioner>
  );
};

export default Direction;
