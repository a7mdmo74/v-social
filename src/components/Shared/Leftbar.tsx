'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import {
  SignInButton,
  SignOutButton,
  SignedIn,
  SignedOut,
  useAuth,
} from '@clerk/nextjs';
import { sidebarLinks } from '@/lib/constants';
import { LogInIcon, LogOutIcon } from 'lucide-react';

const Leftbar = () => {
  const router = useRouter();
  const pathname = usePathname();

  const { userId } = useAuth();

  return (
    <section className="custom-scrollbar leftsidebar">
      <div className="flex w-full flex-1 flex-col gap-6 px-6">
        {sidebarLinks.map((link) => {
          const isActive =
            (pathname.includes(link.route) && link.route.length > 1) ||
            pathname === link.route;
          return (
            <Link
              href={link.route}
              key={link.label}
              className={`leftsidebar_link ${isActive && 'bg-slate-500 '}`}
            >
              <Image
                src={link.imgURL}
                alt={link.label}
                width={24}
                height={24}
              />

              <p className="text-light-1 max-lg:hidden">{link.label}</p>
            </Link>
          );
        })}
      </div>

      <div className="mt-10 px-6">
        <SignedIn>
          <SignOutButton redirectUrl="/auth/sign-in">
            <div className="flex cursor-pointer gap-4 p-4">
              <LogOutIcon size={24} />
              <p className="text-light-2 max-lg:hidden">Logout</p>
            </div>
          </SignOutButton>
        </SignedIn>
        <SignedOut>
          <SignInButton mode="modal">
            <div className="flex cursor-pointer gap-4 p-4">
              <LogInIcon size={24} />
              <p className="text-light-2 max-lg:hidden">Login</p>
            </div>
          </SignInButton>
        </SignedOut>
      </div>
    </section>
  );
};

export default Leftbar;
