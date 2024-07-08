'use client';

import { Button, Input } from '@nextui-org/react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { userAuthSchema, UserAuthSchemaType } from '@/schemas/user-auth';
import { login, signUp } from '../actions';

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isLoading, isValid },
  } = useForm<UserAuthSchemaType>({
    mode: 'onChange',
    resolver: zodResolver(userAuthSchema),
  });

  const onSignUpSubmit = handleSubmit(async (data) => {
    const response = await signUp(data);

    if (response?.error) {
      alert(response.error);
      console.error(response.error);
    }
  });

  const onLoginSubmit = handleSubmit(async (data) => {
    const response = await login(data);
    console.log('data', data);
    if (response?.error) {
      alert(response.error);
      console.error(response.error);
    }
  });

  return (
    <form className='flex flex-col gap-4'>
      <Input
        {...register('email')}
        type='email'
        label='Email'
        labelPlacement='outside'
        placeholder='you@example.com'
        required
        isInvalid={!!errors.email}
        errorMessage={errors.email?.message}
      />
      <Input
        {...register('password')}
        type='password'
        label='Password'
        labelPlacement='outside'
        placeholder='Enter your password'
        required
        isInvalid={!!errors.password}
        errorMessage={errors.password?.message}
      />

      <Button
        color='primary'
        type='submit'
        onClick={onLoginSubmit}
        isDisabled={!isValid}
        isLoading={isLoading}
      >
        {isLoading ? 'Log in...' : 'Log in'}
      </Button>

      <Button type='submit' onClick={onSignUpSubmit} isDisabled={!isValid} isLoading={isLoading}>
        {isLoading ? 'Sign up...' : 'Sign up'}
      </Button>
    </form>
  );
}
