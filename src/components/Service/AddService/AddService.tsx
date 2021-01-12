import React, { useState } from "react";
import * as S from "./Style";
import AppInfo from "../AppInfo/AppInfo";
import AppAuthority from "../AppAuthority/AppAuthority";
import AppSummary from "../AppSummary/AppSummary";
import { TokenClient } from "lib/Axios";
import { SubmitForm } from "styles/GlobalStyle";
import { getToken } from "lib/Token";

type SubmitFormProps = {
  onSubmit: (form: {
    AppName: string;
    image: string;
    redirect_url: string;
    approved_domain: string[];
    authority: string[];
  }) => void;
};

type RequestAppData = {
  AppName: string;
  image: string;
  redirect_url: string;
  approved_domain: string[];
  authority: string[];
};

const AppInfoList = [
  {
    Info: "앱 정보",
    Number: 1,
  },
  {
    Info: "권한 범위",
    Number: 2,
  },
  {
    Info: "앱 요약",
    Number: 3,
  },
];

const AppSettingNumber = (
  num: Number,
  form: RequestAppData,
  setForm: React.Dispatch<React.SetStateAction<RequestAppData>>
) => {
  switch (num) {
    case 1:
      return <AppInfo form={form} setForm={setForm} />;
    case 2:
      return <AppAuthority />;
    case 3:
      return <AppSummary />;
    case 4:
      console.log(form);
      return <AppSummary />;
  }
};

const AppButton = (
  num: number,
  setAppNum: React.Dispatch<React.SetStateAction<number>>
) => {
  switch (num) {
    case 1:
      return <S.NextButton onClick={() => setAppNum(2)}>다음으로</S.NextButton>;
    case 2:
      return (
        <>
          <S.PreviousButton onClick={() => setAppNum(1)}>
            이전으로
          </S.PreviousButton>
          <S.NextButton onClick={() => setAppNum(3)}>다음으로</S.NextButton>
        </>
      );
    case 3:
      return (
        <>
          <S.PreviousButton onClick={() => setAppNum(2)}>
            이전으로
          </S.PreviousButton>
          <S.NextButton type="submit" onClick={() => setAppNum(4)}>
            저장
          </S.NextButton>
        </>
      );
    case 4:
      return (
        <>
          <S.PreviousButton onClick={() => setAppNum(2)}>
            이전으로
          </S.PreviousButton>
          <S.NextButton type="submit" onClick={() => setAppNum(4)}>
            저장
          </S.NextButton>
        </>
      );
  }
};

const AddService: React.FC<SubmitFormProps> = ({ onSubmit }) => {
  const [AppNum, setAppNum] = useState(1);

  const [form, setForm] = useState({
    AppName: "",
    image: "",
    redirect_url: "",
    approved_domain: [""],
    authority: ["name", "gender", "std_no", "email"],
  });

  const { AppName, redirect_url, approved_domain, authority } = form;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if (AppNum !== 4) {
      e.preventDefault();
    } else {
      e.preventDefault();
      console.log(form);
      onSubmit(form);
      console.log(getToken());

      TokenClient.post("/oauth", {
        name: AppName,
        redirect_uri: redirect_url,
        approved_domain: approved_domain,
        authority: authority,
      })
        .then((response) => {
          console.log(response.data);
          console.log(response.status);
        })
        .catch((response) => {
          console.log(response.data);
          console.log(response.status);
        });

      setAppNum(3);
    }
  };

  return (
    <SubmitForm onSubmit={handleSubmit}>
      <S.CreatedAppNameWrapper>
        {AppInfoList.map((App, idx) => {
          if (AppNum === App.Number) {
            return (
              <React.Fragment key={idx}>
                <S.CircleNumber isSelected={true}>{App.Number}</S.CircleNumber>
                <S.Title>{App.Info}</S.Title>
                <S.TitleLine number={App.Number} />
              </React.Fragment>
            );
          } else {
            return (
              <React.Fragment key={idx}>
                <S.CircleNumber isSelected={false}>{App.Number}</S.CircleNumber>
                <S.Title>{App.Info}</S.Title>
                <S.TitleLine number={App.Number} />
              </React.Fragment>
            );
          }
        })}
      </S.CreatedAppNameWrapper>
      <S.AppInfoWrapper>
        <S.AppContentWrapper>
          {AppSettingNumber(AppNum, form, setForm)}
          {AppButton(AppNum, setAppNum)}
        </S.AppContentWrapper>
      </S.AppInfoWrapper>
    </SubmitForm>
  );
};

export default AddService;
