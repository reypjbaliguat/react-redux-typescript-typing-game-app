import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./App";

describe("Typing Game Test", () => {
    const { getByText } = render(
        <Provider store={store}>
            <App />
        </Provider>
    );

    screen.debug();
    it("Renders the typing game", () => {
        expect(getByText(/Typing Game/i)).toBeInTheDocument();
    });
});
