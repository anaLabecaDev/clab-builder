'use client';

import { type ReactNode } from 'react';
import { NextUIProvider } from '@nextui-org/react';

export function Providers({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <NextUIProvider className={className}>
      {children}
    </NextUIProvider>
  );
}
