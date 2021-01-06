import React from "react";
import * as S from "./Style";

type AppData = {
  name: string;
  image: string;
  redirect_url: string;
  approved_domain: string[];
  authority: string[];
  client_id: string;
  client_secret: string;
};

interface ServiceProps {
  AppData: AppData[];
}

const GetRandomColor = () => {
  let colorCode = "#" + Math.round(Math.random() * 0xffffff).toString(16);

  while (colorCode === "#f9f9f9" || colorCode.length < 7) {
    colorCode = "#" + Math.round(Math.random() * 0xffffff).toString(16);
  }
  return colorCode;
};

const MappingAppData = (AppData: AppData[]) =>
  AppData.map((App, idx) => (
    <S.AppNameWrapper key={idx}>
      <S.AppColor colorCode={GetRandomColor()} />
      <S.AppName>{App.name}</S.AppName>
    </S.AppNameWrapper>
  ));

const Service: React.FC<ServiceProps> = ({ AppData }) => {
  return (
    <S.Positioner>
      <S.AppListWrapper>
        <S.Title>API 및 서비스</S.Title>
        <S.AppStateWrapper>
          <S.AppState>앱 추가</S.AppState>
          <S.AppState>앱 삭제</S.AppState>
        </S.AppStateWrapper>
        {MappingAppData(AppData)}
      </S.AppListWrapper>
      <S.AppInfoWrapper>앱정보</S.AppInfoWrapper>
    </S.Positioner>
  );
};

export default Service;
