import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Creencias } from '../pages/Cultura/creencias';

describe('Creencias', () => {
  it('should render beliefs information correctly', () => {
    render(
      <MemoryRouter>
        <Creencias />
      </MemoryRouter>
    );

    const beliefsTitle = screen.getByText('Creencias');
    expect(beliefsTitle).toBeInTheDocument();

    const taoismText = screen.getByText('TAOISMO');
    expect(taoismText).toBeInTheDocument();

    const confucianismText = screen.getByText('CONFUCIANISMO');
    expect(confucianismText).toBeInTheDocument();

    const buddhismText = screen.getByText('BUDISMO');
    expect(buddhismText).toBeInTheDocument();

    const fengShuiText = screen.getByText('FENG SHUI');
    expect(fengShuiText).toBeInTheDocument();

    const botonBack = screen.getByText('Vestimenta');
    expect(botonBack).toBeInTheDocument();

    const botonNext = screen.getByText('Cultura');
    expect(botonNext).toBeInTheDocument();
  });

  it('should navigate to the next page when next button is clicked', () => {
    render(
      <MemoryRouter>
        <Creencias />
      </MemoryRouter>
    );

    // Encontrar el botón de siguiente
    const nextButton = screen.getByTestId('next-button');

    // Simular el clic en el botón de siguiente
    fireEvent.click(nextButton);

    // Verificar que se haya navegado a la siguiente página (por ejemplo, la página de "Cultura")
    const culturaPageTitle = screen.getByText('Cultura');
    expect(culturaPageTitle).toBeInTheDocument();
  });

});
