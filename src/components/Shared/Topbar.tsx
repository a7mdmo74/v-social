import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
  UserButton,
} from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/button';
import { LogInIcon } from 'lucide-react';

function Topbar() {
  return (
    <nav className="topbar">
      <Link href="/" className="flex items-center gap-4">
        <Image
          src="/logo.png"
          alt="logo"
          width={52}
          height={52}
          priority
          className="w-auto"
        />
      </Link>

      <div className="flex items-center gap-1">
        <div className="block md:hidden mr-4">
          <SignedOut>
            <SignInButton mode="modal">
              <Button>
                <LogInIcon size={24} />
              </Button>
            </SignInButton>
          </SignedOut>
        </div>
        <UserButton />
      </div>
    </nav>
  );
}

export default Topbar;
