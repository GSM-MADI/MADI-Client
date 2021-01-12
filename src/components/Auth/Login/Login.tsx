import React, { useState } from "react";
import axios from "axios";
import * as S from "../AuthStyle";
import { baseUrl } from "config/config.json";

type LoginSubmitFormProps = {
  onSubmit: (form: { email: string; password: string }) => void;
};

const Login: React.FC<LoginSubmitFormProps> = ({ onSubmit }) => {
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
    axios
      .post(`${baseUrl}/login`, {
        email: email,
        password: password,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((response) => {
        console.log(response);
      });
  };
  const { email, password } = form;
  return (
    <S.SubmitForm onSubmit={handleSubmit}>
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
    </S.SubmitForm>
  );
};

export default Login;
