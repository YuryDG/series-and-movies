import { render } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Router } from "react-router";
import { LoginPage } from "../LoginPage";

jest.mock('@auth0/auth0-react', () => ({
  useAuth0: () => ({ isAuthenticated: true })
}))

describe('LoginPage', () => {
  it("should redirect to home page", () => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <LoginPage />
      </Router>,
    );
    expect(history.location.pathname).toBe("/home");
  });
})