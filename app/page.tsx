import { Shiba } from './components/shiba';
import SiteNavbar from './components/navbar';

export default function Home() {
  return (
    <>
      <SiteNavbar />
      <main className='flex min-h-screen flex-col items-center justify-between'>
        <Shiba />
      </main>
    </>
  );
}
