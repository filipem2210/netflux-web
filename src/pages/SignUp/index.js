import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { Context } from '../../contexts/authContext';

export default function SignUp() {
  const { handleSignUp } = useContext(Context);

  return (
    <>
      <button type="button" onClick={handleSignUp}>Submit</button>
      <Link to="/signin">SignIn</Link>
    </>
  );
}
