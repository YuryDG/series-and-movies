import { render } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Router } from "react-router";
import { HomePage } from "../HomePage";

jest.mock('@auth0/auth0-react', () => ({
  useAuth0: () => ({ isAuthenticated: false })
}))

describe('HomePage', () => {
  it("should redirect to login page", () => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <HomePage />
      </Router>,
    );
    expect(history.location.pathname).toBe("/login");
  });
})
