'use client';

import { ClerkProvider } from '@clerk/nextjs';
import { shadcn } from '@clerk/themes';
import { ReactNode } from 'react';

export function ClerkProviderWrapper({ children }: { children: ReactNode }) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: shadcn,
      }}>
      {children}
    </ClerkProvider>
  );
}
