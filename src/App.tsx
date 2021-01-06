import React from "react";
import { Route } from "react-router-dom";
import { Main } from "pages";
import AuthTemplate from "components/Auth/AuthTemplate";

const App: React.FC = () => {
  return (
    <React.Fragment>
      <Route exact path="/" component={Main} />
      <Route path="/auth" component={AuthTemplate} />
    </React.Fragment>
  );
};

export default App;
