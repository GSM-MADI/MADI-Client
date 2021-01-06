import styled from "styled-components";

export const LoginAuthInputWrapper = styled.div`
  display: flex;
  width: 70%;
  height: 60%;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
`;

export const RegisterAuthInputWrapper = styled.div`
  display: flex;
  width: 70%;
  height: 80%;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
`;

export const LoginAuthSubmitWrapper = styled.div`
  display: flex;
  width: 70%;
  height: 40%;
  justify-content: center;
  align-items: center;
`;
export const RegisterAuthSubmitWrapper = styled.div`
  display: flex;
  width: 70%;
  height: 30%;
  justify-content: center;
  align-items: center;
`;

export const SubmitButton = styled.button`
  width: 100%;
  height: 50px;
  border: 1px solid #000000;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  background-color: #ffffff;

  font-weight: bold;
  font-size: 16px;
  transition: all 1s, color 0.3s;
  &:hover {
    background-color: black;
    color: white;
    box-shadow: 200px 0 0 0 #000000 inset, -200px 0 0 0 #000000 inset;
  }
`;
export const Input = styled.input`
  width: 100%;
  height: 40px;
  border: 0;
  border-bottom: 1px solid #000000;
  margin: 15px auto;
`;

export const SelectBox = styled.select`
  width: 100%;
  height: 40px;
  border: 0;
  border-bottom: 1px solid #000000;
  margin: 15px auto;
`;
