import React, { useState } from "react";
import * as S from "../AddService/Style";

const AuthorityList = [
  {
    name: "사용자 이름",
    attribute: "name",
    description: "사용자의 이름을 확인합니다",
  },
  {
    name: "이메일",
    attribute: "email",
    description: "사용자의 이메일 주소를 확인합니다",
  },
  {
    name: "학번",
    attribute: "std_no",
    description: "사용자의 학번을 확인합니다",
  },
  {
    name: "성별",
    attribute: "gender",
    description: "사용자의 성별을 확인합니다",
  },
];

const AppAuthority: React.FC = () => {
  const [allChecked, setAllChecked] = useState(false);
  const [isChecked, setIsChecked] = useState({});

  const handleAllCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAllChecked(e.target.checked);
  };
  const handleSingleCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked({ ...isChecked, [e.target.name]: e.target.checked });
  };
  return (
    <React.Fragment>
      <S.AppTitle>권한 설정 (사용할 API)</S.AppTitle>
      <S.AuthorityWrapper>
        <S.AuthorityTitle>
          <S.CheckBox
            type="checkbox"
            checked={allChecked}
            onChange={handleAllCheck}
          />
          <S.AuthText>이름</S.AuthText>
          <S.AuthText>Attribute Name</S.AuthText>
          <S.AuthDescription>설명</S.AuthDescription>
        </S.AuthorityTitle>
        {AuthorityList.map((Auth, idx) => (
          <S.Authority key={idx}>
            <S.CheckBox
              type="checkbox"
              checked={allChecked ? true : false}
              onChange={handleSingleCheck}
            />
            <S.AuthText>{Auth.name}</S.AuthText>
            <S.AuthText>{Auth.attribute}</S.AuthText>
            <S.AuthDescription>{Auth.description}</S.AuthDescription>
          </S.Authority>
        ))}
      </S.AuthorityWrapper>
    </React.Fragment>
  );
};

export default AppAuthority;
