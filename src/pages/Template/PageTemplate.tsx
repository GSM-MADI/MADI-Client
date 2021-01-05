import { Header } from "components";
import * as S from "./Style";
import React from "react";

const PageTemplate: React.FC = ({ children }) => {
  return (
    <S.Positioner>
      <Header />
      {children}
    </S.Positioner>
  );
};

export default PageTemplate;
