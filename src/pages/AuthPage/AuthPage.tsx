import { Auth } from "components";
import PageTemplate from "pages/Template/PageTemplate";
import React from "react";
import { MatchType } from "styles/Styled";

interface AuthPageProps {
  match: MatchType;
}

const AuthPage: React.FC<AuthPageProps> = ({ match }) => {
  return (
    <PageTemplate>
      <Auth match={match} />
    </PageTemplate>
  );
};

export default AuthPage;
