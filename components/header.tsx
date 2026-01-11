import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/theme-toggle';

export function Header() {
  return (
    <header className='border-b'>
      <div className='container mx-auto flex h-16 items-center justify-between px-4'>
        <div className='flex items-center'>
          <h1 className='text-xl font-bold'>Link Shortener</h1>
        </div>

        <div className='flex items-center gap-4'>
          <ThemeToggle />
          <SignedOut>
            <SignInButton mode='modal'>
              <Button
                variant='ghost'
                className='dark:hover:bg-accent dark:hover:text-accent-foreground'>
                Sign In
              </Button>
            </SignInButton>
            <SignUpButton mode='modal'>
              <Button>Sign Up</Button>
            </SignUpButton>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>
    </header>
  );
}
