import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ClerkProvider } from '@clerk/nextjs';
import { ThemeProvider } from '@/components/Providers/themeProvider';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'V',
  description:
    'V is a social media platform for developers. It is built with Next.js, Prisma, Cloudinary, and tailwindcss. It uses Clerk for authentication. It is a fullstack project. It is a clone of Twitter.',
  authors: [{ name: 'a7mdmo74', url: 'https://www.linkedin.com/in/a7mdmo74/' }],
  keywords: [
    'V',
    'Twitter',
    'Next.js',
    'Prisma',
    'Cloudinary',
    'tailwindcss',
    'Clerk',
    'social media',
    'fullstack',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  );
}
