import React from 'react';
import { render, screen, fireEvent, waitFor, act } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Memo_card_tablero } from '../components/memoCard-tablero';

describe('Memo_card_tablero', () => {
    test('renders component', () => {
        render(
            <MemoryRouter>
                <Memo_card_tablero />
            </MemoryRouter>
        );

        expect(screen.queryByText((content, element) => {
            return element.textContent === 'Tiempo restante:' ||
                element.textContent.startsWith('Tiempo restante:');
        })).toBeInTheDocument();

        expect(screen.queryByText('Puntos:')?.toBeInTheDocument());
    });

    test('flips two cards and checks for a match', () => {
        render(
            <MemoryRouter>
                <Memo_card_tablero />
            </MemoryRouter>
        );

        const cards = screen.getAllByTestId('memo-card');

        // Select the first card
        fireEvent.click(cards[0]);

        // Select the second card
        fireEvent.click(cards[1]);

        // Wait for the cards to flip and check for a match
        waitFor(() => {
            expect(cards[0]).toHaveClass('flipped');
            expect(cards[1]).toHaveClass('flipped');

            // Verify that the cards form a match
            expect(cards[0]).toHaveClass('matched');
            expect(cards[1]).toHaveClass('matched');
        });
    });


});
