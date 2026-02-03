'use client';

import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Wallet,
  TrendingUp,
  Users,
  Target,
  DollarSign,
  ArrowRight,
  Zap,
  Shield,
  BarChart3
} from 'lucide-react';
import { useAuthStore } from '@/store/authStore';

export default function Home() {
  const router = useRouter();
  const { isAuthenticated, isHydrated } = useAuthStore();

  const handleGetStarted = () => {
    if (isHydrated && isAuthenticated) {
      router.push('/dashboard');
    } else {
      router.push('/signup');
    }
  };

  const handleSignIn = () => {
    router.push('/login');
  };

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">
      {/* Header */}
      <header className="border-b border-zinc-200 dark:border-zinc-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Wallet className="h-7 w-7 text-blue-600" />
            <span className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">Financer</span>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="ghost" onClick={handleSignIn}>Sign In</Button>
            <Button onClick={handleGetStarted} className="bg-blue-600 hover:bg-blue-700">
              Get Started
            </Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-16">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold text-zinc-900 dark:text-zinc-50 leading-tight mb-6">
            Money management that actually works
          </h1>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-8 leading-relaxed">
            Track your spending, split bills with friends, and hit your savings goals. 
            No spreadsheets. No complexity. Just smart finance management.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" onClick={handleGetStarted} className="bg-blue-600 hover:bg-blue-700 h-12 px-8">
              Start for Free
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" onClick={handleSignIn} className="h-12 px-8">
              View Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-6xl mx-auto px-6 py-16 border-y border-zinc-200 dark:border-zinc-800">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">100%</div>
            <div className="text-zinc-600 dark:text-zinc-400">Free forever</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">Real-time</div>
            <div className="text-zinc-600 dark:text-zinc-400">Transaction tracking</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">Secure</div>
            <div className="text-zinc-600 dark:text-zinc-400">Bank-level encryption</div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50 mb-12">Built for your needs</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-950 flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-2">Track every dollar</h3>
                <p className="text-zinc-600 dark:text-zinc-400">
                  Log income and expenses in seconds. Categorize automatically and see where your money goes.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-green-100 dark:bg-green-950 flex items-center justify-center">
                <Users className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-2">Split bills instantly</h3>
                <p className="text-zinc-600 dark:text-zinc-400">
                  Add friends, create groups, and divide expenses fairly. No awkward conversations needed.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-purple-100 dark:bg-purple-950 flex items-center justify-center">
                <Target className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-2">Reach your goals</h3>
                <p className="text-zinc-600 dark:text-zinc-400">
                  Set savings targets and track progress. Whether it's a vacation or emergency fund, we've got you.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-orange-100 dark:bg-orange-950 flex items-center justify-center">
                <Zap className="h-6 w-6 text-orange-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-2">Smart reminders</h3>
                <p className="text-zinc-600 dark:text-zinc-400">
                  Never miss a payment. Get notified about upcoming bills and pending friend requests.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-indigo-100 dark:bg-indigo-950 flex items-center justify-center">
                <BarChart3 className="h-6 w-6 text-indigo-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-2">Visual insights</h3>
                <p className="text-zinc-600 dark:text-zinc-400">
                  See your spending patterns with charts and reports. Make informed financial decisions.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-teal-100 dark:bg-teal-950 flex items-center justify-center">
                <Shield className="h-6 w-6 text-teal-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-2">Privacy first</h3>
                <p className="text-zinc-600 dark:text-zinc-400">
                  Your data belongs to you. We use industry-standard encryption to keep it safe.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="bg-zinc-900 dark:bg-zinc-800 rounded-2xl p-12 md:p-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Start managing your money better
          </h2>
          <p className="text-zinc-300 text-lg mb-8 max-w-2xl mx-auto">
            Join Financer today. No credit card required, no hidden fees, just powerful finance management.
          </p>
          <Button size="lg" onClick={handleGetStarted} className="bg-blue-600 hover:bg-blue-700 h-12 px-8">
            Get Started Free
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-200 dark:border-zinc-800 mt-20">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Wallet className="h-6 w-6 text-blue-600" />
              <span className="font-semibold text-zinc-900 dark:text-zinc-50">Financer</span>
            </div>
            <p className="text-zinc-500 text-sm">© 2026 Financer. Your finances, simplified.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
