import React from 'react';
import {
  Link,
  Button,
  Navbar,
  NavbarContent,
  NavbarItem,
  NavbarBrand,
} from '@nextui-org/react';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col'>
      <Navbar>
        <NavbarBrand>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            x='0px'
            y='0px'
            width='40'
            height='40'
            viewBox='0 0 48 48'
          >
            <linearGradient
              id='SVGID_1__vnoiNk8kisRM_gr1'
              x1='40.26'
              x2='7.74'
              y1='7.74'
              y2='40.26'
              gradientUnits='userSpaceOnUse'
            >
              <stop offset='0' stop-color='#07584e'></stop>
              <stop offset='.033' stop-color='#356e65'></stop>
              <stop offset='.197' stop-color='#57857d'></stop>
              <stop offset='.362' stop-color='#789d95'></stop>
              <stop offset='.525' stop-color='#99b4af'></stop>
              <stop offset='.687' stop-color='#bacdc9'></stop>
              <stop offset='.846' stop-color='#fbfffd'></stop>
              <stop offset='1' stop-color='#fff'></stop>
            </linearGradient>
            <path
              fill='url(#SVGID_1__vnoiNk8kisRM_gr1)'
              d='M38.265,40.5H9.735c-2.339,0-4.235-1.896-4.235-4.235V11.735C5.5,9.396,7.396,7.5,9.735,7.5h28.529	c2.339,0,4.235,1.896,4.235,4.235v24.529C42.5,38.604,40.604,40.5,38.265,40.5z'
            ></path>
            <path
              fill='none'
              stroke='#07584E'
              stroke-linecap='round'
              stroke-linejoin='round'
              stroke-miterlimit='10'
              stroke-width='3'
              d='M42.5,23.149v13.116c0,2.339-1.896,4.235-4.235,4.235H9.735'
            ></path>
            <path
              fill='none'
              stroke='#07584E'
              stroke-linecap='round'
              stroke-linejoin='round'
              stroke-miterlimit='10'
              stroke-width='3'
              d='M5.5,27.362V11.735C5.5,9.396,7.396,7.5,9.735,7.5h28.529c2.339,0,4.235,1.896,4.235,4.235v4.924'
            ></path>
            <circle
              cx='18.763'
              cy='16.5'
              r='3'
              fill='none'
              stroke='#07584E'
              stroke-miterlimit='10'
              stroke-width='3'
            ></circle>
            <path
              fill='none'
              stroke='#07584E'
              stroke-linecap='round'
              stroke-linejoin='round'
              stroke-miterlimit='10'
              stroke-width='3'
              d='M27.101,29.18l2.206-2.623c0.962-1.143,2.722-1.143,3.683,0l8.798,10.46'
            ></path>
            <path
              fill='none'
              stroke='#07584E'
              stroke-linecap='round'
              stroke-linejoin='round'
              stroke-miterlimit='10'
              stroke-width='3'
              d='M26.118,36.221l-8.128-9.663c-0.962-1.143-2.722-1.143-3.683,0L6.3,35.034C4.349,37.101,5.814,40.5,8.656,40.5	H17.5'
            ></path>
          </svg>
        </NavbarBrand>
        <NavbarContent justify='end'>
          <NavbarItem>
            <Button href='/login' as={Link} color='primary' variant='solid'>
              Log In
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
      <section className='mx-auto max-w-2xl py-48 sm:py-32 lg:py-56'>
        <div className='text-center'>
          <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl'>
            Data to enrich your online business
          </h1>
          <p className='mt-6 text-lg leading-8 text-gray-600'>
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
            fugiat aliqua.
          </p>
        </div>
      </section>
      <footer className='mt-auto p-4 bg-stone-800 text-center'>
        <p className='text-white'>
          &copy; 2023 Your Company. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
