import React from "react";
import { Route } from "react-router-dom";
import { Direction, Main } from "pages";
import AuthTemplate from "components/Auth/AuthTemplate";

const App: React.FC = () => {
  return (
    <React.Fragment>
      <Route exact path="/" component={Main} />
      <Route path="/auth/:state" component={AuthTemplate} />
      <Route path="/direction" component={Direction} />
    </React.Fragment>
  );
};

export default App;
