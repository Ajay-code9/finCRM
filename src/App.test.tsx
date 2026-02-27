import { describe, it, expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import App from './App';
import { RequestDemoContext } from './context/RequestDemoContext';

function renderWithProviders(initialEntries: string[] = ['/']) {
  const contextValue = {
    isDemoDialogOpen: false,
    setIsDemoDialogOpen: () => {},
  };

  return render(
    <RequestDemoContext.Provider value={contextValue}>
      <MemoryRouter initialEntries={initialEntries}>
        <App />
      </MemoryRouter>
    </RequestDemoContext.Provider>
  );
}

describe('App routing', () => {
  it('renders home route by default', () => {
    renderWithProviders(['/']);
    expect(
      screen.getByText(/Specialized CRM & Back-Office for/i)
    ).toBeInTheDocument();
  });

  it('renders pricing page when navigating to /pricing', () => {
    renderWithProviders(['/pricing']);
    expect(screen.getByText(/Pricing/i)).toBeInTheDocument();
  });
});

