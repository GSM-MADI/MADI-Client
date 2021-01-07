import React from "react";
import * as S from "../AuthStyle";

const Login: React.FC = () => {
  return (
    <>
      <S.LoginAuthInputWrapper>
        <div style={{ fontWeight: "bold" }}>Sign In</div>
        <S.Input placeholder="Email" />
        <S.Input placeholder="Password" type="password" />
      </S.LoginAuthInputWrapper>
      <S.LoginAuthSubmitWrapper>
        <S.SubmitButton>SIGN IN</S.SubmitButton>
      </S.LoginAuthSubmitWrapper>
    </>
  );
};

export default Login;
