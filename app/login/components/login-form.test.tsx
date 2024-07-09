import { act, fireEvent, render, screen } from '@testing-library/react';
import LoginForm from './login-form';

describe('<LoginForm/>', () => {
    afterEach(jest.clearAllMocks);

    it('Form validation: displays error when email input is not in the expected format', async () => {
        render(<LoginForm />);
      
        await act(async () => {
          fireEvent.input(screen.getByLabelText('Email'), {
            target: {
              value: 'test',
            },
          });
        });
      
        expect(screen.getByLabelText('Email')).toHaveValue('test');
        expect(
          await screen.getByText('Please provide a valid email'),
        ).toBeInTheDocument();
        expect(screen.getByText('Log in')).toBeDisabled();
        expect(screen.getByText('Sign up')).toBeDisabled()
    });

    it('Form validation: displays error when password input is not in the expected format', async () => {
        render(<LoginForm />);
      
        await act(async () => {
          fireEvent.input(screen.getByLabelText('Password'), {
            target: {
              value: 'test',
            },
          });
        });
      
        expect(screen.getByLabelText('Password')).toHaveValue('test');
        expect(
          await screen.getByText('Password must be at least 8 characters long'),
        ).toBeInTheDocument();
        expect(screen.getByText('Log in')).toBeDisabled();
        expect(screen.getByText('Sign up')).toBeDisabled();
    });
});

