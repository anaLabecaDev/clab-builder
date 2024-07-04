import React from 'react';
import { Link, Button } from '@nextui-org/react';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col'>
      <header className='bg-slate-900'>
        <p className='text-slate-50 p-6'>Home</p>
        <Button
          href='/login'
          as={Link}
          color='primary'
          variant='solid'
        >
          Log In
        </Button>
      </header>
    </main>
  );
}
