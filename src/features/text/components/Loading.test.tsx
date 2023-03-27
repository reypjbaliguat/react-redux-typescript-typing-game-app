import { render, screen } from "@testing-library/react";
import Loading from "./Loading";

describe("Loading renders correctly", () => {
    it("checks loading", () => {
        render(<Loading />);
        const loadingComponent = screen.getByTestId("loading icon");
        expect(loadingComponent).toBeInTheDocument();
    });
});
