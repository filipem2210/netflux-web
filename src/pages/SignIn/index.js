import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { Context } from '../../contexts/authContext';

export default function SignIn() {
  const { handleSignIn } = useContext(Context);

  return (
    <>
      <button type="button" onClick={handleSignIn}>Submit</button>
      <Link to="/signup">SignUp</Link>
    </>
  );
}
