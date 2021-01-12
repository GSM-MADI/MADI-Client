import React from "react";
import * as S from "../AddService/Style";

type RequestAppObj = {
  AppName: string;
  image: string;
  redirect_url: string;
  approved_domain: string[];
  authority: string[];
};

interface AppInfoProps {
  form: RequestAppObj;
  setForm: React.Dispatch<React.SetStateAction<RequestAppObj>>;
}

const AppInfo: React.FC<AppInfoProps> = ({ form, setForm }) => {
  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setForm({
      ...form,
      AppName: value,
    });
  };

  const handleRedirect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setForm({
      ...form,
      redirect_url: value,
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

  const { AppName, redirect_url, approved_domain } = form;

  return (
    <React.Fragment>
      <S.AppTitle>앱 정보</S.AppTitle>
      <S.InputWrapper>
        <div>앱 이름</div>
        <input
          placeholder="앱 이름을 입력하세요."
          value={AppName}
          onChange={handleName}
        />
      </S.InputWrapper>
      <S.InputWrapper>
        <div>앱 도메인</div>
        <input
          placeholder="앱 도메인을 입력하세요."
          value={approved_domain}
          onChange={handleDomain}
        />
      </S.InputWrapper>
      <S.InputWrapper>
        <div>Redirect URI</div>
        <input
          placeholder="Redirect URI를 입력하세요."
          value={redirect_url}
          onChange={handleRedirect}
        />
      </S.InputWrapper>
    </React.Fragment>
  );
};

export default AppInfo;
