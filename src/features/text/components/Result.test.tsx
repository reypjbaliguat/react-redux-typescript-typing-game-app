import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../../app/store";
import Result from "./Result";

describe("Result Component", () => {
    const { getByText } = render(
        <Provider store={store}>
            <Result />
        </Provider>
    );

    screen.debug();
    it("Checks result initial state", () => {
        expect(getByText(/0 Words Per Minute/i)).toBeInTheDocument();
    });
});
