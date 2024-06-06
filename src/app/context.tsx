'use client';

import { ReactNode } from 'react';
import { SessionProvider } from 'next-auth/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import NextTopLoader from 'nextjs-toploader';
import { Toaster } from '@/components/ui/toaster';

export default function Context({
    children,
    session,
}: {
    children: ReactNode;
    session: any;
}) {
    return (
        <SessionProvider>
            <NextThemesProvider attribute="class" forcedTheme="light">
                <NextTopLoader
                    color="#FF0000"
                    showSpinner={false}
                    zIndex={999}
                    easing="ease"
                    speed={100}
                    shadow="0 0 10px #2299DD,0 0 5px #2299DD"
                    initialPosition={0.08}
                    crawlSpeed={200}
                    height={3}
                    crawl={true}
                />
                {children}
                <Toaster />
            </NextThemesProvider>
        </SessionProvider>
    );
}
