'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const router = useRouter();

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Something went wrong!
          </h1>
          <p className="mt-4 text-lg text-gray-500">
            {error.message || 'An unexpected error occurred. Please try again.'}
          </p>
          <div className="mt-8 flex justify-center gap-x-4">
            <button
              onClick={() => reset()}
              className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Try again
            </button>
            <button
              onClick={() => router.push('/')}
              className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            >
              Go back home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 