import { render } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Router } from "react-router";
import { store } from "../../../app/store";
import { HomePage } from "../HomePage";
import { Provider } from "react-redux";

jest.mock('@auth0/auth0-react', () => ({
  useAuth0: () => ({ isAuthenticated: false })
}))

describe('HomePage', () => {
  it("should redirect to login page", () => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <Provider store={store}>
          <HomePage />
        </Provider>
      </Router>,
    );
    expect(history.location.pathname).toBe("/");
  });
})
