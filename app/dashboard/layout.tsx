import { Link } from '@nextui-org/react';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <aside
        id='default-sidebar'
        className='fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0'
        aria-label='Sidebar'
      >
        <div className='h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800'>
          <ul className='space-y-2 font-medium'>
            <li>
              <Link href='#'>Default Link</Link>
            </li>
          </ul>
        </div>
      </aside>
      <div className='p-4 sm:ml-64'>{children}</div>
    </div>
  );
}
