import React from "react";
import { Route } from "react-router-dom";
import { Main, Auth } from "pages";

const App: React.FC = () => {
  return (
    <React.Fragment>
      <Route exact path="/" component={Main} />
      <Route path="/auth/:state" component={Auth} />
    </React.Fragment>
  );
};

export default App;
