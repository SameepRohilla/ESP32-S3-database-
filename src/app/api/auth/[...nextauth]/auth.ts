/* eslint-disable import/no-anonymous-default-export */
import { AuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import HeaderChecker from '@/lib/headerChecker';
import { headers } from 'next/headers';
import { prisma } from '@/lib/prisma';

export const authOptions: AuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID ?? '',
            clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? '',
            authorization: {
                params: {
                    prompt: 'consent',
                    access_type: 'offline',
                    response_type: 'code',
                },
            },
        }),
    ],
    debug: false,
    secret: process.env.NEXTAUTH_SECRET ?? 'hi',
    jwt: {
        secret: process.env.NEXTAUTH_SECRET ?? 'hi',
    },
    session: {
        maxAge: 30 * 24 * 60 * 60, // 30 days
    },
    cookies: {
        sessionToken: {
            name: `SESSION_ID`,
            options: {
                httpOnly: true,
                sameSite: 'lax',
                path: '/',
                secure: true,
            },
        },
        csrfToken: {
            name: `CSRF_TOKEN`,
            options: {
                httpOnly: true,
                sameSite: 'lax',
                path: '/',
                secure: true,
            },
        },
        callbackUrl: {
            name: `CALLBACK_URL`,
            options: {
                httpOnly: true,
                sameSite: 'lax',
                path: '/',
                secure: true,
            },
        },
    },
    pages: {
        signIn: '/app',
        error: '/',
        signOut: '/',
    },
};
