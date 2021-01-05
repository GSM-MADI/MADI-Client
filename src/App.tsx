import React from "react";
import { Route } from "react-router-dom";
import { Main } from "pages";

const App: React.FC = () => {
  return (
    <React.Fragment>
      <Route exact path="/" component={Main} />
    </React.Fragment>
  );
};

export default App;
