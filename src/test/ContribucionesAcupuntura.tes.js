import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Acupuntura } from '../pages/Contribuciones/acupuntura';

describe('Acupuntura', () => {
  it('should render acupuncture information correctly', () => {
    render(
      <MemoryRouter>
        <Acupuntura />
      </MemoryRouter>
    );

    // Verificar que se renderice el título de la página
    const pageTitle = screen.getByText('Acupuntura');
    expect(pageTitle).toBeInTheDocument();

    // Verificar que se renderice la información de la acupuntura
    const origenTitle = screen.getByText('Origen y desarrollo:');
    expect(origenTitle).toBeInTheDocument();

    const principiosTitle = screen.getByText('Principios de la acupuntura:');
    expect(principiosTitle).toBeInTheDocument();

    const tecnicasTitle = screen.getByText('Técnicas y aplicación:');
    expect(tecnicasTitle).toBeInTheDocument();

    const efectosTitle = screen.getByText('Efectos y aplicaciones:');
    expect(efectosTitle).toBeInTheDocument();

    const investigacionTitle = screen.getByText('Investigación y reconocimiento:');
    expect(investigacionTitle).toBeInTheDocument();
  });

  it('should navigate to the previous page when back button is clicked', () => {
    render(
      <MemoryRouter initialEntries={['/acupuntura']}>
        <Acupuntura />
      </MemoryRouter>
    );

    // Encontrar el botón de regreso
    const backButton = screen.getByTestId('back-button');

    // Simular el clic en el botón de regreso
    fireEvent.click(backButton);

    // Verificar que se haya navegado a la página anterior (por ejemplo, la página de "Aportes")
    const aportesPageTitle = screen.getByText('Aportes');
    expect(aportesPageTitle).toBeInTheDocument();
  });
});
