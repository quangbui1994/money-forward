import React from "react";
import App from "../App";
import { render, screen } from "@testing-library/react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from 'history';

describe('Account', () => {
    test('renders accounts belonged to specific user', async () => {
        const history = createMemoryHistory();
        history.push('/accounts/1');
        render(
            <Router history={history}>
                <App />
            </Router>
        );
        const accounts = await screen.findAllByTestId(/account/i);
        const accountNames = accounts.map(element => element.innerHTML);
        expect(accounts.length).toBe(2);
        expect(accountNames).toEqual(['HKS', 'KOP']);
    });   

    test('display error text if no accounts found', () => {
        const history = createMemoryHistory();
        history.push('/accounts/3')
        render(
            <Router history={history}>
                <App/>
            </Router>
        );

        expect(screen.getByText(/Could not find the user/i)).toBeInTheDocument();
    });
});      