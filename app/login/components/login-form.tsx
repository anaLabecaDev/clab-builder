'use client';

import { Button, Input } from '@nextui-org/react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { userAuthSchema, UserAuthSchemaType } from '@/schemas/user-auth';

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isLoading, isValid },
  } = useForm<UserAuthSchemaType>({ mode: 'onChange', resolver: zodResolver(userAuthSchema) });

  const onSubmit = handleSubmit((data) => {
    console.log('data', data);
    reset();
  });

  return (
    <form onSubmit={onSubmit} className='flex flex-col gap-4'>
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

      <Button type='submit' isDisabled={!isValid} isLoading={isLoading}>
        {isLoading ? 'Submitting...' : 'Submit'}
      </Button>
    </form>
  );
}
