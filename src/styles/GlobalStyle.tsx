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
`;

export const PageBody = styled.div`
  display: flex;
`;
