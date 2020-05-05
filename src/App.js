import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import SignInForm from "./components/SignInForm";
import {
  getUsersRequest,
  loginUserRequest,
  logoutUserRequest,
} from "./actions/users";
import ProtectedRoute from "./utils/ProtectedRoute";
import Main from "./components/Main";
import AddQuestion from "./components/AddQuestion";

function App({
  users,
  currentUser,
  getUsersRequest,
  loginUserRequest,
  logoutUserRequest,
}) {
  useEffect(() => {
    getUsersRequest();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <Header currentUser={currentUser} logoutUserRequest={logoutUserRequest} />
      <Switch>
        <Route exact path="/">
          <SignInForm
            users={users}
            loginUserRequest={loginUserRequest}
            getUsersRequest={getUsersRequest}
          />
        </Route>
        <ProtectedRoute
          path="/questions"
          currentUser={currentUser}
          component={Main}
        />
        <ProtectedRoute
          path="/add"
          currentUser={currentUser}
          component={AddQuestion}
        />
        <ProtectedRoute
          path="/leaderboard"
          currentUser={currentUser}
          component={Main}
        />
      </Switch>
    </div>
  );
}

const mapStateToProps = ({ users }) => ({
  currentUser: users.authUser,
  users: users.users,
});

export default connect(mapStateToProps, {
  getUsersRequest,
  loginUserRequest,
  logoutUserRequest,
})(App);
