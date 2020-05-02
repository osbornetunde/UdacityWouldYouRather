import React from "react";
import { Switch, Route } from "react-router-dom";
import SigninPage from "./Pages/SigninPage";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <SigninPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
