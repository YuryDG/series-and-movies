import { useAuth0 } from "@auth0/auth0-react";
import { Redirect } from "react-router-dom";

export const HomePage: React.FC = () => {
  const { isAuthenticated } = useAuth0();

  if (!isAuthenticated) {
    return <Redirect to="/login" />
  } else {
    return (
      <section className="home-page">
        <h1>Movies and Series</h1>
      </section>
    )
  }
}