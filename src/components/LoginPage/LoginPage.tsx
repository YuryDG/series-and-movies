import { useAuth0 } from '@auth0/auth0-react';
import { Redirect } from 'react-router-dom';
import './LoginPage.css';

export const LoginPage: React.FC = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  if (isAuthenticated) {
    return <Redirect to="/home" />
  } else {
    return (
      <div className="container">
        <div className="login-page">
          <div className="image-container">
            <img
              src="./movies-and-series.png"
              alt="Movies and Series"
              width="300"
              height="300"
            />
          </div>
          <div className="btn-container">
            <p>The New Netflix</p>
            <button className="login-btn" onClick={() => loginWithRedirect()}>
              LOGIN
            </button>
          </div>
        </div>
      </div>
    )
  }
}