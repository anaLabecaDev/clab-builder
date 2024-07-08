import React from 'react';
import {
  Link,
  Button,
  Navbar,
  NavbarContent,
  NavbarItem,
} from '@nextui-org/react';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col'>
      <Navbar>
        <NavbarContent justify='end'>
          <NavbarItem>
            <Button href='/login' as={Link} color='primary' variant='solid'>
              Log In
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
      <h1>Home</h1>
    </main>
  );
}
