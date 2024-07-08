'use client';

import { Button, Input } from '@nextui-org/react';
import { useForm } from 'react-hook-form';

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isLoading },
  } = useForm({mode: 'onChange'});

  const onSubmit = handleSubmit(data => {
    console.log("data", data);
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
      />
      <Input
        {...register('password')}
        type='password'
        label='Password'
        labelPlacement='outside'
        placeholder='Enter your password'
        required
      />



      <Button type='submit' isDisabled={isLoading}>
        {isLoading ? 'Submitting...' : 'Submit'}
      </Button>
    </form>
  );
}
