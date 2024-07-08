'use client';

import {  Input } from '@nextui-org/react';
import { SubmitButton } from './submit-button';

export default function LoginForm() {
  return (
    <form className='flex flex-col gap-4'>
      <Input
        type='email'
        label='Email'
        placeholder='you@example.com'
        labelPlacement='outside'
        required
      />
      <Input
        type='password'
        label='Password'
        placeholder='Enter your password'
        labelPlacement='outside'
        required
      />

      <SubmitButton color='primary' />
    </form>
  );
}
