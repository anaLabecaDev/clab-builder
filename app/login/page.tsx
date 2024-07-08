import { Card, CardBody } from '@nextui-org/card';
import LoginForm from './components/login-form';

export default function LoginPage() {
  return (
    <main className='flex items-center justify-center md:h-screen'>
      <Card className='max-w-[870px] flex-1'>
        <CardBody className='p-0'>
          <div className='grid grid-cols-12 gap-4'>
            <div className='relative col-span-6 bg-green-200'></div>

            <div className='p-6 col-span-6 flex flex-col justify-center'>
              <div className='my-8 mx-4'>
                <h1 className='text-2xl text-center'>Welcome back</h1>
                <p className='text-sm text-center mt-4 text-default-500'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor.
                </p>
              </div>
              <LoginForm/>
            </div>
          </div>
        </CardBody>
      </Card>
    </main>
  );
}
