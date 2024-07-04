import { Button } from '@nextui-org/button';
import { Card, CardHeader, CardBody, CardFooter } from '@nextui-org/card';
import { Input } from '@nextui-org/react';
import { Checkbox } from '@nextui-org/checkbox';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col'>
      <header className='bg-slate-900'>
        <p className='text-slate-50 p-6'>Home</p>
      </header>

      <div className='grow flex items-center justify-center'>
        <Card className='max-w-[870px] flex-1'>
          <CardBody className='p-0'>
            <div className='grid grid-cols-12 gap-4'>
              <div className='relative col-span-6 bg-green-200'></div>

              <div className='p-6 col-span-6 flex flex-col justify-center'>
                <div className='my-8 mx-4'>
                  <h1 className='text-2xl text-center'>Welcome back</h1>
                  <p className='text-sm text-center mt-4 text-default-500'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor.{' '}
                  </p>
                </div>

                <form className='flex flex-col gap-4'>
                  <Input
                    type='email'
                    label='Email'
                    placeholder='you@example.com'
                    labelPlacement='outside'
                  />
                  <Input
                    type='password'
                    label='Password'
                    placeholder='Enter your password'
                    labelPlacement='outside'
                  />

                  <Checkbox defaultSelected size='sm'>
                    Remember me
                  </Checkbox>

                  <Button color='primary' type='submit'>
                    Sign In
                  </Button>
                </form>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    </main>
  );
}
