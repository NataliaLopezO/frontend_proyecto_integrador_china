import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { User_profile } from "../pages/user_profile";

describe("User_profile", () => {
    beforeEach(() => {
        sessionStorage.setItem("username", "testUser");
        sessionStorage.setItem("foto", "testProfilePic.jpg");
    });

    afterEach(() => {
        sessionStorage.clear();
    });

    it("should render the profile information correctly", () => {
        render(
            <MemoryRouter>
                <User_profile />
            </MemoryRouter>
        );

        const profilePic = screen.getByAltText("profile");
        expect(profilePic).toBeInTheDocument();

        const usernameElement = screen.getByText("testUser");
        expect(usernameElement).toBeInTheDocument();

    });

    it("should disable the quiz button when the progress is less than 100%", () => {
        render(
            <MemoryRouter>
                <User_profile />
            </MemoryRouter>
        );

        const quizButtons = screen.getAllByRole("button", { name: /^Quiz/ });
        quizButtons.forEach((button) => {
            expect(button).toBeDisabled();
        });

    });

});
