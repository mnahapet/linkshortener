import Link from 'next/link';
import { SignUpButton, SignedIn, SignedOut } from '@clerk/nextjs';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { Link2, BarChart3, Shield, Zap } from 'lucide-react';

export default function Home() {
  return (
    <div className='min-h-screen bg-gradient-to-b from-zinc-50 to-white dark:from-zinc-950 dark:to-black'>
      {/* Hero Section */}
      <section className='container mx-auto px-4 py-20 md:py-32'>
        <div className='mx-auto max-w-4xl text-center'>
          <h1 className='mb-6 text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl md:text-6xl'>
            Shorten Your Links,
            <br />
            <span className='bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>
              Amplify Your Reach
            </span>
          </h1>
          <p className='mb-8 text-lg text-zinc-600 dark:text-zinc-400 md:text-xl'>
            Create short, memorable links in seconds. Track performance,
            customize URLs, and share with confidence.
          </p>
          <div className='flex flex-col items-center justify-center gap-4 sm:flex-row'>
            <SignedOut>
              <SignUpButton mode='modal'>
                <Button size='lg' className='w-full sm:w-auto'>
                  Get Started Free
                </Button>
              </SignUpButton>
            </SignedOut>
            <SignedIn>
              <Link href='/dashboard'>
                <Button size='lg' className='w-full sm:w-auto'>
                  Go to Dashboard
                </Button>
              </Link>
            </SignedIn>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id='features' className='container mx-auto px-4 py-20'>
        <div className='mb-12 text-center'>
          <h2 className='mb-4 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 md:text-4xl'>
            Powerful Features
          </h2>
          <p className='text-lg text-zinc-600 dark:text-zinc-400'>
            Everything you need to manage and optimize your links
          </p>
        </div>

        <div className='mx-auto grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-4'>
          <Card className='transition-shadow hover:shadow-lg'>
            <CardHeader>
              <div className='mb-2 flex size-12 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900/20'>
                <Link2 className='size-6 text-blue-600 dark:text-blue-400' />
              </div>
              <CardTitle>Quick Shortening</CardTitle>
              <CardDescription>
                Create short links instantly with our fast and reliable service
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className='transition-shadow hover:shadow-lg'>
            <CardHeader>
              <div className='mb-2 flex size-12 items-center justify-center rounded-lg bg-purple-100 dark:bg-purple-900/20'>
                <BarChart3 className='size-6 text-purple-600 dark:text-purple-400' />
              </div>
              <CardTitle>Analytics & Insights</CardTitle>
              <CardDescription>
                Track clicks, locations, and performance metrics in real-time
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className='transition-shadow hover:shadow-lg'>
            <CardHeader>
              <div className='mb-2 flex size-12 items-center justify-center rounded-lg bg-green-100 dark:bg-green-900/20'>
                <Shield className='size-6 text-green-600 dark:text-green-400' />
              </div>
              <CardTitle>Secure & Reliable</CardTitle>
              <CardDescription>
                Enterprise-grade security with 99.9% uptime guarantee
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className='transition-shadow hover:shadow-lg'>
            <CardHeader>
              <div className='mb-2 flex size-12 items-center justify-center rounded-lg bg-orange-100 dark:bg-orange-900/20'>
                <Zap className='size-6 text-orange-600 dark:text-orange-400' />
              </div>
              <CardTitle>Lightning Fast</CardTitle>
              <CardDescription>
                Blazing fast redirects and link resolution worldwide
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className='container mx-auto px-4 py-20'>
        <Card className='mx-auto max-w-4xl border-2 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20'>
          <CardContent className='p-8 md:p-12'>
            <div className='text-center'>
              <h2 className='mb-4 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50'>
                Ready to Get Started?
              </h2>
              <p className='mb-6 text-lg text-zinc-600 dark:text-zinc-400'>
                Join thousands of users who trust our link shortening service
              </p>
              <SignedOut>
                <SignUpButton mode='modal'>
                  <Button size='lg'>Create Your Free Account</Button>
                </SignUpButton>
              </SignedOut>
              <SignedIn>
                <Link href='/dashboard'>
                  <Button size='lg'>Start Shortening Links</Button>
                </Link>
              </SignedIn>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
