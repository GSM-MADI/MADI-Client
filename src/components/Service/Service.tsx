import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MatchType } from "styles/Styled";
import AddService from "./AddService/AddService";
import * as S from "./Style";
import * as A from "./AddService/Style";

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

type RequestApp = {
  AppName: string;
  image: string;
  redirect_url: string;
  approved_domain: string[];
  authority: string[];
};

interface ServiceProps {
  AppData: AppData[];
  match: MatchType;
}

// const GetRandomColor = () => {
//   let colorCode = "#" + Math.round(Math.random() * 0xffffff).toString(16);

//   while (colorCode === "#f9f9f9" || colorCode.length < 7) {
//     colorCode = "#" + Math.round(Math.random() * 0xffffff).toString(16);
//   }
//   return colorCode;
// };

const MappingAppData = (AppData: AppData[]) =>
  AppData.map((App, idx) => (
    <S.AppNameWrapper to={`${App.client_id}`} key={idx}>
      <S.AppColor colorCode="#52A865" />
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
          <S.AppColor colorCode="#52A865" />
          <S.AppName>{App.name}</S.AppName>
        </S.SelectedAppNameWrapper>
      );
    } else {
      return null;
    }
  });

const CurrentAppInfoData = (
  AppData: AppData[],
  url: string,
  isLook: boolean,
  setisLook: React.Dispatch<React.SetStateAction<boolean>>
) =>
  AppData.map((App, idx) => {
    let path = url.split("/")[3];
    console.log(path);
    if (App.client_id === path) {
      return (
        <S.AppContentWrapper>
          <S.AppInfo>
            <S.Profile>앱 사진</S.Profile>
            <S.App>
              <A.AppTitle>{App.name}</A.AppTitle>
              <S.InputWrapper>
                <div style={{ color: "#727272" }}>클라이언트 ID</div>
                <S.Appdiv>{App.client_id}</S.Appdiv>
              </S.InputWrapper>
              <S.InputWrapper>
                <div style={{ color: "#727272" }}>앱 시크릿 코드</div>
                {isLook ? (
                  <S.Appdiv onClick={() => setisLook(false)}>
                    {App.client_secret}
                  </S.Appdiv>
                ) : (
                  <S.Appdiv onClick={() => setisLook(true)}>
                    OOOOOOOOOOOOOOOOOOO
                  </S.Appdiv>
                )}
              </S.InputWrapper>

              <S.InputWrapper>
                <div style={{ color: "#727272" }}>앱 이름</div>
                <input value={App.name} />
              </S.InputWrapper>
              <S.InputWrapper>
                <div style={{ color: "#727272" }}>Redirect URI</div>
                <input value={App.redirect_url} />
              </S.InputWrapper>
              <S.InputWrapper>
                <div style={{ color: "#727272" }}>앱 도메인</div>
                <input value={App.approved_domain} />
              </S.InputWrapper>
            </S.App>
          </S.AppInfo>
        </S.AppContentWrapper>
      );
    } else {
      return null;
    }
  });

const Service: React.FC<ServiceProps> = ({ AppData, match }) => {
  const [isLook, setisLook] = useState(false);

  const onSubmit = (form: RequestApp) => {
    console.log(form);
  };
  return (
    <S.Positioner>
      <S.AppListWrapper>
        <S.Title>API 및 서비스</S.Title>
        <S.AppStateWrapper>
          <Link to="/service/apps/add" style={{ textDecoration: "none" }}>
            <S.AppState>앱 추가</S.AppState>
          </Link>
          <S.AppState>앱 삭제</S.AppState>
        </S.AppStateWrapper>
        {MappingAppData(AppData)}
      </S.AppListWrapper>
      <S.AppInfoWrapper>
        {match.url === "/service/apps/add" ? (
          <AddService onSubmit={onSubmit} />
        ) : (
          <>
            {CurrentAppData(AppData, match.url)}
            {CurrentAppInfoData(AppData, match.url, isLook, setisLook)}
            <A.NextButton>저장</A.NextButton>
          </>
        )}
      </S.AppInfoWrapper>
    </S.Positioner>
  );
};

export default Service;
