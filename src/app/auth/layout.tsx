import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'V | Auth',
  description:
    'V is a social media website like twitter. It is built with Next.js, Prisma, Cloudinary, and tailwindcss.',
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen w-full flex items-center justify-center">
      {children}
    </div>
  );
}
