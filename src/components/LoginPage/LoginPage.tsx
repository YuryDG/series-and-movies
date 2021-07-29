import { useAuth0 } from '@auth0/auth0-react';
import { Redirect } from 'react-router-dom';

export const LoginPage: React.FC = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  if (isAuthenticated) {
    return <Redirect to="/" />
  } else {
    return (
      <div className="login-page">
        <button onClick={() => loginWithRedirect()}>
          Log In
        </button>
      </div>
    )
  }
}