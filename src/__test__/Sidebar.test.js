import React from "react";
import SideBar from "../components/SideBar";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

describe('Sidebar', () => {
    test('renders the items correctly', () => {
        render(
            <BrowserRouter>
                <SideBar />
            </BrowserRouter>
        );

        expect(screen.getByText(/Account Search/i)).toBeInTheDocument();
    })
})
