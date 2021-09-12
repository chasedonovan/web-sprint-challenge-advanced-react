import React from "react";
import MutationObserver from 'mutationobserver-shim';
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("renders without errors", () => {
  render(<CheckoutForm/>)
  const header = screen.getByText(/checkout form/i)
  expect(header).toBeInTheDocument()
});

test("shows success message on submit with form details", () => {
    render(<CheckoutForm/>)

    const firstName = screen.queryByLabelText(/first name:/i)
    const lastName = screen.queryByLabelText(/last name:/i)
    const address = screen.queryByLabelText(/address:/i)
    const city = screen.queryByLabelText(/city:/i)
    const state = screen.queryByLabelText(/state:/i)
    const zip = screen.queryByLabelText(/zip:/i)
    const checkout = screen.getByRole('button')
    
    userEvent.type(firstName, 'Chase')
    userEvent.type(lastName, 'Donovan')
    userEvent.type(address, '1234 Street St.')
    userEvent.type(city, 'Las Vegas')
    userEvent.type(state, 'NV')
    userEvent.type(zip, '89120')
    userEvent.click(checkout)

    const successMessage = screen.getByTestId('successMessage')
    expect(successMessage).toBeInTheDocument()
});