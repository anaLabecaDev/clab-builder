'use client';

import { type ReactNode } from 'react';
import { NextUIProvider } from '@nextui-org/react';
import { useRouter } from 'next/navigation';

export function Providers({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const router = useRouter();

  return (
    <NextUIProvider className={className} navigate={router.push}>
      {children}
    </NextUIProvider>
  );
}
