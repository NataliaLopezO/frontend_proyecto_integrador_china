import React from 'react';
import { render, screen, userEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Historia } from '../pages/Historia/historia';

describe('Historia', () => {
  it('should render historia information correctly', () => {
    render(
      <MemoryRouter>
        <Historia />
      </MemoryRouter>
    );

    const historiaTitle = screen.getByText('Historia');
    expect(historiaTitle).toBeInTheDocument();

    const imagenXia = screen.getByAltText('Dinastía Xia');
    expect(imagenXia).toBeInTheDocument();

    const imagenShang = screen.getByAltText('Dinastía Shang');
    expect(imagenShang).toBeInTheDocument();

    const imagenZhou = screen.getByAltText('Dinastía Zhou');
    expect(imagenZhou).toBeInTheDocument();

    const imagenQin = screen.getByAltText('Dinastías Qin y Han');
    expect(imagenQin).toBeInTheDocument();

    const botonNext = screen.getByText('Dinastias');
    expect(botonNext).toBeInTheDocument();
  });
});
