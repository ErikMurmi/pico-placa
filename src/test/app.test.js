import React from 'react';
import { render, screen, waitFor,act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from '../App'

// testing if company form is working
describe('Prediction test', () => {
  it('Success test', async () => {
    const handleSubmit = jest.fn();

    const formComponent = render(<App onSubmit={handleSubmit} />);

    const plate = formComponent.getByPlaceholderText('XXX-XXXX');
    const date = formComponent.getByPlaceholderText('YYYY/MM/DD');
    const time = formComponent.getByPlaceholderText('00:00');
    const submitButton = formComponent.getAllByText('Find out');
    userEvent.type(plate, 'PBO-1302');
    userEvent.type(date, '2022/07/18');
    userEvent.type(time, '08:00');
    act(() => {
    userEvent.click(submitButton);});
    await waitFor(() =>
      expect(handleSubmit).toHaveBeenCalledWith({
        plate: 'PBO-1302',
        date: '2022/07/18',
        time: '08:00',
      }),
    );
  });
  /*
  it('Failure test', async () => {
    const handleSubmit = jest.fn();

    render(<CompanyForm onSubmit={handleSubmit} />);

    const submitButton = screen.getByTestId('companyFormSubmitButton');
    const nameError = screen.getByTestId('nameError');
    const emailError = screen.queryByTestId('emailError');
    const phoneNumberError = screen.queryByTestId('phoneNumberError');
    const agreementError = screen.queryByTestId('agreementError');

    userEvent.click(submitButton);

    // all inputs are empty
    // it means every input and checkbox will show error message
    await waitFor(() => {
      expect(emailError.textContent).toMatch(
        formTestConstants.errorMessageForEmail,
      );
      expect(nameError.textContent).toMatch(
        formTestConstants.errorMessageForName,
      );
      expect(phoneNumberError.textContent).toMatch(
        formTestConstants.errorMessageForPhone,
      );
      expect(agreementError.textContent).toMatch(
        formTestConstants.errorMessageForAgreement,
      );
    });
  });*/
});