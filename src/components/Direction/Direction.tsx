import React from "react";
import * as S from "./Style";

const Direction: React.FC = () => {
  return (
    <S.Positioner>
      <S.SideBarWrapper>API 사용법에 대한 것</S.SideBarWrapper>
      <S.ContentWrapper>
        <a
          href="https://www.notion.so/MADI-Documents-11d5089bdb1b4bb8935b6b6f4be49b20"
          style={{ textDecoration: "none", color: "black" }}
        >
          API 사용법 보기
        </a>
      </S.ContentWrapper>
    </S.Positioner>
  );
};

export default Direction;
