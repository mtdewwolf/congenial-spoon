import React from 'react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Guide not found
          </h1>
          <p className="mt-4 text-lg text-gray-500">
            The guide you're looking for doesn't exist or has been moved.
          </p>
          <div className="mt-8">
            <Link
              href="/guides"
              className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              View all guides
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 