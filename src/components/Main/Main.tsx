import React from "react";
import MainIcon from "assets/svg/MainIcon";
import Logo from "assets/svg/Logo";
import * as S from "./Style";

const Main: React.FC = () => {
  return (
    <S.Positioner>
      <S.TitleWrapper>
        <S.TitleContent>
          <S.MainTitle>
            <Logo width={232} height={102} />
            <div>를 이용해서</div>
          </S.MainTitle>
          <span>손쉽고 안전한 인증을 해보세요.</span>
          <S.SubTitle>
            GSM의 모든 서비스를 MADI 계정으로 이용해 보세요!
          </S.SubTitle>
        </S.TitleContent>
        <S.DocsWrapper>
          <S.Document>Docs 보러가기 →</S.Document>
        </S.DocsWrapper>
      </S.TitleWrapper>
      <S.IconWrapper>
        <MainIcon />
      </S.IconWrapper>
    </S.Positioner>
  );
};

export default Main;
