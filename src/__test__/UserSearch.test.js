import React from "react";
import UserSearch from "../components/UserSearch";  
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { createMemoryHistory } from 'history'; 

describe('UserSearch page', () => {
    beforeEach(() => {
        const history = createMemoryHistory();
        render(
            <BrowserRouter>
                <UserSearch history={history}/>
            </BrowserRouter>
        )
    });

    test('renders input field correcly', () => {
        expect(screen.getByLabelText(/UserId/i)).toBeInTheDocument(); 
    });

    test('renders button correctly', () => {
        expect(screen.getByRole('button', { name: /click/i })).toBeInTheDocument();
    });

    test('users can enter the number type value in input field', () => {
        const inputEl = screen.getByTestId(/input-element/i);
        fireEvent.change(inputEl, {
            target: { value: '1' }
        })
        expect(inputEl.value).toBe('1');
    });

    test('users cant enter the text value in the input field', () => {
        const inputEl = screen.getByTestId(/input-element/i);
        fireEvent.change(inputEl, {
            target: { value: 'test value' }
        });
        expect(inputEl.value).toBe('')
    });

    test('button should be disabled initially', () => {
        const buttonEl = screen.getByRole('button', { name: /click/i });
        expect(buttonEl).toBeDisabled();
    });

    test('button should be enabled while input entered', () => {
        const buttonEl = screen.getByRole('button', { name: /click/i });
        const inputEl = screen.getByTestId(/input-element/i);
        fireEvent.change(inputEl, {
            target: { value: '1' }
        }); 
        expect(buttonEl).toBeEnabled();
    }); 
});        