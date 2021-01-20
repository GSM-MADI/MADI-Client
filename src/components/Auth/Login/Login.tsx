import React, { useState } from "react";
import * as S from "../AuthStyle";
import { client } from "lib/Axios";
import { SubmitForm } from "styles/GlobalStyle";
import { useHistory } from "react-router-dom";

type LoginSubmitFormProps = {
  onSubmit: (form: { email: string; password: string }) => void;
};

const Login: React.FC<LoginSubmitFormProps> = ({ onSubmit }) => {
  const history = useHistory();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setForm({
      ...form,
      email: value,
    });
  };

  const handlePw = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setForm({
      ...form,
      password: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    console.log(form);
    e.preventDefault();
    onSubmit(form);
    client
      .post("/login", {
        email: email,
        password: password,
      })
      .then((response) => {
        alert("로그인 성공!");
        sessionStorage.setItem("MADI-token", response.data.token);
        console.log(response.data);
        console.log(response.status);
        history.push("/");
      })
      .catch((response) => {
        alert("아이디나 비밀번호가 올바르지 않습니다.");
        console.log(response.data.data);
        console.log(response.status);
      });
  };
  const { email, password } = form;
  return (
    <SubmitForm onSubmit={handleSubmit}>
      <S.LoginAuthInputWrapper>
        <div style={{ fontWeight: "bold" }}>Sign In</div>
        <S.Input placeholder="Email" value={email} onChange={handleEmail} />
        <S.Input
          placeholder="Password"
          type="password"
          value={password}
          onChange={handlePw}
        />
      </S.LoginAuthInputWrapper>
      <S.LoginAuthSubmitWrapper>
        <S.SubmitButton>SIGN IN</S.SubmitButton>
      </S.LoginAuthSubmitWrapper>
    </SubmitForm>
  );
};

export default Login;
