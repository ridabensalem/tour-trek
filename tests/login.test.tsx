import { render, fireEvent, waitFor } from '@testing-library/react';
import { signIn } from 'next-auth/react';
import LoginModal from '../app/components/modals/LoginModal';

jest.mock('next-auth/react', () => ({
  signIn: jest.fn(),
}));



describe('LoginModal', () => {
  it('allows login when email and password are valid', async () => {
    const { getByLabelText, getByText } = render(<LoginModal />);

    fireEvent.change(getByLabelText('Email'), { target: { value: 'test@example.com' } });
    fireEvent.change(getByLabelText('Password'), { target: { value: 'password123' } });
    fireEvent.click(getByText('Login'));

    expect(signIn);
  });

  it('prevents login when email is invalid', async () => {
    const { getByLabelText, getByText } = render(<LoginModal />);

    fireEvent.change(getByLabelText('Email'), { target: { value: 'invalid email' } });
    fireEvent.change(getByLabelText('Password'), { target: { value: 'password123' } });
    fireEvent.click(getByText('Login'));

  });

  it('prevents login when password is invalid', async () => {
    const { getByLabelText, getByText } = render(<LoginModal />);

    fireEvent.change(getByLabelText('Email'), { target: { value: 'test@example.com' } });
    fireEvent.change(getByLabelText('Password'), { target: { value: '' } });
    fireEvent.click(getByText('Login'));

    expect(signIn);
  });
});

