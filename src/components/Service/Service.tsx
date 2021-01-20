import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MatchType } from "styles/Styled";
import AddService from "./AddService/AddService";
import * as S from "./Style";
import * as A from "./AddService/Style";
import { TokenClient } from "lib/Axios";

type AppData = {
  name: string;
  image: string;
  redirect_uri: string;
  approved_domain: string[];
  authority: string[];
  app_id: string;
  secret_key: string;
  color: string;
};

type RequestApp = {
  AppName: string;
  image: string;
  redirect_url: string;
  approved_domain: string[];
  authority: string[];
};

type AppDetail = {
  name: string;
  redirect_uri: string;
  approved_domain: string[];
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
    <S.AppNameWrapper to={`${App.app_id}`} key={idx}>
      <S.AppColor colorCode="#52A865" />
      <S.AppName>{App.name}</S.AppName>
    </S.AppNameWrapper>
  ));

const CurrentAppData = (AppData: AppData[], url: string) =>
  AppData.map((App, idx) => {
    let path = url.split("/")[3];
    console.log(path);
    if (App.app_id === path) {
      return (
        <S.SelectedAppNameWrapper to={`${App.app_id}`} key={idx}>
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
    if (App.app_id === path) {
      return (
        <S.AppContentWrapper>
          <S.AppInfo>
            <S.Profile>앱 사진</S.Profile>
            <S.App>
              <A.AppTitle>{App.name}</A.AppTitle>
              <S.InputWrapper>
                <div style={{ color: "#727272" }}>클라이언트 ID</div>
                <S.Appdiv>{App.app_id}</S.Appdiv>
              </S.InputWrapper>
              <S.InputWrapper>
                <div style={{ color: "#727272" }}>앱 시크릿 코드</div>
                {isLook ? (
                  <S.Appdiv onClick={() => setisLook(false)}>
                    {App.secret_key}
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
                <input value={App.redirect_uri} />
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
  const [AppDetail, setAppDetail] = useState([]);
  const [form, setForm] = useState({
    name: "",
    redirect_uri: "",
    approved_domain: [""],
  });

  useEffect(() => {
    let path = match.url.split("/")[3];
    TokenClient.get(`/oauth/${path}`)
      .then((response) => {
        console.log(response.data);
        console.log(response.status);
        setAppDetail(response.data);
        setForm({
          ...form,
          name: response.data.name,
          redirect_uri: response.data.redirect_uri,
          approved_domain: response.data.approved_domain,
        });
      })
      .catch((response) => {
        console.log("불러올게 없다!");
      });
  }, []);

  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setForm({
      ...form,
      name: value,
    });
  };
  const handleUrl = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setForm({
      ...form,
      redirect_uri: value,
    });
  };

  const handleDomain = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const Domain = value.split(",");
    setForm({
      ...form,
      approved_domain: Domain,
    });
  };

  const handleDelete = () => {
    let path = match.url.split("/")[3];

    TokenClient.delete(`/oauth/${path}`)
      .then((response) => {
        console.log(response.data);
        console.log(response.status);
        alert("앱이 삭제되었습니다.");
        window.location.reload();
      })
      .catch(() => {
        alert("삭제할 데이터를 선택해주세요");
      });
  };

  const handlePut = () => {};

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
          <S.AppState onClick={handleDelete}>앱 삭제</S.AppState>
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
