import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import { normalize } from "styled-normalize";

export const GlobalStyle = createGlobalStyle`
    ${normalize}

    input:focus,
    select:focus,
    textarea:focus,
    button:focus {
        outline: none;
    }

    button {
        cursor: pointer;
        outline: none;
    }

    html,
    body {
        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap');
    }
`;

export const PageBody = styled.div`
  display: flex;
`;

export const SubmitForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;
