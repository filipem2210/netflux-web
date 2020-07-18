import React, { useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { Context } from './contexts/authContext';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import LastStep from './pages/LastStep';
import Browse from './pages/Browse';

function CustomRoute({ isPrivate, ...rest }) {
  const { loading, authenticated } = useContext(Context);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (isPrivate && !authenticated) {
    return <Redirect to="/" />
  }

  return <Route {...rest} />;
}

export default function Routes() {
  return (
    <Switch>
      <CustomRoute path="/" exact component={SignUp} />
      <CustomRoute path="/laststep" exact component={LastStep} />
      <CustomRoute path="/signin" component={SignIn} />

      <CustomRoute path="/browse" isPrivate component={Browse} />
    </Switch>
  );
}
