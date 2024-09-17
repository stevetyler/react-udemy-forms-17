/**
 * @jest-environment jsdom
 */
import { render, screen, fireEvent } from '@testing-library/react';
import Signup from '../components/Signup';
import React from 'react';

describe('Signup Component', () => {
  test('renders the signup form', () => {
    render(<Signup />);
    expect(screen.getByText(/Welcome on board!/i)).toBeInTheDocument();
  }); 

  test('shows error message when passwords do not match', () => {
    render(<Signup />);
    
    fireEvent.change(screen.getByLabelText(/Password/i), { target: { value: 'password123' } });
    fireEvent.change(screen.getByLabelText(/Confirm Password/i), { target: { value: 'password321' } });
    fireEvent.submit(screen.getByRole('button', { name: /Sign up/i }));

    expect(screen.getByText(/Passwords do not match/i)).toBeInTheDocument();
  });

  test('submits the form when passwords match', () => {
    render(<Signup />);
    
    fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: 'test@example.com' } });
    fireEvent.change(screen.getByLabelText(/Password/i), { target: { value: 'password123' } });
    fireEvent.change(screen.getByLabelText(/Confirm Password/i), { target: { value: 'password123' } });
    fireEvent.change(screen.getByLabelText(/First Name/i), { target: { value: 'John' } });
    fireEvent.change(screen.getByLabelText(/Last Name/i), { target: { value: 'Doe' } });
    fireEvent.click(screen.getByLabelText(/I agree to the terms and conditions/i));
    fireEvent.submit(screen.getByRole('button', { name: /Sign up/i }));

    expect(screen.getByText(/Thank you for signing up!/i)).toBeInTheDocument();
  });
});