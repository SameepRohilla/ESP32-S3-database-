import { prisma } from '@/lib/prisma';

export async function GET(request: Request) {
    return new Response('John Doe');
}