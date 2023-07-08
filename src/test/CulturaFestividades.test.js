import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Festividades } from "../pages/Cultura/festividades";

describe("Festividades", () => {
    it("should render festival information correctly", () => {
        render(
            <MemoryRouter>
                <Festividades />
            </MemoryRouter>
        );

        const festivalTitle = screen.getByText("Festividades");
        expect(festivalTitle).toBeInTheDocument();

        const festivalImages = screen.getAllByTestId("festival-image");
        expect(festivalImages).toHaveLength(4);

        const festivalDescriptions = screen.getAllByTestId("festival-description");
        expect(festivalDescriptions).toHaveLength(4);
    });

    it("should navigate to the next page when the 'Next' button is clicked", () => {
        render(
            <MemoryRouter>
                <Festividades />
            </MemoryRouter>
        );

        const nextButton = screen.getByTestId("boton-next");
        expect(nextButton).toBeInTheDocument();

        fireEvent.click(nextButton); // Simula el clic en el botón "Next"
    });
});
