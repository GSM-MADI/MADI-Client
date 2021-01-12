import React, { useState } from "react";
import * as S from "./Style";
import AppInfo from "../AppInfo/AppInfo";
import AppAuthority from "../AppAuthority/AppAuthority";
import InfoApps from "../../../assets/background/InfoApps.png";

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
      return <img alt="이미지" src={InfoApps} />;
  }
};

const AppButton = (
  num: number,
  setAppNum: React.Dispatch<React.SetStateAction<number>>
) => {
  switch (num) {
    case 1:
      return (
        <S.NextButton onClick={() => setAppNum(num + 1)}>다음으로</S.NextButton>
      );
    case 2:
      return (
        <>
          <S.PreviousButton onClick={() => setAppNum(num - 1)}>
            이전으로
          </S.PreviousButton>
          <S.NextButton onClick={() => setAppNum(num + 1)}>
            다음으로
          </S.NextButton>
        </>
      );
    case 3:
      return (
        <>
          <S.PreviousButton onClick={() => setAppNum(num - 1)}>
            이전으로
          </S.PreviousButton>
          <S.NextButton>저장</S.NextButton>
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
    authority: [""],
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(form);
    setForm({
      AppName: "",
      image: "",
      redirect_url: "",
      approved_domain: [""],
      authority: [""],
    });
  };

  console.log(form);

  return (
    <React.Fragment>
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
    </React.Fragment>
  );
};

export default AddService;
