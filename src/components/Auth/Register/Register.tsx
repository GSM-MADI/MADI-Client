import React, { useState } from "react";
import * as S from "../AuthStyle";
import axios from "axios";
import { baseUrl } from "config/config.json";

type RegisterSubmitFormProps = {
  onSubmit: (form: {
    email: string;
    password: string;
    std_no: string;
    gender: string;
    name: string;
  }) => void;
};

const Register: React.FC<RegisterSubmitFormProps> = ({ onSubmit }) => {
  const [form, setForm] = useState({
    email: "",
    password: "",
    std_no: "",
    gender: "male",
    name: "",
  });

  const { email, password, std_no, gender, name } = form;

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

  const handleStudent = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setForm({
      ...form,
      std_no: value,
    });
  };

  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setForm({
      ...form,
      name: value,
    });
  };

  const handlegender = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    setForm({
      ...form,
      gender: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    console.log(form);
    e.preventDefault();
    onSubmit(form);
    axios
      .post(`${baseUrl}/user/register`, {
        email: email,
        password: password,
        name: name,
        stdNo: std_no,
        gender: gender,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((response) => {
        console.log(response);
      });
  };
  return (
    <S.SubmitForm onSubmit={handleSubmit}>
      <S.RegisterAuthInputWrapper>
        <div style={{ fontWeight: "bold" }}>Sign Up</div>
        <S.Input placeholder="Email" value={email} onChange={handleEmail} />
        <S.Input
          placeholder="Password"
          type="password"
          value={password}
          onChange={handlePw}
        />
        <S.Input placeholder="Check Password" type="password" />
        <S.Input placeholder="학번" value={std_no} onChange={handleStudent} />
        <S.Input placeholder="이름" value={name} onChange={handleName} />
        <S.SelectBox value={gender} onChange={handlegender}>
          <option value="male">남자</option>
          <option value="female">여자</option>
        </S.SelectBox>
      </S.RegisterAuthInputWrapper>
      <S.RegisterAuthSubmitWrapper>
        <S.SubmitButton>SIGN UP</S.SubmitButton>
      </S.RegisterAuthSubmitWrapper>
    </S.SubmitForm>
  );
};

export default Register;
