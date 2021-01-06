import React from "react";
import { MatchType } from "styles/Styled";
import * as S from "./Style";

type AppData = {
  name: string;
  image: string;
  redirect_url: string;
  approved_domain: string[];
  authority: string[];
  client_id: string;
  client_secret: string;
  color: string;
};

interface ServiceProps {
  AppData: AppData[];
  match: MatchType;
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
    <S.AppNameWrapper to={`${App.client_id}`} key={idx}>
      <S.AppColor colorCode={App.color} />
      <S.AppName>{App.name}</S.AppName>
    </S.AppNameWrapper>
  ));

const CurrentAppData = (AppData: AppData[], url: string) =>
  AppData.map((App, idx) => {
    let path = url.split("/")[3];
    console.log(path);
    if (App.client_id === path) {
      return (
        <S.SelectedAppNameWrapper to={`${App.client_id}`} key={idx}>
          <S.AppColor colorCode={App.color} />
          <S.AppName>{App.name}</S.AppName>
        </S.SelectedAppNameWrapper>
      );
    } else {
      return null;
    }
  });

const Service: React.FC<ServiceProps> = ({ AppData, match }) => {
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
      <S.AppInfoWrapper>{CurrentAppData(AppData, match.url)}</S.AppInfoWrapper>
    </S.Positioner>
  );
};

export default Service;
