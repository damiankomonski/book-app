import { screen, render } from "@testing-library/react";
import Footer from "./Footer";
import { BrowserRouter } from "react-router-dom";
import '@testing-library/jest-dom';

describe("Footer tests", () => {
    test("if footer has appropriate copyright text", () => {
        render(
            <BrowserRouter>
                <Footer />
            </BrowserRouter>
        );

        const paragraphElement = screen.getByText("© 2022 Books Finder. All rights reserved.");
        expect(paragraphElement).toHaveTextContent(/© 2022 Books Finder. All rights reserved./i);
    });
});