import React from "react";
import Header from "../components/Header";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

describe('Header', () => {
    test('render properly at the beginning', () => {
        render(
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        );
        expect(screen.getByText(/Account Management/i)).toBeInTheDocument();
    });
})