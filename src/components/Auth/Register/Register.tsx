import React from "react";
import * as S from "../AuthStyle";

const Register: React.FC = () => {
  return (
    <>
      <S.RegisterAuthInputWrapper>
        <div style={{ fontWeight: "bold" }}>Sign Up</div>
        <S.Input placeholder="Email" />
        <S.Input placeholder="Password" />
        <S.Input placeholder="Check Password" />
        <S.Input placeholder="학번" />
        <S.Input placeholder="이름" />
        <S.SelectBox>
          <option value="male">남자</option>
          <option value="female">여자</option>
        </S.SelectBox>
      </S.RegisterAuthInputWrapper>
      <S.RegisterAuthSubmitWrapper>
        <S.SubmitButton>SIGN UP</S.SubmitButton>
      </S.RegisterAuthSubmitWrapper>
    </>
  );
};

export default Register;
