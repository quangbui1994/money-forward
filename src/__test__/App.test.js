import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from 'history';
import App from "../App";

describe('App should works on routing', () => {
    beforeEach(() => {
        const history = createMemoryHistory();
        render(
            <Router history={history}>
                <App />
            </Router>
        )
    }) 
    
    test('clicks search user button to route to account page', () => {
        const history = createMemoryHistory();
        const buttonEl = screen.getByRole('button', { name: /click/i });
        const inputEl = screen.getByTestId(/input-element/i);
        fireEvent.change(inputEl, {
            target: { value: '1' }
        }); 
        fireEvent.click(buttonEl);
        expect(screen.getByText(/user accounts/i)).toBeInTheDocument();
    });  
    
    test('clicks account search button in side bar route to home page', () => {
        const accountSearchEl = screen.getByText(/account search/i);
        fireEvent.click(accountSearchEl);
        expect(screen.getByText(/user search/i)).toBeInTheDocument();
    })
})