import React from "react";
import * as S from "../AddService/Style";

const AppInfo: React.FC = () => {
  return (
    <React.Fragment>
      <S.AppTitle>앱 정보</S.AppTitle>
      <S.InputWrapper>
        <div>앱 이름</div>
        <input placeholder="앱 이름을 입력하세요." />
      </S.InputWrapper>
      <S.InputWrapper>
        <div>앱 도메인</div>
        <input placeholder="앱 도메인을 입력하세요." />
      </S.InputWrapper>
      <S.InputWrapper>
        <div>Redirect URI</div>
        <input placeholder="Redirect URI를 입력하세요." />
      </S.InputWrapper>
    </React.Fragment>
  );
};

export default AppInfo;
